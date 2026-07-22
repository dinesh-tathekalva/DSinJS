const TwoPointVowelSwap = () => {
    const str = "Dinesh";
    const strCopy = [...str];
    let start = 0;
    let end = str.length - 1;
    const vowels = "aeiouAEIOU";
    while (!vowels.includes(strCopy[start]) && start < end) {
      start++;
    }
    while (!vowels.includes(strCopy[end]) && start < end) {
      end--;
    }
    let temp = strCopy[start];
    strCopy[start] = strCopy[end];
    strCopy[end] = temp;
    start++;
    end--;
    console.log(strCopy.join(""));
  };
  TwoPointVowelSwap();
  