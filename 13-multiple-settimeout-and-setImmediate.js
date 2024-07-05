const firstSetTimeOut = () => console.log("setTimeOut 1");
const secondSetTimeOut = () => console.log("setTimeOut 2");
const thirdSetTimeOut = () => console.log("setTimeOut 3");
const forthSetTimeOut = () => console.log("setTimeOut 4");

const firstImmediate = () => console.log("setImmediate 1");
const secondImmediate = () => console.log("setImmediate 2");
const thirdImmediate = () => console.log("setImmediate 3");
const forthImmediate = () => console.log("setImmediate 4");


setImmediate(firstImmediate);
setTimeout(firstSetTimeOut,0);
setImmediate(secondImmediate);
setTimeout(secondSetTimeOut,0);
setTimeout(thirdSetTimeOut,0);
setImmediate(thirdImmediate);
setImmediate(forthImmediate);
setTimeout(forthSetTimeOut,0);


