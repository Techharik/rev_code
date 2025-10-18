//object :

const obj = {

    name: 'Hello',
    age: 'Vage'

}//

// Key value pairs :

//properties - variables inside the obj.
console.log(obj.name);
console.log(obj['age']); //access the obj

// change are add properties
obj.name = 'sabari';
obj['age'] = 10;
obj['newv'] = 'I am new';
console.log(obj.name, obj.age, obj.newv);

//methpds are function the object;

const myobj = {
    a: '1',
    c: '1',
    b: '1',
    greet: function () {   // methods a function without a name is ---> anmymous function
        return 'I am a method'
    },

    examplethis: function () {
        return Number(this.a) - this.b
    }
}
//this keyword -- in obj refere to the object

console.log(myobj.greet());
console.log(myobj.examplethis()); //

//construction of object:
//evolution ---> procedural way to oops object ;

// construction is a blueprint to create a same like a function:

// 1 - factory functions :

function factory(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            return `Hello My name is ${name}`
        }
    }
}

const obj1 = factory('Hari', 45)
const obj2 = factory('Sabari', 45)

//It works good
console.log(obj1.name)
console.log(obj1.greet())
console.log(obj2.greet())
// But the Problem in here is that the method greet is in all the function created from the  factory function means that the same function we need to write give to all the code 
//not good and memory inefficients:

//-- for that we have the constructor functions:
//There are two ways to create  a constructore functon using  a constructor function other object.create.

//Object.create()


let newObject = {
    greet: function () {
        return `${this.name} comes from the prototype`
    }
};

let obje3 = Object.create(newObject) //it create a protype inhertances create aobj it a child of the object one way.
obje3.name = 'Hari'
console.log(obje3.name)
console.log(obje3.greet())


// The code is perfectly fine but not community accpeted but works:

//2 

function Person(name, age) {
    this.name = name,
        this.age = age
}

const person1 = new Person('hari', 34) //new keyword is import else the this keyword refer to the global object.

console.log(person1);

// we can add methods diffeectky to the protype ;

Person.prototype.greet = function () {
    return this.name + 'is added to prototype'
}

console.log(person1.__proto__) //go upwards to the protype;

console.log(person1.hasOwnProperty("greet")) //false beacuase it come from person
console.log(person1.hasOwnProperty("name")) //true it is in 
console.log(person1 instanceof Person) //true;

//a synatic sugar;

class Emplyoee {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    greet() {
        return this.name; //directly added the protype;
    }
}

class Worker extends Emplyoee {
    constructor(name, age, experience) {
        super(name, age);  //inherent the protype form the paraent
        this.experience = experience
    }
}

const worker1 = new Worker('hari', 22, 22);
console.log(worker1);

//raw methods :

function Animal(name, age) {
    this.name = name,
        this.age = age
}

Animal.prototype.speek = function () {
    return `speeking`
};

const animal = new Animal('PUPPY', 22);


console.log(animal.speek())

function Reptails(name) {
    this.name = name;
}

Reptails.prototype = Object.create(Animal.prototype);
Reptails.prototype.constructor = Reptails;

const rep = new Reptails('rep')
console.log(rep.speek())
console.log(rep.__proto__);


//object copying and ;
const birds = { name: 'quill' }
const obj4 = { ...birds }; // shallow copying
const obj5 = Object.assign({}, obj4) //shallow copying

console.log(obj4)
console.log(obj5)

obj4.name = 'mail'
console.log(obj4)
console.log(birds)

obj5.name = '5'
console.log(obj5)
console.log(birds)

const newBirds = {
    name: 'quills',
    tick: {
        n: 'nill'
    }
}

// const newCloneBirds = { ...newBirds };
const newCloneBirds = Object.assign({}, newBirds)

newCloneBirds.name = 'i chnaged'
newCloneBirds.tick.n = 'reference changed'
console.log(newCloneBirds)
console.log(newBirds)
// Shallow cloning ; the nested object .

//deep cloning:

const myObjected = {
    name: ' hari',
    address: {
        pincode: 324234,
    }
}
const deepClonedReference = JSON.parse(JSON.stringify(myObjected));

deepClonedReference.name = 'sabari';
deepClonedReference.address.pincode = '212'
console.log(myObjected)
console.log(deepClonedReference) //



// object iterators -- > object.

let newObj = {
    name: 'Hello',
    age: 24
};

console.log(Object.entries(newObj)) //returns the array of key value pairs
console.log(Object.keys(newObj)); //array of keys
console.log(Object.values(newObj)) //array of values

for (const prop in newObj) {
    console.log(newObj[prop])
}

let myarr = [1, 2, 3, 4, 5];

for (const myprop of myarr) {
    console.log(myprop)
}

//managements:

Object.defineProperty(newObj, "name", {
    enumerable: false, //cannot read or loop
    writable: false, //cannot re write the property
    configurable: false //cannot delete the property
})


newObj.name = 'aa'
console.log(newObj)

for (const prop in newObj) {
    console.log(newObj[prop])
};



//get and set - used to get a property and set a property in a object elements:

const objectNew = {
    name: 'Hello',
    second: 'world',
    get represent() {
        return this.name + 'Hello'
    },
    set nameSetter(val) {
        this.name = val
    }
}
objectNew.nameSetter = 'welcome ';

console.log(objectNew.name)
console.log(objectNew.represent)

let myaddress = {
    add: 'Dind',
    city: 'odc'
};

Object.isFrozen(myaddress);

myaddress.add = 'yy'
console.log(myaddress)
console.log(Object.isFrozen(myaddress))

//preventExtensions -- prevent from add
//sealed -- prevent from add , delete
//freeze -- prevent from reassign , add , delete


//obj -- prop , methods , iterator , ass , class , proprtype , get , set , this , destruting , clone , mangement , protection