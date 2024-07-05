const first = ()=>console.log("setImmediate  First called");
const second = ()=>console.log("settimeout second called");
const third = ()=>console.log("third called");


setImmediate(first);
setTimeout(second,0);
third();

