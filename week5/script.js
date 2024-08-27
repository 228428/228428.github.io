// console.log("welcome to interactive media");
// //this is a comment
// let count = 10;
// console.log(count);
// // const name = prompt("what is your name?");
// //console.log("hello",name);
// const myNameIs = "kunzes";
// const myCityIs = " Melbourne";
// console.log(myNameIs, "lives in", myCityIs);

// count = 20;
// console.log(count);

// count = 40;
// console.log(count);

// {
//   let b = 30;
//   console.log(b);
// }
// //console.log(b)
// let countStudents = 30;

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("please bring umbrella");
// } else {
//   console.log("no need for umbrella");
// }

// let isitOARTClass = true;
// console.log(isitOARTClass);

// const studentRecord = {
//   name: "Kunzes",
//   id: 12345,
//   class: "OART123",
//   amIAScienceStudent: false,
//   amIADesignStudent: true,
// };
// if (studentRecord.amIADesignStudent === true) {
//   console.log("welcome to class");
// } else {
//   console.log("sorry you are in the wrong class");
// }

// let myGrade = 100;
// if (myGrade >= 90) {
//   console.log("you got an HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("you got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got c");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("you got p");
// } else {
//   console.log("you got F");
// }
// //console.log(studentRecord.name);
// //console.log(studentRecord.name, "is a", studentRecord.class,"student");
// //console.log (`${studentRecord.name} is a ${studentRecord.class}`)
// //console.log(studentRecord.amIADesignStudent)

// let studentNames = ["Kunzes", "Sam", "Jiwon", "Rohit"];
// console.log(studentNames);
// console.log(studentNames[4]);
// let numArray = [1, 2, 3, 4, 5, 6];
// console.log(numArray);

console.log("hello Kunzes");
console.log("hello Sam");
console.log("hello Jiwon");
console.log("hello Rohit");
console.log("hello Lyn");

let names = ["Kunzes", "Jiwon", "Sam", "Lyn", "Rohit"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Jello", names[i]);
}

/*
HOw it works in the back end
i = 0,names.length=7
1<7 TRUE
hello names[0] => Kunzes
i=1

2< 7 TRUE
hello names[1] =>Jiwon
i=2

3< 7 TRUE
hello names[1] =>Sam
i=3

4< 7 TRUE
hello names[1] =>Lyn
i=4

5< 7 TRUE
hello names[1] =>Rohit
i=5

6< 7 TRUE
hello names[1] =>Aldora
i=6

7< 7 FALSE

*/
let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "heels", price: 180 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;
console.log("my shopping total", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log("my shopping sum", sum);

shoppingCart.forEach(calculateTotal);
sum = 0;
function calculateTotal(item) {
  sum = sum + item.price;
  console.log(item.price);
}

console.log("my shoppiny sum", sum);
