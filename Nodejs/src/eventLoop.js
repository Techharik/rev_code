"use strict";
// EventLoop in nodejs  -- Understanding the asynchrouns of nodejs
Object.defineProperty(exports, "__esModule", { value: true });
//javascript code ---> v8 Engine executes ---> microtask (process.necttick , promises) --> macro(timer , pending Calls , idle/prepare , poll , check , close ) before each phases it check for the microtask for execution.
//This is how the js code work cuncurrently ans asynchroush 
var fs_1 = require("fs");
// How the blocking code is handle : async 
setTimeout(function () { return console.log('timeout'); }, 0); //macro -- timer 1
setImmediate(function () { return console.log('immediate'); }); // macro -- timer 5
process.nextTick(function () { return console.log('nextTick'); });
new Promise(function (res, rej) { return res("kk"); }).then(function (val) { return console.log(val); }); // micro 2
console.log('main');
fs_1.default.readFile(__filename, function () {
    setTimeout(function () { return console.log('timeout'); }, 0);
    setImmediate(function () { return console.log('immediate'); });
});

