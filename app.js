//Math Object-chapter 10
/*
const num1 = 100;
const num2 = 50;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);// Round up the number
val = Math.ceil(2.4);// Round up to next incremented digit
val = Math.floor(2.8);// Round up to previous demoted digit
val = Math.sqrt(64);// Find the squre root
val = Math.abs(-3);// Convert Negative number to positive.
val = Math.pow(8, 2); // Give result of any powered number.
val = Math.min(2,4,5,6,7,25); // return Minimum number
val = Math.max(2,4,5,6,7,25); // return Maximum number
val = Math.random();// return random number

val = Math.round(Math.random()*20 + 1); // return random number upto 20

console.log(val); */


//String and Concatination
/*const firstName = "Surojit";
const lastName = "Manna";
const age = 36;
const str = 'Hi my name is surojit'

let val;

val = firstName + lastName;

//Concatination
val = firstName+ " "+lastName;

//Append
val = 'Web Developer ';
val += 'Surojit Manna';

val = 'Hello, my name is ' + firstName + 'and  I am '+age;

//Length
val = firstName.length;

//concat method
val = firstName.concat(' ', lastName);

//toupper
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0].toLowerCase();

//indexof()

val= firstName.indexOf('i');

//charAt
val =  firstName.charAt('2').toUpperCase();

//Last character of string
val = firstName.charAt(firstName.length -1).toUpperCase();

//sub string
val = firstName.substring(0, 3);

//slice()
val = firstName.slice(0, 4);

//split()
val = str.split(' ')

//replace()
val=  str.replace('Hi', 'bye');

//Includes()
val = str.includes('Hi');
*/


//Template Literals

const name = "Surojit";
const age = 36;
const job = 'Web Developer';
const city = 'Kolkata'

//Without tamplate string(es5)
/*html = '<ul>'+
        '<li>Name: '+ name + '</li>'+ 
        '<li>Age: ' + age +'</li>'+
        '<li>Job: '+ job + '</li>'+
        '<li>City: '+ city +'</li>'+
        '</ul>';
*/
//With tamplate string(es6+)
html = `
    <ul>
    <li>Name: ${name} </li>
    <li>Age: ${age} </li>
    <li>Job: ${job} </li>
    <li>City: ${city} </li>
    <li> ${2+2} </li>
    </ul>
`
document.body.innerHTML = html;