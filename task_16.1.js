const parser = new DOMParser();

const xmlString = `
<list>
  <student id="first">
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student id="second">
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");

const studentNodeFirst = listNode.querySelector("#first");

const studentNodeSecond = listNode.querySelector("#second");

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