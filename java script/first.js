/*let a=4;
let  b=5;
console.log("a=",a, " & b=",b)
console.log("a+b =", a+b);
console.log("a-b=",a-b);
console.log("a*b=",  a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b)
console.log("a**b=",a**b)*
let a=5;
b=3;
console.log("a=",a,"& b=",b)
a--;
console.log("a=",a)
*
if(2==3){
    console.log("true");
}else if(2 == 2){
    console.log("yes your right");
    
}else{
    console.log("false");
    
}
let num=7
if (num%2==0){
    console.log("even number")
}
else{ console.log("odd number")}


let numb=5
if(numb<0){
    console.log("positive numb");
}else if(numb>0){
    console.log("negative number");
}
else {
    console.log("zero")}
let age=20
if(age>=18){
    console.log("you are not eligibl for vote")
}else{
    console.log("you are eligible for vote")
}*
let num1=10
let num2=20
if(num1<num2){
    console.log("num1 is greater then num2")
}else{
    console.log("num1 is less then num2 ")
}*
let marks=35;
if(marks>=40){
    console.log("pass")
}else{
    console.log("fail")}*
let a=20,b=25,c=30
if(a>b&a>c){
    console.Log("a is greater")}
else if(b>a&b>c){ 
    console.log("b is greater")}
else{ 
    console.log("c is greater")}*
let marks=70;
if(marks>=90){
console.log("Grade A")
}else if(marks>=80){
    console.log("Grade B")
}else if(marks>=70){
    console.log("Grade C")
}else if(marks>=60){
    console.log("Grade d")
}
else{console.log("fail")}*
let i=1;
do{
    console.log(i);
    i++;
}
while(i<=5);*
let arr=[10,20,30]
for(let value of arr)*
const arr=[1,2,3,4,5]
for(let i=0;i<=5;i++){
    console.log(arr[i])
}*/
/*let arr1=[1,2,3]
for( i=0;i<=3;i++){
console.log(arr1[i])
}
*

let arr1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
 *
let arr=[1,2,3,4,5]
let sum=0
for(i=0;i<arr.length;i++){
    sum=sum+i;
    console.log(sum)
}*
let arr = [5, 10, 15, 20, 25];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number is:", largest);*
let fruits=["apple","banana","apple"]
let secondfruit= fruits[0]
console.log("second fruit")

let fruits=["apple","banana","apple"]

let firstfruit= fruits[0]
console.log("firstfruit")*
let fruits=["apple","banana","apple","mango"]
let [firstfruit, thirdfruit, fourthfruit]=fruits;
console.log("first fruit")
console.log("thirdfruit")
console.log("fourthfruit")*

let num=[1,2,3,4]
let result=num.filter(function(num){
return num <3;
})
console.log(result)
number=[5,6,7]*/
// const students={
//     name:"Fatima",
//     age:26,


// }
// console.log(students.name ,students.age)

// function
// function greet() {
//     console.log("Hello World");
// }

// greet();



function sayHello(name) {
    console.log("Hello, " + name);
}

// function call
sayHello("fatima tul zahra");

function add(a,b){
    return a+b;
}
console.log(add(7,5));
// check even num
function checkEven(num)
{
    if(num % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(checkEven(4)) 
console.log(checkEven(5))
// square num
function square(a){
    return a*2
}
console.log(square(4))
// find max
function findmax(a,b){
    if(a<10){
        return "greater"
    }else{
        return "lessthen"
    }
}
console.log(findmax(4))
// getLength(str)
function getLength(str){
    return str.length;
}
console.log(getLength("fatima"))
console.log(getLength("JavaScript"));

