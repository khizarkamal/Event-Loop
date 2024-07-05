const first = ()=>console.log("First called");
const second = ()=>console.log("setTimeout second called");
const third = ()=>console.log("third called");

first();
setTimeout(second, 1000);
third();