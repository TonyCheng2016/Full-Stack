//==========scope chain case 1
function b1() {
    var myVar;
    console.log(myVar); //print undefined(Local myVar is undefined)
}

function a1() {
    var myVar = 1;
    b1();
    console.log(myVar); //print 1
}

var myVar = 2;
console.log(myVar); //print 2
a1();

//==========scope chain case 2
function b2() {
    //var myVar2;
    console.log(myVar2); //print 3 (found Global myVar2)
}

function a2() {
    var myVar2 = 2;
    b2();
    console.log(myVar2); //print 2(Local myVar2)
}

var myVar2 = 3;
console.log(myVar2); //print 3
a2();

//==========scope chain case 3
function a3() {
    var myVar3 = 1;
    function b3() {
        //var myVar3;
        console.log(myVar3); //print 1 (found Local myVar3)
    }
    b3();
    console.log(myVar3); //print 1(Local myVar3)
}

var myVar3 = 2;
console.log(myVar3); //print 2
a3();

//===============變數提升(variable hoisting)
var firstname = "Donald";
var addSurname = ()=>{
    var surname = "Trump";
    var fullname = firstname+" "+ surname;
    console.log(fullname);
}
addSurname(); //print Donald Trump


var firstname = "Donald";
var addSurname = ()=>{
    var surname = "Trump";
    var fullname = firstname+" "+ surname;
    var firstname = "Dennis";
    console.log(fullname);
}
addSurname(); //print undefined Trump