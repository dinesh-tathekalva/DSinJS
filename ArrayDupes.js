const ArrayDupes = () => {
    const arr = [1, 2, 1, 3, 4, 4, 5, 6, 7, 3, 8, 8, 9, 9, 9, 0, 1];
    const hsMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (hsMap.has(arr[i])) {
        hsMap.set(arr[i], hsMap.get(arr) + 1);
      } else {
        hsMap.set(arr[i], 1);
      }
    }
    let num = [];
    let repeated = [];
    hsMap.forEach((value, key) => {
      if (value === 1) {
        num.push(key);
      } else {
        repeated.push(key);
      }
    });
    console.log(num, "Unique");
    console.log(repeated, "repeated");
  };
  ArrayDupes();
  