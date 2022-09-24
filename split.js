var valued="here ,we, go || again, to, the * same, way";
var a,b,c;
a=valued.split(",");
b=valued.split("||");
c=valued.split("*");
console.log(a); // ['here ', 'we', ' go', ' again', ' to', ' the', ' same', ' way']
console.log(b); //  ['here ,we, go ', ' again, to, the * same, way']
console.log(c); // ['here ,we, go || again, to, the ', ' same, way']