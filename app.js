var num = 13.23;
console.log(Math.round(num));
console.log(Math.pow(3, 3));
console.log(Math.sqrt(64));
console.log(Math.abs(-43));
console.log(Math.floor(num)); //13
console.log(Math.ceil(num));
console.log(Math.random());
console.log(Math.min(22, 4, 30));
console.log(Math.max(22, 4, 30));
console.log(Math.PI);
console.log(Math.trunc(44.8));

//Date Object
var d = new Date();
console.log(d);

var y = new Date(1990, 0, 2, 7, 88, 44);
var z = new Date(2020, 3, 20, 22, 55);
var a = new Date(2020, 3, 20, 22);
var b = new Date(2020, 4, 20);
var c = new Date(2020, 5);
var t = new Date(30000);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(t);

//conversion of dates
console.log(d.toUTCString());
console.log(d.toISOString());
console.log(d.toDateString());

//get Method:get info of the Date object
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay());
console.log(d.getTime());

//Set Methods
d.setDate(20);
d.setHours(20);
d.setFullYear(1990);
console.log(d);

//Task
//var t = new Date();

console.log(t.getUTCDay());
console.log(t.getUTCMonth());
console.log(t.getUTCFullYear());
console.log(t.getUTCDay());
console.log(t.getUTCHours());
console.log(t.getUTCMilliseconds());
console.log(t.getUTCSeconds());

//console.log(Math.trunc(Math.random() * 5 + 1));

//get name of the Month????????????????
//var t = new Date();
// console.log(t.getMonth());

// console.log(t.getDate() > 22);
// console.log(t.getMonth() > 1);
//console.log(t.getFullYear() === 2021);

//console.log(t.getMinutes() + 10);

//Task 3 - get the name month from a particular date
// var d = new Date();
// var result = "";
// var months = [
//     "jan",
//     "feb",
//     "mar",
//     "apr",
//     "may",
//     "jun",
//     "jul",
//     "aug",
//     "sept",
//     "oct",
//     "nov",
//     "dec",
// ];
// for (var i = 0; i < months.length; i++) {
//     result = months[2];
// }
// console.log(result);
// var demo = months[d.getMonth()];
// console.log(demo);