class Serializable {
  serialize() {
    this.className = this.constructor.name;
    return JSON.stringify(this, (key, value) => {
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (value === Infinity) {
        return "Infinity";
      }
      if (value === -0) {
        return -0;
      }
      return value;
    });
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    const className = this.constructor.name;
    if (data.className !== className) {
      throw new Error(`Attempted to wake from serialized data of different class: ${data.__className__}`);
    }

    delete data.className;
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    for (let property in data) {
      if (isoDateRegex.test(data[property])) {
        data[property] = new Date(data[property]);
      }
      if (data[property] == "NaN") {
        data[property] = NaN;
      }
      if (data[property] == "Infinity") {
        data[property] = Infinity;
      }
      if (data[property] == "-0") {
        data[property] = -0;
      }
    }
    const instance = new this.constructor(data);
    return instance;
  }
}

class UserDTO extends Serializable {
  constructor({ firstName, lastName, phone, birth } = {}) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birth = birth;
  }

  printInfo() {
    console.log(`${this.firstName[0]}. ${this.lastName} - ${this.phone}, ${this.birth.toISOString()}`);
  }
}
class Post extends Serializable {
  constructor({ content, date, author } = {}) {
    super();
    this.content = content;
    this.date = date;
    this.author = author;
  }
}

let tolik = new UserDTO({
  firstName: "Anatoliy",
  lastName: "Nashovich",
  phone: "2020327",
  birth: new Date("1999-01-02"),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);
console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

try {
  console.log(new Post().wakeFrom(serialized));
} catch (error) {
  console.log("error");
}
// throw an error because the srialized line does contain data for User class
const test1 = new UserDTO({
  firstName: NaN,
  lastName: Infinity,
  phone: -0,
  birth: new Date("1999-01-02"),
});
const serialized1 = test1.serialize();
console.log(new UserDTO().wakeFrom(serialized1));
const test2 = new UserDTO({
  firstName: ["1", "asd", "3"],
  lastName: [1, 2, 3],
  phone: { a: "b", c: "d" },
  birth: new Date("1999-01-02"),
});
let serialized2 = test2.serialize();
serialized2 = serialized2.slice(0, -1);
serialized2 += ',"abc":"bca"}';
console.log(new UserDTO().wakeFrom(serialized2));

const test3 = new UserDTO({
  firstName: ["1", "asd", "3"],
  lastName: true,
  phone: false,
  birth: new Date("1999-01-02"),
});
let serialized3 = test3.serialize();
serialized3 = serialized3.slice(1);
serialized3 = '{"abc":"bca",' + serialized3;
console.log(new UserDTO().wakeFrom(serialized3));
