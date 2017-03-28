//==========This 指標
'use strict';
let person = {
    firstname: 'Yu-Hsun',
    lastname: 'Cheng',
    greet0: function () {
        console.log('obj-method-this=');
        console.log(this); //方法的this＝person物件
    },
    greet1: (()=>{
        console.log('obj-arrow-this=');
        console.log(this); //箭頭函數被person宣告
    }),
    greet2: function () {
        (()=>{
            console.log('obj-method-arrow-this=');
            console.log(this); //方法之中的箭頭函數被greet2方法所宣告
        })();
    },
    greet3: function () {
        (function () {
            console.log('obj-method-fn-this=');
            console.log(this); //函數的this被系統呼叫
        })();
    },
    greet4: function () {
        (function () {
            (()=>{
                console.log('obj-method-fn-arrow-this=');
                console.log(this); //箭頭函數被函數宣告
            })();
        })();
    }
};
person.greet0(); //this = person物件
person.greet1(); //this = person物件的this = Global scope
person.greet2(); //this = greet2的this = person物件
person.greet3(); //this = 函數的this = unknown (函數被系統呼叫)
person.greet4(); //this = 函數的this = unknown (函數被系統呼叫)

console.log(this);

(function () {
    console.log('fn-this='); 
    console.log(this); //this = unknown
})();

(()=>{
    console.log('arrow-this=');
    console.log(this); //this = Global scope
})();

(function () {
    (function () {
        console.log('fn-fn-this');
        console.log(this); //this = unknown (函數被系統呼叫)
    })();
})();

(function () {
    (()=>{
        console.log('fn-arrow-this=');
        console.log(this); //this = 函數的this = unknown (函數被系統呼叫)
    })();
})();