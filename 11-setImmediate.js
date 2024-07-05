const first = ()=>console.log("First called");
const second = ()=>console.log("second called");
const third = ()=>console.log("third called");

setImmediate(first);
second();
third();