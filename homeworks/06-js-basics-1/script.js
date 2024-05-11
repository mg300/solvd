// http://www.codewars.com/kata/opposite-number
function opposite(number) {
  return -number;
}
// http://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": {
      return value1 + value2;
    }
    case "-": {
      return value1 - value2;
    }
    case "*": {
      return value1 * value2;
    }
    case "/": {
      return value1 / value2;
    }
  }
  return 0;
}
// http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
  return array.join(",");
}
// http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  const BASE_PRICE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  let totalCost = d * BASE_PRICE;
  if (d >= 7) {
    totalCost -= DISCOUNT_7_DAYS;
  } else if (d >= 3) {
    totalCost -= DISCOUNT_3_DAYS;
  }
  return totalCost;
}
// http://www.codewars.com/kata/calculating-with-functions
function zero(cb) {
  return cb ? cb(0) : 0;
}
function one(cb) {
  return cb ? cb(1) : 1;
}
function two(cb) {
  return cb ? cb(2) : 2;
}
function three(cb) {
  return cb ? cb(3) : 3;
}
function four(cb) {
  return cb ? cb(4) : 4;
}
function five(cb) {
  return cb ? cb(5) : 5;
}
function six(cb) {
  return cb ? cb(6) : 6;
}
function seven(cb) {
  return cb ? cb(7) : 7;
}
function eight(cb) {
  return cb ? cb(8) : 8;
}
function nine(cb) {
  return cb ? cb(9) : 9;
}

function plus(inner) {
  return (outer) => outer + inner;
}
function minus(inner) {
  return (outer) => outer - inner;
}
function times(inner) {
  return (outer) => outer * inner;
}
function dividedBy(inner) {
  return (outer) => Math.floor(outer / inner);
}

// http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  const middleElIndex = Math.floor(s.length / 2);
  if (s.length % 2 == 1) {
    return s[middleElIndex];
  } else {
    return s[middleElIndex - 1] + s[middleElIndex];
  }
}
// http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  let boundaryIndex = 0;
  const helper = [];
  for (let i = 0; i < items.length; i++) {
    const ok = pred(items[i]);
    if (!ok) {
      [items[boundaryIndex], items[i]] = [items[i], items[boundaryIndex]];
      boundaryIndex++;
    } else {
      helper.push(items[i]);
    }
  }
  items.splice(boundaryIndex, helper.length, ...helper);
  return boundaryIndex;
}
// http://www.codewars.com/kata/word-count
//ERROR 404
// https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let valuesCounts = {};
  for (let el of A) {
    valuesCounts[el] ? valuesCounts[el]++ : (valuesCounts[el] = 1);
  }
  for (key in valuesCounts) {
    if (valuesCounts[key] % 2 == 1) return parseInt(key);
  }
}
// https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  let counterEven = 0;
  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      counterEven++;
      evenNum = i;
    } else {
      oddNum = i;
    }
  }
  if (counterEven == 1) {
    return integers[evenNum];
  } else {
    return integers[oddNum];
  }
}
// https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  const arr = [];
  const length = Math.min(a0.length, a1.length);
  for (let i = 0; i < length; i++) {
    arr.push(fn(a0[i], a1[i]));
  }
  return arr;
}
// https://www.codewars.com/kata/filter-the-number
var filterString = function (value) {
  const numbers = value.match(/\d+/g);
  return parseInt(numbers.join(""));
};
// https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}
// https://www.codewars.com/kata/cat-and-mouse-2d-version/
function catMouse(map, moves) {
  const arr = map.split("\n");
  let cPosX;
  let mPosX;
  let cPosY;
  let mPosY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("C") >= 0) {
      cPosX = arr[i].indexOf("C");
      cPosY = i;
    }
    if (arr[i].indexOf("m") >= 0) {
      mPosX = arr[i].indexOf("m");
      mPosY = i;
    }
  }
  if (cPosX == undefined || mPosX == undefined || mPosY == undefined || cPosY == undefined) {
    return "boring without two animals";
  }

  movesAct = Math.abs(cPosX - mPosX) + Math.abs(cPosY - mPosY);
  if (moves >= movesAct) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}
// https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  word = word.toLowerCase();
  newString = "";
  for (let i = 0; i < word.length; i++) {
    let counter = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] == word[j]) {
        counter++;
      }
    }
    if (counter > 1) {
      newString += ")";
    } else {
      newString += "(";
    }
  }
  return newString;
}

// https://www.codewars.com/kata/5693239fb761dc8670000001
function findAdditiveNumbers(num) {
  console.log(num);
  arr = [];
  run = true;
  for (let i = 1; i < 10; i++) {
    if (!run) break;
    for (let j = 1; j < 10; j++) {
      const result = cmp(i, j, 0);
      if (!run) break;
      if (result == true) {
        run = false;
      } else {
        arr = [];
      }
    }
  }
  function cmp(fDig, sDig, start) {
    num1 = parseInt(num.substring(start, fDig + start));
    num2 = parseInt(num.substring(start + fDig, sDig + start + fDig));
    const length = num1.toString().length + num2.toString().length;
    sum = num1 + num2;
    num3 = parseInt(num.substring(length + start, length + sum.toString().length + start));
    if (sum == num3) {
      arr.push(num1);
      if (num.length - fDig - sDig - sum.toString().length - start == 0) {
        arr.push(num2);
        arr.push(sum);
        return true;
      }
      return cmp(sDig, sum.toString().length, start + fDig);
    } else {
      return false;
    }
  }
  if (arr.join("").length != num.length) return [];

  arr = arr.map((item) => item.toString());
  return arr;
}

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    const stars = "*".repeat(2 * i + 1);
    const spaces = " ".repeat(nFloors - i - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      res.push(newStr);
    }
  }
  return res;
}
// https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  string = string.replace(/\s/g, "");
  const arr = [];
  let startIndex = 0;
  while (startIndex < string.length) {
    const substring = string.substr(startIndex, n);
    arr.push(substring);
    startIndex += n;
  }

  return arr.join("\n");
}

// https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)/;
  const match = url.match(domainRegex);
  if (match) {
    return match[1];
  }
  return "";
}
