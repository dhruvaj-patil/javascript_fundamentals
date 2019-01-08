// 1] Javascript has Primitives, Objects and Functions.
// 2] All of them are values. That is they can be assigned to variables. 
// value is the representation of some entity that can be manipulated by a program.
// 3] All of them are treated as Objects even Primitives.

// Example:

// 1]
let num = 1; //Primitive

let obj = {                     //Object
    prop1: 'prop_value',
    func: function() {}
}

function func1() {                  //Function
    return `This is function1`;
}

// 2]
function theyAreValues() {
    num1 = num;      
    obj1 = obj;
    x = func1();

    console.log(`Num1 = ${num1} \n obj1 = ${JSON.stringify(obj1)} \n x = ${x}`);
}

theyAreValues();

// 3]

function allAreObjects() {
    console.log(`Num = ${typeof(num)} \n
    obj = ${typeof(obj)} \n
    func1 =${typeof(func1)}`)
}

allAreObjects();  // the types will give number  object and function respectively. Dafaq

// 3] all of them are TREATED as objects

Number.prototype.returnMe = function() {
    return this;
}
numObj = num.returnMe();

function allTreatedObjects() {
    console.log(`num = ${num}`);
    console.log(`Type of num = ${typeof(num)}`);
    console.log(`numObj = ${numObj}`);
    console.log(`Type of numObj = ${typeof(numObj)}`);
}

allTreatedObjects();

// What is happening ?
// Javascript converts primitive to objects for using in-built methods and calls
// the Garbage-collector once the output is generated.
// Hence typeof(num) = number
// when we call the return me method it is in the phase of primitive to Object.
// Hence typeof(numObj) = object; object is assigned to numObj