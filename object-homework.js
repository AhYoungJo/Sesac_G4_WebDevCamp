const customConsole = {
  keyIn(data, message = "keyIn>>") {
    for (const key in data) {
      console.log(message, key);
    }
  },
  valueIn(data, message = "valueIn>>") {
    for (const key in data) {
      console.log(message, data[key]);
    }
  },
  valueOf(data, message = "valueOf>>") {
    for (const value of data) {
      value.length > 1
        ? console.log(message, value[1])
        : console.log(message, value);
    }
  },
  entries(data, message = "entries:") {
    console.log(message, Object.entries(data));
  },
  getDiscriptor(data, prop, message = "getDiscriptor:") {
    console.log(message, Object.getOwnPropertyDescriptor(obj, prop));
  },
  getDiscriptors(data, message = "getDiscriptors:") {
    console.log(message, Object.getOwnPropertyDescriptors(obj));
  },
};

const modifyObj = {
  convertToArr(obj) {
    return Object.entries(obj);
  },
  doNotEntries(obj, prop) {
    return Object.defineProperty(obj, prop, {
      enumerable: false,
    });
  },
  freezing(obj, prop) {
    return Object.freeze(obj, prop);
  },
};

const arr = [100, 200, 300, 400, 500, 600, 700];
const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

//1.for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
customConsole.keyIn(arr, "arrIndx:");

//2.for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
customConsole.valueIn(arr, "arrEl valueIn:");
customConsole.valueOf(arr, "arrEl valueOf:");

//3.for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
customConsole.keyIn(obj, "obj keyIn:");

//4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
customConsole.valueIn(obj, "obj valueIn:");

//5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
const iterableObj = modifyObj.convertToArr(obj);
customConsole.valueOf(iterableObj, "iterableObj valueOf");

//6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
modifyObj.doNotEntries(obj, "level");
customConsole.getDiscriptor(obj, "level");
customConsole.entries(obj);

//7. role 프로퍼티는 읽기전용으로 설정하시오.
modifyObj.freezing(obj, "role");
obj.role = "1000"; // no error but the value doesn't changed
console.log("freeze obj.role: ", obj.role); // 9

//[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
const arr2 = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  let obj = {};
  for (const i of arr) {
    obj[i[0]] = [i[1], i[2]];
  }
  return obj;
}

const objFromArr = makeObjectFromArray(arr2);
console.log("objFromArr:", objFromArr);

//위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
function makeArrayFromObject(obj) {
  const arr = Object.entries(obj);
  let result = [];
  for (const i of arr) {
    result.push([i[0], ...i[1]]);
  }
  return result;
}

const arrFromObj = makeArrayFromObject(objFromArr);
console.log("arrFromObj:", arrFromObj);

//------------------
const kim = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan ", detail: { number: "12" } },
};

function copyObject(fn) {
  // let newObj = {};
  return function B(obj) {
    let newObj = {};
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        newObj[key] = fn(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
}

const deepCopyObject = copyObject(function A(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = A(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
});

const deepCopyKim = deepCopyObject(kim);
deepCopyKim.addr.city = "Seoul";
console.log("🚀 ~ deepCopyKim.addr.city:", deepCopyKim.addr.city);
console.log(
  "🚀 ~ deepCopyKim.addr.city !== kim.addr.city: ",
  deepCopyKim.addr.city !== kim.addr.city
);

function shallowCopyObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const shallowCopyKim = shallowCopyObject(kim);
shallowCopyKim.addr = "Seoul";
console.log("🚀 ~ newObj:", shallowCopyKim.addr);
console.log(
  "🚀 ~ shallowCopyKim.addr !== kim.addr: ",
  shallowCopyKim.addr !== kim.addr
); // //true
