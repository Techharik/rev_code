// EventLoop in nodejs  -- Understanding the asynchrouns of nodejs

//javascript code ---> v8 Engine executes ---> microtask (process.necttick , promises) --> macro(timer , pending Calls , idle/prepare , poll , check , close ) before each phases it check for the microtask for execution.

//This is how the js code work cuncurrently ans asynchroush 
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// How the blocking code is handle : async 
const __filename = fileURLToPath(import.meta.url);

fs.readFile(__filename, () => {
    console.log('j')
    setTimeout(() => console.log('dssdf'), 0);
    setImmediate(() => console.log('immsdgfgediate'));
});

setTimeout(() => console.log('timeout'), 0) //macro -- timer 1
setImmediate(() => console.log('immediate')) // macro -- timer 5
process.nextTick(() => console.log('nextTick'));
new Promise((res, rej) => res("kk")).then((val) => console.log(val));  // micro 2
console.log('main')





// main --> tick -->promise ---> timeout ---> imediate (expected)
// main --> promise -->tick ---> imedidate ---> timeout (result) --> depend on promise time taken those two varriesa and same for timeout and imediate is nondeterministic one


// buffer ---- object that handle the binary data , file system operation , crypto , image processing

import { Buffer } from 'buffer';

const bufferFromString = Buffer.from('Hello');

// Buffer , alloc - allocate a buffer for Like capacity
console.log(bufferFromString)