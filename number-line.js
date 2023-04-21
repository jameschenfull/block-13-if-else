//takes sum of two numbers and prints results
let num1 =a
let num2 =b
sum = num1 + num2
//sum is less than -1000
if (sum < -1000){
    console.log(sum + " is less than -1000")
}
//sum is a negative number
else if (sum < 0){
    console.log(sum + " is a negative number")
}
//sum is equal to 0
else if (sum = 0){
    console.log(sum + " is equal to 0")
}
//sum is larger than 0
else if (sum > 0){
    console.log(sum + " is larger than 0")
}
//sum is greater than 100
else (sum > 100){
    console.log(sum + " is greater than 100")
}

//test values
//num1	num2	Expected Print
//50	51	"101 is greater than 100"
//99	-2	"97 is greater than 0"
//0	101	"101 is greater than 100"
//500	-500	"0 is equal to 0"
//-1000	0	"-1000 is a negative number"
//-5	0	"-5 is a negative number"