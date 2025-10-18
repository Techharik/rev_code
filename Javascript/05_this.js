//this keyword in function , global , - return global object
//object refer to the object itself.
// in arrow function go to parent and get the parent scope.

const obj = {
    name: 'Hari',
    greet: () => {
        // global object
        return this
    }
}

console.log(obj.greet())

const referenece = {
    name: 'name',
    greet: function () {

        return () => {
            console.log('logging')
            return this.name
        }
    }

}
console.log(referenece.greet()())



//call , apply bind --

const obj1 = {
    name: 'Hello',
    greet: function (newer) {
        return this.name + newer
    }
}

const obj2 = {
    name: 'sabari'
}

console.log(obj1.greet.call(obj2, 'dsdd'))
console.log(obj1.greet.apply(obj2, ['dsdd']))

const newMethod = obj1.greet.bind(obj2, 'hhe')
console.log(newMethod())

//closure:

function parent(val) {
    cnvalue = 'closure'
    function child(val1) {
        return cnvalue + val + val1
    }
    return child;
}

const closureValue = parent(1);
console.log(closureValue(2))

//curring = 
const sumed = (a) => (b) => a + b;

const multiplyof2 = sumed(2);
console.log(multiplyof2(3))

function sumoftwo(val, multiplier) {
    return val * multiplier
}

const multipletwo = sumoftwo.bind(null, 3);
console.log(multipletwo(3))
console.log(globalThis)
