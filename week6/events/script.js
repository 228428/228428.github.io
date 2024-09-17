// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click",myFunction);

// const count = document.querySelector("#count");
// let clickCount =0;
// function myFunction (){
//     console.log("hey did you just click me");
//     clickCount++;
//     count.textContent = clickCount
// }
const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);
toggleButton.addEventListener("click", toggleMe);
function toggleMe() {
  console.log("toggle button has been clicked");
  boxContainer.classList.toggle("row-reverse");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);
addButton.addEventListener("click", addMe);

let count = 0;
function addMe() {
  console.log("add button has been clicked");
  if (count % 2 == 0) {
    boxContainer.innerHTML += `<div class="box purple-box"></div>
     <div class="box coral-box"></div>`;
  }
}
function addMe() {
  console.log("add button has been clicked");
  boxContainer.innerHTML += `<div class="box purple-box"></div>
     <div class="box coral-box"></div>`;
  count++;
}

const removeButton = document.querySelector("#remove-button");
console.log(removeButton);
removeButton.addEventListener("click", removeMe);

function removeMe() {
  let lastBox = boxContainer.lastElementChild;
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

boxContainer.addEventListener("mouseenter", dropMe);
boxContainer.addEventListener("mouseleave", pickMe);
function dropMe() {
  boxContainer.classList.add("drop");
}

function pickMe() {
  boxContainer.classList.remove("drop");
}
