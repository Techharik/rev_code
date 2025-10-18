//datatypes
// primitive and reference datatpe;

//primitive data types -- immutable means the values are not changeble ;
// reference data types are mutavle the value is changeable ;

//primitive data type store by value in hash , reference is store in reference valeu in heap;


let a = 'hari';
a = 'sabari' //the value is not changed it reassigne the value is memory is changed permannaty immutable;

//primritive ds - string , number , boolean , null ,undefiend , Bigint , symbol;

//string - charater all;

let s = 'str';
console.log(typeof s);

//basic ops in string concat, slice , trim , replace , checks 

console.log(s + 'hhh'); //concat
console.log(s.concat('hhh')); //concat
console.log(s.includes('tf')); //checks 
console.log(s.slice(0, 1)); //slcice 
console.log(s.replace('s', 'h')) // replace
console.log(s.charAt(0)) //index
console.log(s.charCodeAt(0)) //charcode ascii


//NUMBER -- all decimal , pas , neg all are numbers 

let num = 123;
console.log(num);

// has Math obj do perform lot of things.
// can change a nu,mber into other ds - casting 

//math floor - round by lowest , math.ceil -- round by highest , math . round - based on decimals , math . abs - positive value .

num = 123.8
console.log(Math.floor(num)) //123
console.log(Math.ceil(num)) //124

//casting --  explict and implict casting , js is loosly typed and dynaic langauge; means no strict sytac and it can convert the types automatially is implict;

// example:

console.log(5 + 5) //number - 10;
console.log('5' + 5) //string 55; 
console.log(5 + "7") //string 57;
console.log(5 + 5 + "7") //string 107;

// Here it does the automatic type converstion to the string beacuse it performs the arthemeatic operations;

console.log('5' * 5) //number 25; 
console.log(5 / "7") //number 0.7142857142857143;
console.log(5 + 5 - "7") //number 3;

// Except the + the other performs operators thats convert it to the numbers;

// Boolean are true and false all the value are true execpt the value that is 0 , '' , false , null, undefined , nan

console.log(Boolean(undefined));

//null is to spefy the value that is actually a null , the type of null is obj is a mistake ; but in js everything is a object;

// undefiend - temperory memory js automatically assign by default but we can do the thing also;

let m; //undefined
let n = undefined; //extra code undefiend only;

//Explict casting;

let nums = 123;
nums.toString() //string
console.log(nums.toExponential()) //convert to expon string
console.log(nums.toFixed()) //without decimals string
console.log(nums.toPrecision(2)) //without decimals string;

//conver the string to number;
let string = '1234';
console.log(Number(string)) //number
console.log(Boolean(string)) //true