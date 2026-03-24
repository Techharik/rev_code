// EventLoop in nodejs  -- Understanding the asynchrouns of nodejs

//javascript code ---> v8 Engine executes ---> microtask (process.necttick , promises) --> macro(timer , pending Calls , idle/prepare , poll , check , close ) before each phases it check for the microtask for execution.

//This is how the js code work cuncurrently ans asynchroush 
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const apps = await import('./index.js')
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
console.log('sss', __filename);

// fs.watch(__filename, (event, filename) => {
//     console.log(`${filename} changed: ${event}`);
// });




import os from 'os';

// Get current user information
const user = os.userInfo();
console.log('User Information:');
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);
console.log(`- Home Directory: ${user.homedir}`);

// On Windows, you can also get the user's domain
if (os.platform() === 'win64') {
    console.log(`- Domain: ${user.domain || 'N/A'}`);
}

// Note: user.shell is only available on POSIX platforms
if (user.shell) {
    console.log(`- Default Shell: ${user.shell}`);
}
// main --> tick -->promise ---> timeout ---> imediate (expected)
// main --> promise -->tick ---> imedidate ---> timeout (result) --> depend on promise time taken those two varriesa and same for timeout and imediate is nondeterministic one


// buffer ---- object that handle the binary data , file system operation , crypto , image processing

import { Buffer } from 'buffer';
import { Duplex } from 'stream';

const bufferFromString = Buffer.from('Hello');

// Buffer , alloc - allocate a buffer for Like capacity
console.log(bufferFromString) //.toString .slice .concat . toJson() , buffer to string , slice it , add 2 buffer

// streams ---- we dont need to add the entire size in memory we use stream to add the paritcally memory and do the work.
// readable - read the stream
// writable stream
// Duplex for read and write
// Tranfrom the stream from on to another

// fs.createReadStream() read the file as a stream
// fs.createWriteStream( ) for write the stream

