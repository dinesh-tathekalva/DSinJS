const num = 4321;

function stringReverse(num) {
  const num1 = num.toString();
  const num2 = [...num1];
  let start = 0;
  let end = num2.length - 1;
  while (start < end) {
    let temp = num2[start];
    num2[start] = num2[end];
    num2[end] = temp;
    start++;
    end--;
  }
  let num3 = num2.join("");
  return parseInt(num3);
}

console.log(`Reversed string is: ${stringReverse(num)}`);
