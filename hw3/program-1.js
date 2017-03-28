//==========存取物件的property
var address = {
    Street: 'Main',
    Number: 100,
    Apartment:
    {
        Floor: 3,
        Number:301
    }
};
console.log(`I live in ${address['Street']} ${address['Number']} ${address.Apartment.Floor}F`);
var person = {
    firstname: 'Yu-Hsun',
    lastname: 'Cheng',
    greet: function () {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
};
person.greet();

console.log(person['firstname']);