const MissingElement = () => {
    let arr = [1, 2, 4, 7];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] !== arr[i] + 1) {
        console.log(arr[i] + 1);
        arr.push(arr[i] + 1);
        arr.sort();
      }
    }
    return console.log(arr);
  };
  MissingElement();
  