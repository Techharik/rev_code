//function declarations
function add(a, b) {
    return a + b
}


//function expression
const sum = function (a, b) {
    return a + b;
}

//IIFE
// (function (a, b) {
//     return a + b;
// })(5, 10)

//arrow function

const app = () => a + b;


//recursions
function newapp(a) {
    if (a == 0) {
        return 1
    }
    newapp(a - 1)
};


function defaultparams(a = 10) {
    return a;
}

function restParams(a, ...b) {
    return {
        a, b
    }
}

console.log(restParams(1, 2, 3, 4, 5, 6, 7))

