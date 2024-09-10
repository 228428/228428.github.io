function checkGrade() {
  const a1 = document.querySelector("#answer1");
  const a1Value = parseFloat(a1.value); // Convert to number
  console.log(a1Value);

  const a2 = document.querySelector("#answer2");
  const a2Value = parseFloat(a2.value); // Convert to number
  console.log(a2Value);

  const total = calculateTotal(a1Value, a2Value);
  console.log(total);
  reportBackGrade(total);
  // a1.value = "";
}

function calculateTotal(a, b) {
  return a + b;
}

function reportBackGrade(score) {
  let report = document.querySelector("#report");
  report.innerHTML = "";
  if (score > 30) {
    report.innerHTML = `You scored <span class="grade">High Distinction </span>!!!`;
  } else if (score > 20 && score <= 30) {
    report.innerHTML = `You scored <span class="grade">Distinction </span>!!!`;
  } else if (score > 10 && score <= 20) {
    report.innerHTML = `You scored <span class="grade">Passing marks </span>!!!`;
  } else {
    report.innerHTML = `Sorry, you <span class="fgrade">failed </span>!!!`;
  }
}

//   const question1= document.querySelector("#question2");
//   console.log (question2.textcontent);
//   question2.textContent ="what is as2 score?"

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red.style");

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.classList.add("red-style");
question2.classList.add("blue-style");

const myCat = document.querySelector("#my-cat");
console.log(myCat);
// myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
header.textContent = "my cat 2";
header.innerHTML = `<p class = "blue-style"> miow miow miow </p>`;
`</p class+"red-style"> do you understand? </p>`;
