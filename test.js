function decipherThis(str) {
  console.log(str);
  const arr = str.split(" ");
  let res = [];
  for (word of arr) {
    const charCodeStr = String.fromCharCode(parseInt(word.match(/\d+/)[0]));
    const lettersMatch = word.match(/[a-zA-Z]+/g);
    const letters = lettersMatch ? lettersMatch.join("") : "";
    word = (charCodeStr + letters).split("");
    console.log(word);
    [word[1], word[word.length - 1]] = [word[word.length - 1], word[1]];
    res.push(word.join(""));
  }
  console.log(res);
  return res.join(" ");
}
decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o");
