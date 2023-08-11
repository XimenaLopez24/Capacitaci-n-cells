/*
let num = 071;
console.log(num);

let num = 0o71;
console.log(num);


//Cual sería el resultado del siguiente codigo?
const budget = 1_000_000_000;

console.log('budget =', budget);

let completed = true;
let running = false;

console.log(completed, running);
console.log(typeof(completed), typeof(running));


let error = 'An error ocurred';
let hasError = Boolean(error);
console.log(hasError);


let error = '';
if (Boolean(error)) { //no imprime nada al ser false
   console.log(error);
}

let myString = 'JavaScript';
myString[0] = 'j';
myString = 'javaScript';
console.log(myString);


let name = `John`;
console.log(name);

let names = `I'm John`; //Se muestra normal la '
console.log(names);

let name1 = `John`;
let message = `Hi I'm ${name1}.`;
console.log(message);

let str = "Good Morning!";
console.log(str.length); //13, número de caracteres

let str = "Good Morning!";
console.log(str[0]); // "G"

let str = "Good Morning!";
console.log(str[12]); // "!"
console.log(str[str.length - 1]); // "!"


let name = 'John';
let str = 'Hello ' + name;
console.log(str); //Hello John


let className = 'btn';
className += ' btn-primary'; // 'btn btn-primary'
className += ' none'; // 'btn btn-primary none'
console.log(className); // 'btn btn-primary none'


let status = false; // el string no esta vacío devuelve true
console.log(typeof(status)) //boolean
let str = status.toString(); // "false"
let back = Boolean(str); //true
console.log(back); //true

let myVar;
let newString = myVar.toString(); // '0'

let result = '0' < 'z';
console.log(result);

let empty = {};
console.log(typeof(empty));
/*
let person = {
    firstName: 'John',
    lastname: 'Doe'
};
console.log(person.firstName) //buscar la propiedad mediante el punto
//no es valido . cuando hay espacios o esta entre comilla siemple o doble


let person = {
    firstName: 'John',
    lastname: 'Doe'
};

person.firstName = "Peter";
person.age = 18;

console.log(person.firstName);
console.log(person);

delete person.age;
console.log(person);

console.log('firstName' in person);
console.log('age' in person);
*/