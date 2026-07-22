const arr = [1, 1, 2];
const RemoveDuplicates = (arr) => {
  for (leti = 0; i < arr.length; i++) {
    if (arr[i] === arr[1 + 1]) {
      arr.splice(i, 1);
    }
  }
  return console.log(arr);
};
RemoveDuplicates(arr);
