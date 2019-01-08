//  Primitives in Javascript:
//  1] Number
//  2]Boolean
//  3]String
//  4]Undefined
//  5]Null


// 1] Number
// only one number type = 64-bit binary floating point type

//Hence
console.log(`${0.1 + 0.2 === 0.3}`);

console.log(`${1 + 2 === 3}`);

// Numbers Inherit methods from Number.prototype object

//Examples of methods inherited from this object are :

console.log((123).toString());    

console.log((12.34).toFixed(1));

console.log((234.532).toPrecision(1));

//Converting to number :
    console.log(Number.parseInt("text")); // no error returns Not-a-Number(NaN) as output

// 2] Strings
// Stores set of unicode characters
// Methods Inherited from String.prototype
// Strings are immutable


// Example:
    console.log("Dhruvaj".substring(0,5));
    console.log("Work".search('k'));
    console.log("MITWPI".concat(' sucks'));

// 3] Boolean
// false, null, undefined, ''(empty Strings), 0 and NaN are considered as false
// Example

    let txt = '';
    if(txt) {
        console.log(true);
    }
    else{
        console.log(false);
    }

// 4] Undefined
// Variable declared but no value assigned
// Type is undefined

let a;
console.log(a); // throws undefined
b  = a
console.log(typeof(b));

// 5] Null
// Null is assigned to a variable.
// It is an object

let c = null;
console.log(c);
console.log(typeof(c));
