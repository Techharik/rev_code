//sets

let letter = new Set(['a', 'b', 'y', 'sed', ['wq']]);
console.log(letter)
let check = letter.has('a')

//weak set only store obj set store all order but has and add size methods unique 


let mappedValue = new Map();
//keys can be any values
mappedValue.set('apple', 300);
mappedValue.set('bannana', 300);
console.log(mappedValue)
mappedValue.get('apple');
mappedValue.has('banana')

//weakMap, weakSet ---> if the obj reference is nullfied the memory is garbaged collected .

//callbacks:

function displaycb(name) {
    return name
}

function presentation(cb) {
    let so = 'do something here'
    return cb(so)
}

console.log(presentation(displaycb));

//Promise

const myPromise = new Promise((resolve, reject) => {
    const checks = true
    setTimeout(() => {
        if (checks) {
            reject('My rejected value')
        } else {
            resolve('my resolved value')
        }
    }, 2000)

})

myPromise
    .then((c) => console.log(c))
    .catch((err) => console.log(err));


// async and await.