//Enumerating properties of an Objet
//get all the properties of an object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
//Get properties
//1, for in loop
for (let key in circle)
    console.log(key, circle[key]);
console.log('**********************');

//2, for - of loop
for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle)) //Get values of obj
    console.log("Values = " + entry);

//3, in operator
//check a property in an object
if ('radius' in circle){
    console.log(circle.radius.toString+" is in the circle");
}

if ('draw' in circle){
    console.log(circle.draw+" is in the circle");
}

if ('dog' in circle)
    console.log("Yes");

console.log('**********************');

