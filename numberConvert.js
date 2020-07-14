// var decimalInput = document.querySelector("#number");
// var display = document.querySelector("#binary");

// //Convert input to binary
// function makeBinary(n) {
//   let output = "";
//   if (n != 0) {
//     let dividend = n;
//     while (dividend != 0) {
//       output = (dividend % 2) + output;
//       dividend = Math.floor(dividend / 2);
//     }
//   } else {
//     output = "0";
//   }
//   return output;
// }

// //Update display
// function updateDisplay() {
//   display.textContent = makeBinary(Math.abs(decimalInput.value));
// }

// decimalInput.addEventListener("change", updateDisplay);
// decimalInput.addEventListener("click", updateDisplay);

var $ = (name) => document.querySelector(name);

var number = $("#number");
var input = $("input");

var change = (input) => {
  let value = Number(number.options[number.selectedIndex].value + input);
  console.log(value);
  return [
    `<li> <span>binary :</span> ${value.toString(2)} </li>`,
    `<li> <span> decimal :</span> ${value.toString(10)}</li>`,
    `<li><span> octal : </span>${value.toString(8)} </li>`,
    `<li><span>hexadecimal : </span> ${value.toString(16)} </li>`,
  ];
};

function getName(item) {
  let value = change(input.value);
  var text = "";
  for (let i = 0; i < value.length; i++) {
    text += value[i];
  }
  return (document.querySelector("ul").innerHTML = text);
}

number.addEventListener("change", () => {
  getName(input.value);
});

input.addEventListener("change", () => {
  getName(input.value);
});
