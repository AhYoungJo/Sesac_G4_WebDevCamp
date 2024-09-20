//falsy
"";
false;
0;
NaN;
undefined;
null;
const T = true,
  F = false;
let x = 1;
console.log(T || x++, T && x++, x);
//true, 1, 2
console.log(T && x++, F && x++, x);
//2, false, 3

const first = "",
  last = "Bob";
console.log(`${first} ${last}`); //bad
console.log(`${first}${first ? " " : ""}${last}`); // Good
console.log(`${first}${first && " "}${last}`); //best

console.log(false === !!"");
console.log("🚀 ~ null == 0:", null == 0); //???
console.log("🚀 ~ false == null:", false == null); //??
console.log("🚀 ~ [] == 0:", [] == 0);
console.log("🚀 ~ !![] === !!0:", !![] === !!0);
console.log("🚀 ~ Number([]):", Number([]));
