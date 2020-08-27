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