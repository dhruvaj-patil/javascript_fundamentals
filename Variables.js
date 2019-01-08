
// In javascript Variables can be defined using
// 1] let
// 2] var 
// 3] const

// 1] Variable
// var declared variables have a function scope, i.e. they are treated as being declared at 
// the top of the function, this is called as variable hoisting

// Example:
    
    function hwVarWorks() {
        var x = 10;
        for(var i=0;i<x;i++){
            console.log(i);
        }
        console.log(i); // In most programming languages the i wont print outside loop
    }

    hwVarWorks();
    
// 2] Let
// Has block scope unlike var

// Example:
    function hwLetWorks() {
        let x = 10;
        for(let i=0;i<x;i++) {
            console.log(i);
        }
        // console.log(i); => Will throw an error
    }

hwLetWorks();

// 3] Const
// Cannot be reassigned. 
// Value can still be mutable
// Has block scope

const x = 19;

if(x == 19) {
    let x = 12 //new block scope starts
    console.log(x);
}