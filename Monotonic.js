const monotonicArray = () => {
    const arr = [7, 6, 5, 4, 3, 2, 1]; 
    const increasing = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    };
    const decreasing = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          return false;
        }
      }
      return true;
    };
    return console.log(increasing(arr) || decreasing(arr));
  };
  monotonicArray();
  