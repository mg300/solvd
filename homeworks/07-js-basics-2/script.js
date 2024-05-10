// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr.reduce((acc, item) => {
    if (item > 0) return (acc += item);
    return acc;
  }, 0);
}
// https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length - 1; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      count++;
    }
  }
  return count;
}
// https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor == 0) return i;
  }
}
// https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((i) => i % 2 == 0);
}
// https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let result = [];
  for (let i = 0; 0 < arr.length; i += 2) {
    result.push(Math.max(...arr));
    arr = arr.filter((item) => item !== result[i]);
    if (arr.length > 0) {
      result.push(Math.min(...arr));
      arr = arr.filter((item) => item !== result[i + 1]);
    }
  }
  return result;
}
// https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length > 100 || string.length < 2) {
    return "invalid string";
  }
  return string.split("").filter((value, index) => {
    if (index % 2 == 1) {
      return true;
    }
  });
}
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const sortedArr = [...triplet].sort((a, b) => a - b);

  return triplet.indexOf(sortedArr[1]);
}
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  const obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return parseFloat(key);
    }
  }
}

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8
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
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const odArr = array.filter((num) => num % 2 !== 0);
  const evenArr = array.filter((num) => num % 2 === 0);

  odArr.sort((a, b) => a - b);
  let res = [];
  let oddIndex = 0;
  let evenIndex = 0;
  for (let num of array) {
    if (num % 2 !== 0) {
      res.push(odArr[oddIndex]);
      oddIndex++;
    } else {
      res.push(evenArr[evenIndex]);
      evenIndex++;
    }
  }

  return res;
}

// https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(el, itemsPerPage) {
    this.el = el;
    this.itemsPerPage = itemsPerPage;
  }
  pageCount() {
    return Math.ceil(this.el.length / this.itemsPerPage);
  }
  itemCount() {
    return this.el.length;
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
    if (pageIndex === this.pageCount() - 1) {
      return this.el.length % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  let ind = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[ind++] = arr[i];
    } else {
      zeroCount++;
    }
  }
  while (zeroCount > 0) {
    arr[arr.length - zeroCount--] = 0;
  }

  return arr;
}

// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  const obj = {};
  for (let str of arr) {
    str = str.replace(/\s/g, "");
  }
  for (let str of arr) {
    str = str.replace(/\s/g, "").length == 0 ? " " : str;
    obj[uniqueString(str)] = (obj[str] || 0) + 1;
  }
  let letter;
  for (let key in obj) {
    if (obj[key] === 1) {
      letter = key;
    }
  }
  for (let str of arr) {
    if (uniqueString(str) == letter) return str;
  }

  function uniqueString(str) {
    str = str.toLowerCase();
    const uniqueChars = {};
    for (let char of str) {
      uniqueChars[char] = true;
    }
    return Object.keys(uniqueChars).sort().join("");
  }
}
