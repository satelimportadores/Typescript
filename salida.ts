console.log('Hello World');

//types

var myString:string = "Hello world";
myString = 22 + "";

var myNumber:number = 22;

var myBool: boolean = false;

var myVar: any = "Hello";
myVar = false;

    //Strings
    //document.write(myNumber.toString());

    //arreglos:

    var StringArray:string[] = ["Item01","Item02","Item03"]
    var StringNumber:number[] = [1,2,3]
    var StringBoolean:boolean[] = [true,false,true]
    var StringAny:any[] = ["Item01",2,true]

    //Tuple's : arreglos con estructura definida:

    var strnumTuple :[string,number]
    strnumTuple= ["Hello", 22]

    //Tipos de datos vacios, indefinidos, nulos  y cons
    const PI:number = 3.141516;
        //let alcance de la variable.
    let myVoid: void = undefined;
    let myNull: null = null;
    let myundefined: undefined = undefined;

    //ver el tipo de dato typeof()
    document.write(typeof(strnumTuple));

//Funciones--------

function getSum(num1:number,num2:number) {
    return num1+num2
}

document.write(" "+getSum(2,2).toString());

    //sumar oconcatenar                     
    let mySum = function (num1:number|string,num2:number|string) {
        if (typeof(num1) === 'string') {
            num1 = parseInt(num1);
        }
        if (typeof(num2) === 'string') {
            num2 = parseInt(num2);
        }
        return num1 + num2;
    }

    //funcion con parametro opcional ?
    function getName(firstName: string, lastName?:string) {
        if (lastName == undefined) {
            return firstName;
        }
        return `${firstName} ${lastName}`
    }

        document.write(" "+getName("Juan"));

    //funciones void "No retorna nada"
    function myVoidFunction():void {
        return;
    }

    








    





    

