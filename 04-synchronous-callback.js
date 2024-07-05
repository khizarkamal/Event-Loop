const first = ()=>console.log("First called");
const second = (callback)=> { 
    console.log("second called");
    callback();
}
const third = ()=>console.log("third called");
const forth = () => console.log("forth called");

first();
second(third);
// third(); 
forth();