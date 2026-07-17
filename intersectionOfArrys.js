const intersectionOfArray = () => {
    const arr1 = [1, 2, 2, 1, 3, 4, 5];
    const arr2 = [2, 2, 3, 4, 5];
    const set1 = new Set();
    const set2 = new Set();
    for (let i = 0; i < arr1.length; i++) {
      set1.add(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
      set2.add(arr2[i]);
    }
    set1.forEach((key) => {
      if (set2.has(key)) {
        console.log(key);
      }
    });
  };
  intersectionOfArray();

  