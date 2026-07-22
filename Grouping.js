const Grouping = () => {
    const arr = [0, 1, 1, 0, 0, 1, 2, 2, 1, 2, 0, 2];
    let low = 0;
    let mid = 0;
    let high = 0;
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        low = low + 1;
      }
    }
    //   console.log(low);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        mid = mid + 1;
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 2) {
        high = high + 1;
      }
    }
    console.log(low, "low");
    console.log(mid, "mid");
    console.log(high, "high");
  
    for (let i = 0; i < low; i++) {
      arrNew.push(0);
    }
    for (let i = 0; i < mid; i++) {
      arrNew.push(1);
    }
    for (let i = 0; i < high; i++) {
      arrNew.push(2);
    }
    console.log(arrNew);
  
    return console.log(arrNew);
  };
  Grouping();
  