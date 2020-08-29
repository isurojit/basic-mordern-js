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

/*
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
*//*
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

*//*

//Arrays
 const numbers = [41,89,52,63,25,78,96,12];
 const numbersSecond= new Array(25,63,96,45,78,22,12);
 const fruit = ['Apple','Banana','Cherry','Peer','Orange'];
 const mixed = [22,'Hello',true,undefined,null,{a:1, b:1}, new Date()];

 let val;

 //get Array Length
 val= numbers.length;
 //Check if is Array
 val= Array.isArray(100);
//Get single value 
val = numbers[0];
//Insert into Array
numbers[3]=100;
//Find index of value
val = numbers.indexOf(52);
//Mutating arrays
	//Push-to add on end
	numbers.push(50);
	//Unshift-to add on first
	numbers.unshift(25);
	//Pop-to delete from end
	numbers.pop();
	//shift-to delete from start
	numbers.shift();
	//Splice-to splice values
	numbers.splice(6,7);
	//Reverse array
	numbers.reverse();
//Concatinate arrays
val = numbers.concat(numbersSecond);

//Sort arrays
val = fruit.sort();
/*val = numbers.sort();*/

/*
//Use the "compare function"
val= numbers.sort(function(x,y){
	return x-y;
});

//Reverse Sort
val= numbers.sort(function(x,y){
	return y-x;
});

*//*

//Find
function under50(num){
	return num < 50;
}
val = numbers.find(under50);

 console.log(numbers);
 console.log(val);
*/
//Object literals
/*
const person ={
	firstName: 'Surojit',
	lastName: 'Manna',
	age: 25,
	email: 'surojit@xyz.com',
	hobbies: ['Gaming','Gyming'],
	address:{
		city: 'Kolkata',
		state: 'West Bengal',
	},
	getBirthYear: function(){
		return 2020 - this.age;
	}
}

let val;
val = person;

//Get specific value
val = person.firstName;
val = person.address;
val = person.address.state;
val = person.hobbies[0];
val = person.getBirthYear();

console.log(val);

//Arrays of object

const people =[
	{name: 'Surojit', age: 25},
	{name: 'Nirma', age: 25}
];

for(let i =0 ; i< people.length; i++){
	console.log(people[i].name);
}
*/

//Dates & Time
/*

let val;

const today = new Date();
let birthday = new Date('11-08-1995 07:25:12');
// birthday = new Date('November 8 1995 07:25:12');
// birthday = new Date('11/8/1995');

//to convert string
// val = today.toString();
// val = birthday;
//val = today.getMonth();
val = birthday.getFullYear();
val = today.getMinutes();
val = today.getTime();

birthday.setMonth(9);
console.log(birthday)

console.log(val);
*/

//if else and comparison
/*
if(somthing){
	do something
}else{
	do somthing else
} */

//const id =100;

//Equal to
/*
if(id == 101){
	console.log("Correct");
}else{
	console.log("Wrong");
}


//Not Equal to

if(id != 101){
	console.log("Correct");
}else{
	console.log("Wrong");
}

// Strict Equal

if(id === 100){
	console.log("Correct");
}else{
	console.log("Wrong");
}

// Strict not Equal

if(id !== 100){
	console.log("Correct");
}else{
	console.log("Wrong");
}*/

//Test if Undefined
/*
if(typeof id !== 'undefined'){
	console.log(`The ID is ${id}`);
}else{
	console.log("No ID");
}

//Ternary operator

console.log(id === 100 ? 'Correct' : 'Incorrect');
*/
/*
//switch case
const color = 'red';

switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('Color is not red or blue');
		break;
}

switch(new Date().getDay()){
case 0:
	day = 'Sunday';
	break;
case 1:
	day = 'Monday';
	break;
case 2:
	day = 'Tuesday';
	break;
case 3:
	day = 'Wednesday';
	break;
case 4:
	day = 'Thursday';
	break;
case 5:
	day = 'Friday';
	break;
case 6:
	day = 'Saturday';
	break;
}
console.log(`Today Is ${day}`);

*/

//Function Declarations

// function  greet(firstName = 'John', lastName = 'William'){
// 	//console.log('Hi');
// 	return 'Hi ' + firstName +' '+lastName;
// }

// //console.log(greet());

// //Function Expression
// const square = function(x){
// 	return x * x;
// };

// console.log(square(5));

// //Immediately envokable function expressions -iifes

// //(function(){
// //	console.log('IIFE Ran..');
// //})();


// (function(name){
// 	console.log('Hello '+ name + ' !');
// })('Surojit');

//Property Methods

// const  todo = {
// 	add: function(){
// 		console.log('Add todo..')
// 	},
// 	edit: function(id){
// 		console.log(`Edit todo ${id}`);
// 	}
// }

// todo.delete= function(){
// 	console.log('Delete todo..');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

//Loops
//For loop
// for(let i=1; i<= 10; i++){

// 	if(i === 2){
// 		console.log('2 is my fav number');
// 		continue;
// 	}

// 	if(i === 5){
// 		console.log('Stop the loop');
// 		break;
// 	}
// 	console.log(`Number ${i}`);
// } 

//While Loop

// let i = 1;

// while(i <= 10){
// 	console.log(`Number ${i}`);
// 	i++;
// }

//Do while loop

// let i =1;

// do{
// 	console.log(`Number ${i}`);
// 	i++;
// }

// while(i <= 10);

//loop through arrays using for

const cars = ['Ford', 'Honda', 'Toyota', 'Audi'];

// for(let i = 0; i<cars.length; i++){
// 	console.log(`Car Name Is ${cars[i]}`);
// }

//loop through array using foreach
// cars.forEach(function(car, index, array){
// 	console.log(`${index} : ${car}`);
// 	console.log(array);
// })

//loop trhough map

// const users = [
// 	{id:1, name:'Alex'},
// 	{id:2, name:'Austin'},
// 	{id:3, name:'Maria'},
// 	{id:4, name:'Peter'}
// ];

// const names = users.map(function(nam){
// 	return nam.name;
// });

// console.log(names);


//for in loop

const user ={
	firstName:'Surojit',
	lastName: "Manna",
	age: 23,
	city: "Kolkata"
};

for(let x in user){
	console.log(`${x}: ${user[x]}`);
}