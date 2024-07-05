const first = ()=>console.log("First called");
const second = ()=>console.log("setTimeout second called");
const third = ()=>console.log("third (in blocking loop)");

first();

setInterval(second, 10000);

third();

