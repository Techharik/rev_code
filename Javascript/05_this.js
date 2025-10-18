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