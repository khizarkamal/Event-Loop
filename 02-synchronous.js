const first = ()=>console.log("First called");
const second = ()=>console.log("second called");
const third = ()=>console.log("third called");

first();

for(let i=0; i< 5;i++){
    second();
} 

third();