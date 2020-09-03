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
