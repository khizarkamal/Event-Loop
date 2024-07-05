const first = ()=>console.log("First called");
const second = ()=> { 
    console.log("second called");
    third();
}
const third = ()=>console.log("third called");
const forth = () => console.log("forth called");

first();
second();
// third();
forth();