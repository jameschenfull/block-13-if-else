//two sets of two values, print true if at least one of the pair is truthy
const param1A = a;
const param1B = b;
const param2A = c;
const param2B = d;

if (param1A === param1B || param2A === param2B) {
  console.log("true");
} else {
  console.log("false");
}

//test values
//param1A param1B param2A param2B Expected Print
//"cat"	"cat"	6	"6"	true
//"five"	5	"dog"	"dawg"	false
//0	false	"horse"	"horse"	true
//"eight"	"eight"	"ate"	"ate"	true
//11	"eleven"	"four"	"for"	false
//"cake"	"cake"	"pie"	"pie"	true
