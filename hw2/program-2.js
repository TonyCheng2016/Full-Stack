//function statement
function greet() {
    console.log('Hey!');
}
greet(); // print Hey!

//function are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hello , TonyCheng');
}
greetMe(); // print Hello , TonyCheng

//function first-class
logGreeting(greetMe);

//Invoke-IIFE
(function () {
    var hello = 'I am from invoking...';
    console.log(hello);
})();