console.log('This is a console log bit part 1');
console.log('This is a console log bit part 2x');
console.log(2+2);

let name = 'Kieran';
let age = '25';

const myAge = 43;
console.log('Name is ='+name+ ', age = '+age);
console.log('My age is '+myAge);
//console.log(age);
let s1 = 'Hello world';
console.log(s1.toUpperCase.toString);

let user = {
    age : "Tom",
    age : 30
};

console.log(user);
console.log('Age is = '+user.age);
user.age = 35;
console.log('Updated age is = '+user.age);

//2, Using bracket notation
user['name'] = 'Mary';
console.log(user.name);

//Arrays - list of objects
let language = ['java', 'javascript', 'c++'];
console.log('Languages are = '+language);
console.log('language length is = '+language.length);
console.log('Languages array first place is  = '+language[1]);

function getName(nameIn){
    console.log('Hello '+nameIn);
}

getName('kieran');

function add(num1, num2){
    return num1 + num2;
}
let sum = add(10, 20);
console.log('Sum is = '+sum);

function squareRoot(number){
    return root = number * number;
}

console.log(squareRoot(2));

function converToSeconds(timeIn){
    return timeout = timeIn / 1000;

}


console.log(converToSeconds(10000));