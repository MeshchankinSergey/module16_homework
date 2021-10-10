const parser = new DOMParser();

const xmlString = `
<list>
  <student id="a">
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student id="b">
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

// console.log(xmlDOM);

const listNode = xmlDOM.querySelector("list");
const studentNodeA = listNode.querySelector("#a");
const nameNodeA = studentNodeA.querySelector("name");
const firstNodeA = studentNodeA.querySelector("first");
const secondNodeA= studentNodeA.querySelector("second");
const ageNodeA = studentNodeA.querySelector("age");
const profNodeA = studentNodeA.querySelector("prof");

const langAttrA = nameNodeA.getAttribute('lang');

const studentA = {
    name: firstNodeA.textContent + " " + secondNodeA.textContent,
    age: Number (ageNodeA.textContent),
    prof: profNodeA.textContent,
    lang: langAttrA,
  };

const studentNodeB = listNode.querySelector("#b");
const nameNodeB = studentNodeB.querySelector("name");
const firstNodeB = studentNodeB.querySelector("first");
const secondNodeB = studentNodeB.querySelector("second");
const ageNodeB = studentNodeB.querySelector("age");
const profNodeB = studentNodeB.querySelector("prof");

const langAttrB = nameNodeB.getAttribute('lang');

const studentB = {
    name: firstNodeB.textContent + " " + secondNodeB.textContent,
    age: Number (ageNodeB.textContent),
    prof: profNodeB.textContent,
    lang: langAttrB,
  };

const result = {
  list : [
    studentA,
    studentB
  ]
};

  console.log('result', result);