var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello World');
//types
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "Hello";
myVar = false;
//Strings
//document.write(myNumber.toString());
//arreglos:
var StringArray = ["Item01", "Item02", "Item03"];
var StringNumber = [1, 2, 3];
var StringBoolean = [true, false, true];
var StringAny = ["Item01", 2, true];
//Tuple's : arreglos con estructura definida:
var strnumTuple;
strnumTuple = ["Hello", 22];
//Tipos de datos vacios, indefinidos, nulos  y cons
var PI = 3.141516;
//let alcance de la variable.
var myVoid = undefined;
var myNull = null;
var myundefined = undefined;
//ver el tipo de dato typeof()
document.write(typeof (strnumTuple));
//Funciones--------
function getSum(num1, num2) {
    return num1 + num2;
}
document.write(" " + getSum(2, 2).toString());
//sumar oconcatenar                     
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//funcion con parametro opcional ?
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
document.write(" " + getName("Juan"));
//funciones void "No retorna nada"
function myVoidFunction() {
    return;
}
function showAll(todo) {
    console.log(todo.title + " - " + todo.texto);
}
showAll({
    title: "Eat dinner",
    texto: "Lorem"
});
//Clases-------------------------------------
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYeras = function () {
        return this.age + 'Years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide Invoice");
    };
    return User;
}());
var john = new User('John', "aaa@44.com", 40);
document.write(john.name + " - " + john.email);
//Herencia---------------------------------------
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    //Heredar metodo
    Member.prototype.pay = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, "Satel", "satel@satel.com", 25);
console.log(gordon.payInvoice());
