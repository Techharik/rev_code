// js - scripting Lanagues.
//- created by brenden Eich in 1995 for netscape names as  a LiveScript . primaryly for a fronetend.
// - synchoroucs and sincle threaded by nature -- means blocking code execute one by one and has only one thread.
// - can perfrom ansychrouns operation beacuse  -- of the runtime provided by the browers eventloops.
// - it initaly interpretor langauge now can compile too JIT compilation in js engine .
// - Ecma scipt is aeropean commputer manufacturing association formed a rules for browser engine that makes js behave the same in all browser , google v8 is the fastest engine in the curent , some first enginer also build buy the founder for firefox spider monkey.


// Variable declarations.

// let , const , var  --- let , const are new , var is old -- avoid using var .

let a = 10;
// let a = 20;
a = 30
//cant redeclare the same value , but can reassign --  block scoped -- memory stored in blocked level

var b = 10;
var b = 20;
//can redeclare and reassign --> don't do this -- global scope memory store in global object.

console.log(b)

const c = 10;
// c = 20;  cannot reassign and redeclared -- block Level scope 
console.log(c);

//ES6- modern Js user the let and const for memory safe becasue var is global strired.
// since var is global strod the memeory will be permanant means the GB will not clean the Memory in the
// js has automatic garbage collector it cleans it memory automaticaly we need to write code more efficent inorder to safe from memmory leaks.

//Hosiitng - variable with var are partically hosited and function declartion are fully hoisted.

console.log(r) // --- undefiend
var r = 10;
console.log(r) // -10

//Hoisting is a concept where the memory in the js is allocated before the interpretor started the read the code.the themporty stored memeory is undefined. that is hosied the hosite will happen in all the level of scope

function scopeing() {
    console.log(r) //undefiend
    var r = 2; //change it let and const wont works.
    return r
}

console.log(scopeing());

// scope:

//scoping is based the where the variable is declared the accessablity of the the varibale is determined?

// three scopes - global function/local , block

var y = 10;

function scoped() {
    let re = 20;

};

{
    let y = 30;
}

//global scope is accessable in all area and we can modfi it allso

// example

if (true) {
    y = 20;
    console.log(y) //accessed the global scope and modifed 
}
console.log(y)

//but the the variable is redecalred than that is  called the naming confict ; then it is threaded as a different variable

if (true) {
    // let y = 30; //variable is rediclared. but not for var if it decalred with var then it is a global scope only
    var y = 30; //variable is rediclared. but not for var if it decalred with var then it is a global scope only
    console.log(y)
}
console.log(y) // still 20 if var --30;

//another reason for not to use var --

//three reason primary - global stored - memory ineffienct , not block scoped , var is hosited.
//use only if you wanted.

