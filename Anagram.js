const Anagram = () => {
    const str1 = "anagram";
    const str2 = "nagaram";
    const arr = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    for (let i = 0; i < str1.length; i++) {
      arr[str1.charCodeAt(i)]++;
    }
    for (let i = 0; i < str2.length; i++) {
      arr[str2.charCodeAt(i)]--;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        return false;
      } else return true;
    }
  };
  Anagram();
  