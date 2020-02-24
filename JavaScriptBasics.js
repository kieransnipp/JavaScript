let name = 'Kieran';
let age = 25;
console.log('Start JavaScript basics');
console.log('Output is '+name+','+age);
console.log("End JavaScript basics");

let s1 = 'Hello World';
let num = 30;
let salary = 30.22;
let flag = true;
let isActive = false;
let model = null;
let wheels = undefined;

let k = 'Kieran';
k = 30;
//Objects
let user = {
name : "Tom",
age : 20 
};
 
//1, Access data
console.log(user);
console.log('Name = '+user.name);
console.log('Age = '+user.age);

// 2, 
user['name'] = 'Mary';
console.log('Second way is ='+user.name);

//Arrays
//List of objects
let language = ['Java','C++','JavaScript','HTML',];
console.log(language)
language[2] = 'Ruby';
console.log(language);
console.log('Length is ='+language.length);
console.log('Second spot on the array = '+language[1]);


//Function
function getName(){
    console.log('Hello');
    console.log('This is a function');
}
//Call the function
getName();
//Param based function

function greet(name, age){
    console.log('Hello there '+name+', you are '+age);
}

greet('Kieran', 22);
//greet('Kieran');
//greet();

//Greet from function
function add(num1, num2){
    return num1 + num2;
}
let sum = add(10, 20);
console.log(sum);
console.log(add(33,66))

function squareRoot(num1){
    let number = num1 * num1;
    return number;
}

console.log(squareRoot(20));















































