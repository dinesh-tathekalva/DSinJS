const uncommonWords = () => {
    const str1 = "this apple is sweet";
    const str2 = "this apple is sour";
    const str3 = str1 + " " + str2;
    const str = str3.split("");
    const hs = new Map();
    for (let i = 0; i < str.length; i++) {
      if (hs.has(str[i])) {
        hs.set(str[i], hs.get(str[i]) + 1);
      } else {
        hs.set(str[i], 1);
      }
    }
    hs.foreach((value, key) => {
      if (value === 1) {
        console.log(key);
      }
    });
  };
  uncommonWords();
  