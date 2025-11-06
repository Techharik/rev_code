// callback hell:



function displayName(n) {
    return `this is the name ${n}`
}

function mainfun(cb) {
    const name = 'hari';
    return cb(name)
}
const result = mainfun(displayName);
console.log(result)


// callback hell 

function call(cb) {
    function cb(cb) {
        function fun2(cb) {
            return
        }
    }
}
function takeValue(num) {
    const myPromises = new Promise((res, rej) => {
        setTimeout(() => {
            if (num > 10) {
                res('yes')
            } else {
                rej('no')
                // throw new Error('Its a Error')
            }
        }, 5000)
    })
    return myPromises
}

// const calls = takeValue(12).then((val) => console.log(val)).catch((err) => console.log(err))
// const call3 = takeValue(10).then((val) => console.log(val)).catch((err) => console.log(err))
// const call2 = takeValue(12).then((val) => console.log(val)).catch((err) => console.log(err))


const multipleCalls = Promise.all([takeValue(12), takeValue(10)]).then(v => console.log(v)).catch(e => console.log(e)); //everything must pass or it throw a reject message ;

const multipleCallSettle = Promise.allSettled([takeValue(12), takeValue(10)]).then(v => console.log(v)).catch(e => console.log(e)); //return all calls both rejects and fullfilled message ;

const multipleCallAny = Promise.any([takeValue(10), takeValue(10)]).then(v => console.log(v)).catch(e => console.log(e)); //resolves as soon as one pass if all fail then error any one has to pass

const multipleCallRace = Promise.race([takeValue(10), takeValue(10)]).then(v => console.log(v)).catch(e => console.log(e)); //first promises result


// console.log(multipleCalls);


// EventEmitter - 

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (name) => {
    console.log('The event is trigeered' + name)
})

eventEmitter.emit('greet', 'hari');


