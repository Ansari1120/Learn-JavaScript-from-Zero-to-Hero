var date=new Date();

console.log(date);  //Mon Aug 08 2022 23:13:05 GMT+0500 (Pakistan Standard Time)

var anotherdate=new Date("2020/7/5");
console.log(anotherdate);//Sun Jul 05 2020 00:00:00 GMT+0500 (Pakistan Standard Time)

var anotherdate=new Date("2020/7/5 10:13:44:120");
console.log(anotherdate); //Sun Jul 05 2020 10:13:44 GMT+0500 (Pakistan Standard Time)

var epochtime=new Date(0);
console.log(epochtime); //Sun Jul 05 2020 10:13:44 GMT+0500 (Pakistan Standard Time)


console.log(date.getTime()); // 1660132270289 mili seconds passed sice 1st jan 1970 at 4:51 , 8/10/2002

console.log(date.getDay());     // day of week since this is second week's third day from 7 to 10 its 3rd day
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth()); // indexing starts from 0 so month +1 becomes 8th month

// time diffrence calculation to know how many hours remain from due data of something 

var date1=new Date("2020/7/5 10:13:44:120");
var date2=new Date("2020/7/15 10:13:44:120");

var diff=date2.getTime()- date1.getTime();

var secondsinaday=60*60*24*1000;

var daydiff=diff/secondsinaday;
console.log(daydiff);  // 10 days




