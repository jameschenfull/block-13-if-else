//code following rules...
const value = a;

//if the value is truthy, print true
if (value) {
  console.log("true");
}
//if the value is false, print...

//the boolean value false is falsy
else if (value === false) {
  console.log("the boolean value false is falsy");
}
//the null value is falsy
else if (value === null) {
  console.log("the null value is falsy");
}
//undefined is falsy
else if (value === undefined) {
  console.log("undefined is falsy");
}
//the number 0 is falsy (the only falsy number)
else if (value === 0) {
  console.log("the number 0 is falsy");
}
//the empty string is falsy (the only falsy string)
else if (value === "") {
  console.log("the empty string is falsy");
}

//test values
//Input Values	Expected Print
//"I am a string"	true
//false	"The boolean value false is falsy"
//null	"The null value is falsy"
//undefined	"undefined is falsy"
//0	"The number 0 is falsy (the only falsy number)"
//""	"The empty string is falsy (the only falsy string)"
