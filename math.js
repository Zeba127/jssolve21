const result = Math.pow(3 ,2);
console.log(result)

//abs
const num1 = 25;
const num2 = 35;
const gap =Math.abs (num1-num2);
if(gap <5){
    console.log('you are frnd');
}
else{
    console.log('you are not frnd')
}

//round
const number =2.360;
const fullnumber =Math.round(number);
// console.log(fullnumber);

const number2 =Math.ceil(2.00003);
// console.log(number2)

const number3 =Math.floor(203.500003);
// console.log(number3)


// const number4 =Math.random()*50
// console.log(number4);
for(var i= 0;i<20;i++){
const number4 =Math.round(Math.random()*6);
console.log(number4);
}