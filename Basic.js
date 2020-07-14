// * Variable
var name = "Sabuj Hasan Sarker";
var age = 22;
console.log("My name is " + name + " and i am " + age + " years old .");

// * Data Type
// 2 types of Data Types

// 1. Primitive : primitive data types javaScript এর Define করা data type . Object data type primitive data types compailer করার মাধ্যমে তৈরী হয় . Primitive Data type 5 types :-
// -> Number : 1,2,3,4.5 etc . Number mainly 2 typs int and folat
var int = 12;
var folat = 3.14;
var nn = Number("4.5");
console.log(Number.parseFloat(nn));
console.log(Number.parseInt(nn));

// -> String : "sabuj", 'sabuj', `sabuj`
// -> Boolean : true false
// -> Undefined : Data define করা হয় নাই (false)
// -> Null : Absent of Data / value (false)

// 2. Object : Object Data type তৈরি হয় primitive data types থেকে। Object Data type data 3 types :-
// -> Array
// -> Object
// -> Funtion

// * Type Convertion
console.log(String(int));
// This time int is String bt orginaly init in number it's call Type Convertion

// ! Project
// 1.bainary,octal,hexa to Desimail
var bin = 0b11011;
console.log(bin);
var hexa = 0xfff;
console.log(hexa);
var octal = 0765;
console.log(octal);
console.log(bin.toString(10));
