// https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError("Message is null!");
  } else if (typeof msg !== "string") {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  } else if (msg.length > 255 || msg.length == 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  const htmlRegex = /<[^>]*>/;
  return !htmlRegex.test(msg);
}
// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (!data || !data.jokes) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    const joke = data.jokes.find((i) => i.id === jokeId);
    if (joke == undefined) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }
    return {
      saySetup: function () {
        return joke.setup;
      },
      sayPunchLine: function () {
        return joke.punchLine;
      },
    };
  } catch (error) {
    throw error;
  }
}

function time() {
  let time = 0;
  const interval = setInterval(() => {
    time++;
    console.log("Elapsed time: " + time + " sec");
    if (time == 5) {
      clearInterval(interval);
    }
  }, 1000);
}
time();

// 6. Digit or not

// Write a function that receives a variable containing a string, as a parameter and checks whether the contents of this variable begin with a digit or not, using a regular expression.

function isDigitBegin(str) {
  const regexp = /^\d/;
  return regexp.test(str);
}
console.log(isDigitBegin("Witam"));
console.log(isDigitBegin("8Witam"));
// 7. Optional (advanced)

// Check if this entry is a phone number, e.g. set the format of your country:
// Argentina: +54 xxx-xxxx-xxx
function isArgentinaNum(str) {
  const regexp = /^\+54 [0-9]{3}-[0-9]{4}-[0-9]{3}$/;
  return regexp.test(str);
}
console.log(isArgentinaNum("8132-131-122"));
console.log(isArgentinaNum("8Witam"));
console.log(isArgentinaNum("xxx-xxxx-xxx"));
console.log(isArgentinaNum("+54 xxx-xxxx-xxx"));
console.log(isArgentinaNum("+54 123112311123"));
console.log(isArgentinaNum("+54 123-1234-211"));
console.log(isArgentinaNum("+54 123-1234-2111"));
