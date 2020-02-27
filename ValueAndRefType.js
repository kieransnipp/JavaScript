//value type:

let p = {value : 10};
let q = p; //copied by value
p.value = 20; 

console.log("p.value is = "+p.value);
console.log("q.value is = "+q.value);