const parser = new DOMParser();

const xmlString = `<list><student><name lang="en"><first>Ivan</first><second>Ivanov</second></name><age>35</age><prof>teacher</prof></student><student><name lang="ru"><first>Петр</first><second>Петров</second></name><age>58</age><prof>driver</prof></student></list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNodeFirst = xmlDOM.querySelector("list").firstChild;
const studentNodeSecond = xmlDOM.querySelector("list").lastChild;

function studentObj (node){
  let nameNode = node.querySelector("name");
  let firstNode = node.querySelector("first");
  let secondNode = node.querySelector("second");
  let ageNode = node.querySelector("age");
  let profNode = node.querySelector("prof");

  let langAttr = nameNode.getAttribute('lang');
  
  let student = {
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number (ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  };
   return student;
}

const studentFirst = studentObj (studentNodeFirst);
const studentSecond = studentObj (studentNodeSecond);

const result = {
  list : [
    studentFirst,
    studentSecond
  ]
};

console.log('result', result);