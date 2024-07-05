const first = ()=>console.log("First called");
const second = ()=>console.log("setTimeout second called");
const third = ()=>console.log("third called");


setTimeout(first,500);
setTimeout(second,500);
setTimeout(third,500);

// callback queue is FIFO
// first in first out

