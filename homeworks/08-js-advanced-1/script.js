// 1.Create a function to access the properties of an object.

(() => {
  const user = {
    username: "testuser1",
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  function pluck(obj, str) {
    const properties = str.split(".");
    let currentObj = obj;
    for (let property of properties) {
      if (currentObj === null || currentObj === undefined) {
        return null;
      }
      currentObj = currentObj[property];
    }
    return currentObj;
  }
  const randomValue = Math.random();
  const nullValue = null;
  console.log(pluck(user, "preferences.sound.value")); // 30
  console.log(pluck(user, "unknown.key")); // null
  console.log(pluck(randomValue, "unknown.key")); // null
  console.log(pluck(nullValue, "unknown.key")); // null
})();
//2. Deep Clone
//Create custom deep clone function.
(() => {
  function clone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    const clonedObj = { ...obj };
    for (let key in obj) {
      clonedObj[key] = clone(obj[key]);
    }

    return clonedObj;
  }

  const user = {
    username: "testuser1",
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const clonedUser = clone(user);

  clonedUser.preferences.sound.maxValue = 70;

  console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false
})();

//3. "A long time ago"

// Create a function that returns how long ago a certain day was.

(() => {
  function offset(moment) {
    const now = new Date(2021, 2, 23, 14, 0, 0);
    const diff = now.valueOf() - moment.valueOf();
    const differences = {
      days: Math.floor(diff / (24 * 60 * 60 * 1000)),
      hours: Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
      minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
      seconds: Math.floor((diff % (60 * 1000)) / 1000),
    };
    let resString = "";
    if (differences.days !== 0) {
      resString += `${differences.days} days, `;
    }
    if (differences.hours !== 0) {
      resString += `${differences.hours} hours, `;
    }
    if (differences.minutes !== 0) {
      resString += `${differences.minutes} minutes, `;
    }
    if (differences.seconds !== 0) {
      resString += `${differences.seconds} seconds`;
    }

    resString = resString.replace(/, $/, "");

    return resString;
  }
  function moment(dateString, format) {
    const date = {
      year: dateString.substring(format.indexOf("Y"), format.indexOf("Y") + 4),

      month: dateString.substring(format.indexOf("M"), format.indexOf("M") + 2),

      day: dateString.substring(format.indexOf("D"), format.indexOf("D") + 2),

      hour: dateString.substring(format.indexOf("h"), format.indexOf("h") + 2),

      min: dateString.substring(format.indexOf("m"), format.indexOf("m") + 2),

      sec: dateString.substring(format.indexOf("s"), format.indexOf("s") + 2),
    };
    return new Date(...Object.values(date).map((item) => parseInt(item)));
  }
  // E.g. Today is 23.02.2021, 14:00:00
  console.log(offset(moment("23/02/2021 13:30:00", "DD/MM/YYYY hh:mm:ss")));
  // 30 minutes ago

  console.log(offset(moment("23/02/2021 13:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 1 hour ago

  console.log(offset(moment("23/02/2021 11:30:00", "DD/MM/YYYY hh:mm:ss")));
  // 2 hours 30 minutes ago

  console.log(offset(moment("22/02/2021 14:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 1 day ago

  console.log(offset(moment("23/02/2020 10:00:00", "DD/MM/YYYY hh:mm:ss")));
  // 366 days ago
})();

// 4. Random dates
// Create a function that generate a random date between to dates
import mm from "moment";
(() => {
  function randomDate(date1, date2) {
    const diff = date2.valueOf() - date1.valueOf();
    const randomDiff = Math.random() * diff;
    const randomTimestamp = date1.valueOf() + randomDiff;
    return mm(randomTimestamp);
  }
  const date1 = mm("23/01/2021", "DD/MM/YYYY");
  const date2 = mm("23/02/2021", "DD/MM/YYYY");
  console.log(randomDate(date1, date2).format("DD/MM/YY"));
  // 20/02/2021
})();

//https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  let res = {};
  for (let obj of arr) {
    for (let key in obj) {
      res[key] = obj[key];
    }
  }
  return res;
}
//https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, "fullName", {
    set: function (str) {
      const names = str.split(" ");
      if (names.length == 2) {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}
//https://www.codewars.com/kata/54834b3559e638b39d0009a2/train/javascript
function OnceNamedOne(first, last) {
  Object.defineProperty(this, "firstName", {
    value: first,
  });

  Object.defineProperty(this, "lastName", {
    value: last,
  });

  Object.defineProperty(this, "fullName", {
    value: this.firstName + " " + this.lastName,
  });
}
//https://www.codewars.com/kata/partial-keys
function partialKeys(obj) {
  const handler = {
    get(target, prop) {
      const key = Object.keys(obj)
        .sort()
        .filter((x) => x.startsWith(prop))[0];
      return key ? obj[key] : undefined;
    },
  };
  return new Proxy(obj, handler);
}
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return hours + ":" + minutes + ":" + sec;
}
