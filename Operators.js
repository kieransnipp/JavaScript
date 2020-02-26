//Types of operators
//1, Arithametic
//2, Assignment
//3, Ternary
//4, Comparison
//5, Logic
//6, Binary

//1, Arithametic
let x = 10;
let y = 20;

console.log(x-y);
console.log(x*y);
console.log(x+y);
console.log(x/y);
console.log(y/x);
console.log(y ** y);
console.log(x ** x);

// ++ and --
let p = 1;
let q = p++;
console.log(p);
console.log(q);

let n = 2;
console.log(--n);   

//2, Assignemnt
let yy = 10;
let c = yy+10;
console.log(yy);

//3, Comparison
let z = 10;
console.log(z>1)
console.log(x === 10) //Number type and value

console.log('1' ==1); //Comparing value

console.log(true == 1); //boolean true
console.log(false == 0)

//4, Ternary
let points = 90;
let type = points > 100 ? 'gold' : 'silver' 
console.log('Type is ='+type)

//logical:
//AND (&&):

// || OR

//NOT (!)
let isActive = true;
console.log(!isActive);
console.log(!10 < 5);

//logical operators with non boolean

//falsey + truthy
let userColor = 'blue'; // 'blue';
let defaultColor = 'Red'; 
let currentColor = userColor+' , '+ defaultColor;
console.log('Color is ='+currentColor);

//Bitwise
//1, = 00000001 
//2, = 00000010
//3, = 00000011
console.log(1 | 2); 
console.log(1 & 2);

//Operator presidence
console.log((2+3)*4);
 

let a = 10;
let b = 20;

console.log(a);
console.log(b);