const stringRotation = () => {
    const str1 = "waterbottle";
    const str2 = "bottlewater";
    const str = str1.concat(str1);
    if (str.includes(str2)) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  };
  stringRotation();
  