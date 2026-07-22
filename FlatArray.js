const FlatArray = () => {
    let arr = [1, 2, 3, [4, 5, 6], 7];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 1) {
        for (let j = 0; j < arr[i].length; j++) {
          arr.push(arr[i][j]);
        }
        arr.splice(i, 1);
      }
    }
    return console.log(arr);
  };
  FlatArray();
  