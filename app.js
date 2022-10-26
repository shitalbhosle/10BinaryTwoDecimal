const binaryInput = document.querySelector("#binary");
let result = document.querySelector(".result");
const container = document.querySelector(".container");

function binaryToDecimal(res) {
  // res = 0100
  // finalDecimal = 0
  // count = 0
  // i = 4
  let finalDecimal = 0;
  let count = 0;
  for (let i = res.length - 1; i >= 0; i--) {
    finalDecimal += res[i] * 2 ** count;
    count++;
  }
  return finalDecimal;
}

container.addEventListener("submit", (event) => {
  event.preventDefault();
  let finalResult = binaryToDecimal(binaryInput.value);
  result.innerHTML = `Decimal Number : ${finalResult}`;
});
