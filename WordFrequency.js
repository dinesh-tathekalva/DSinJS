const WordFrequency = () => {
    const sen = "the day is sunny the the the sunny is is";
    const hsMap = new Map();
    const senSplit = sen.split(" ");
    for (let i = 0; i < senSplit.length; i++) {
      if (hsMap.has(senSplit[i])) {
        hsMap.set(senSplit[i], hsMap.get(senSplit[i]) + 1);
      } else {
        hsMap.set(senSplit[i], 1);
      }
    }
    return console.log(hsMap);
  };
  WordFrequency();
  