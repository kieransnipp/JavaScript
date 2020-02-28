// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
  
//   console.log(getRandomInt(3));
//   // expected output: 0, 1 or 2
  
//   console.log(getRandomInt(1));
//   // expected output: 0
  
//   console.log(Math.random());
//   // expected output: a number between 0 and 1
//   function calcHypotenuse(a, b) {
//     return(Math.sqrt((a * a) + (b * b)));
//   }
  
//   console.log(calcHypotenuse(3, 4));
//   // expected output: 5
  
//   console.log(calcHypotenuse(5, 12));
//   // expected output: 13
  
//   console.log(calcHypotenuse(0, 0));
//   // expected output: 0

function getMathRandom(min, max){
return Math.random() * (max - min )+min;
}

let random = getMathRandom(5, 100);
console.log('Random number is ='+Math.floor(random));

