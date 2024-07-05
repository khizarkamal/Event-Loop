const first = ()=>console.log("First called");
const second = ()=>console.log("setTimeout second called");
const third = ()=>console.log("third (in blocking loop)");

first();
setTimeout(second, 0);

const startTime = new Date();
const fiveMoreSeconds = 5000;
const endTime = new Date(startTime.getTime() + fiveMoreSeconds);

while(new Date() < endTime){
    third();
}
