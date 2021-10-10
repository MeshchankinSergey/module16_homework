const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;
console.log(jsonString);

const developer = JSON.parse(jsonString);

const result = {
    name: developer.name,
    age: developer.age,
    skills: developer.skills,
    salary: developer.salary,
  };

// console.log('result', result);

const newJsonString = JSON.stringify(developer);
console.log(newJsonString); // выводит JSON в консоль