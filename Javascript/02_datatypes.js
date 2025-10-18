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


//reference ds --- has objec
//array - is also a object;

//In js is array are hertrogenorus dynamic and basically type of object;

let arr = [1, '2', 3, 3, 10, 20];
console.log(arr);


// array methods push , pop , join , concat , shift , unshift , 
// search first indeOF , lastindexOF , find method , includes

//search:
console.log(arr.indexOf(1)); //return the index
console.log(arr.indexOf(3)); //return the index
console.log(arr.lastIndexOf(3)) //start from end and find
//using tha find methos

console.log('find --- ', arr.find((x) => x > 2)) //takes of  a function and return the matched conditions

console.log('find --- ', arr.findIndex((x) => x > 2)) //takes of  a function and return the matched conditions
console.log('find --- ', arr.findLastIndex((x) => x > 2)) //takes of  a function and return the matched conditions
//iterators:
// let arr = new Array(100).fill(0); create a arrays.

// map , filter , reduce , reduceRight , every --return boolean , some --returns a booleand , key values, entries , spread , rest , from
//sorting:
//sort method to storing and revese to reverse the there tosrot ans to reverser for seprate array;

// console.log(arr.sort()); //[ 1, 10, '2', 20, 3, 3 ] -- it works good for the the chars alphabets not for numbver
console.log(arr.sort((a, b) => b - a)); // use combare functions: desc
console.log(arr.sort((a, b) => a - b)); // use combare functions: desc


console.log(arr.at(1))
console.log(arr.concat(1))
console.log(arr.entries()) //key and value



//array sorting based on the reference

let reference = ['x', 'y', 'z'];
let inputArray = ['y', 'x', 'z', 'y', 'z'];

console.log(inputArray.sort((a, b) => reference.indexOf(a) - reference.indexOf(b)));


