const majorityElement = () => {
    const arr = [4, 4, 4, 1, 2, 2];
    const majEle = arr.length / 2;
    const hsMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (hsMap.has(arr[i])) {
        hsMap.set(arr[i], hsMap.get(arr[i]) + 1);
      } else {
        hsMap.set(arr[i], 1);
      }
    }
    hsMap.forEach((value, key) => {
      if (value >= majEle) {
        console.log(key);
      }
    });
  };
  majorityElement();

  