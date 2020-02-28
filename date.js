const now = new Date();
console.log(now);

const formatNow = new Date('February 28 2020 11:00');
console.log(formatNow);



console.log('Todays date ='+now.getDate());
console.log('Todays month ='+now.getMonth());
console.log('Todays full year ='+now.getFullYear());
console.log('Todays hour ='+now.getHours());

console.log('Todays toDateString ='+now.toDateString());

console.log('Todays time ='+now.toTimeString());