const AvgOfArray = () => {
    const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return console.log(sum / arr.length);
  };
  AvgOfArray();
  