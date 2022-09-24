var cities=["karachi","peshawar","islamabad","Nawabshah"];
console.log(cities);  // karachi  peshawar islamamabad nawabshah
cities.splice(1,0,"sukkur");
console.log(cities);   // karachi sukkur peshawar islamamabad nawabshah

cities.splice(2,2,"Gilgit","hyderabad");  // adding gilgit at index 3 and removing peshawar and islamabad from list

console.log(cities); // karachi sukkur gilgit hydrabad nawabshah
