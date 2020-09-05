// let val;

// val = document;

// val = document.all;

// val = document.all[2];

// val = document.all.length;

// val = document.head;

// val = document.body;

// val = document.doctype;

// val = document.domain;

// val = document.URL;

// val = document.characterSet;

// val = document.contentType;

// val = document.forms;

// val = document.forms[0];

// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links

// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(document.scripts); // convert to array any document module

// scriptsArr.forEach(function(script){
//   console.log(script.getAttribute('src'));
// });

// val = document.forms;
// console.log(val);


// //Single elment dom selector

// let val;

// //get element by id
// val = document.getElementById('task-title');

// //get things from the element

// val = (document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title')

// //Change styling
// taskTitle.style.background = 'black';
// taskTitle.style.color = 'white';
// taskTitle.style.padding= '5px';

// //change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'Tasks List';
// taskTitle.innerHTML = '<span style="color:yellow">Task List</span>';

// //query selector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// //document.querySelector('li:nth-child(n+5)').style.color = 'blue';

// //Multiple selector

// const items = document.getElementsByClassName('collection-item');

// console.log(items);

// console.log(items[0]);

// items[0].style.color = 'red';
// items[1].style.color = 'blue';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//document.getElementByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis);

// console.log(lis[0]);

// lis[0].style.color = 'purple';
// lis[1].style.color = 'black';

// //convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li){
//   console.log(li)
//   // li.textContent = 'bye'
// })


//document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item, index){
//   console.log(item);
//   item.textContent = `${index}: Hello`;
// })

// const liodd = document.querySelectorAll('li:nth-child(odd)');
// const lieven = document.querySelectorAll('li:nth-child(even)');

// liodd.forEach(function(odd){
//   odd.style.background = 'black';
//   odd.style.color = 'white';
// });

// lieven.forEach(function(even){
//   even.style.background = 'cyan';
//   even.style.color = 'black';
// })


//Traversing
// let val;
// const list = document.querySelector('ul.collection');
// const listitem = document.querySelector('li.collection-item:first-child');


// val = list;
// val = listitem;

// //get child nodes

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// //1 - Element
// //2- Attribute
// //3 - Text node
// //8- comment
// //9- Document itself
// //10- doctype

// //get childern element nodes

// val = list.children;
// val = list.children[1];

// //Childern of childern
// val = list.children[3].children[0];

// //First Child
// val = list.firstChild;
// val = list.firstElementChild;

// //Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// //Count Child Elements
// val = list.childElementCount;

// //Get Parent Node
// val = listitem.parentNode;
// val = listitem.parentElement;
// val = listitem.parentElement.parentElement;

// //get next sibling
// val = listitem.nextSibling;
// val = listitem.nextElementSibling.nextElementSibling;

// //get previous sibling
// val = listitem.previousSibling;
// val = listitem.previousElementSibling;

// console.log(val);

//Create Element

// const li = document.createElement('li');

// //add class
// li.className = 'collection-item';

// //add id
// li.id = 'new-item';

// //Add attribute
// li.setAttribute('title','New Item');

// //create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// //create new link element
// const link = document.createElement('a');
// //add class
// link.className = 'delete-item secondary-content';
// //add icon html
// link.innerHTML ='<i class="fa fa-remove"></i>';

// //append link into li
// li.appendChild(link);

// //append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(link);

//Replace elements
//Create an Element
// const newheading = document.createElement('h2');

// // Add id
// newheading.id = 'task-title';

// //new text node
// newheading.appendChild(document.createTextNode('Task List'));

// //get the old heading
// const oldHeading = document.querySelector('#task-title');

// //Parent
// const cardAction = document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newheading,oldHeading);

// //Remeove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list
// lis[0].remove();

// //Remove child
// list.removeChild(lis[2]);

// //classes & attributes
// const firstLi = document.querySelector('li:first-child');
// const link=firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;


// //arrtibute
// val = link.getAttribute('href');
// val = link.setAttribute('href','https://google.com');
// val = link.hasAttribute('title');
// val = link;

// console.log(val);

//Event

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('clicked');

//     e.preventDefault();
// });
// document.querySelector('.clear-tasks').addEventListener('click', offClick);

// function offClick(events){
//     let val;
//     //val = events;

//     //Event Target element
//     // val = e.target;
//     // val = e.target.id;
//     // val = e.target.className;
//     // val = e.target.classList;
//     // //even type
//     // val = e.type;

//    // e.target.innerText = 'Hello';

//     //Timestamp
//     //val = events.timeStamp;

//     // //Coords event relative to the windows
//     // val = e.clientY;

//     console.log(val);
// }

//mouse events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);
// // Mouseenter
// // card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// // Mouseover
// // card.addEventListener('mouseover', runEvent);
// // Mouseout
// // card.addEventListener('mouseout', runEvent);
// //Mousemove
// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.clientX})`;
// }
//form events
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// //clear input
// taskInput.value = ' ';

// form.addEventListener('submit', runEvent);

//keydown
//taskInput.addEventListener('keydown', runEvent);

//keyup
//taskInput.addEventListener('keyup', runEvent);

//keypress
//taskInput.addEventListener('keypress', runEvent);

//Focus
//taskInput.addEventListener('focus', runEvent);

//blur
//taskInput.addEventListener('blur', runEvent);

//cut
//taskInput.addEventListener('cut', runEvent);

//paste
//taskInput.addEventListener('paste', runEvent);

//input
//taskInput.addEventListener('input', runEvent);

//change
// select.addEventListener('change', runEvent);


// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     // console.log(taskInput.value);

//     //  console.log(e.target.value);
//     // heading.innerText = e.target.value;
// }

//Event bubling

// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//     console.log('col');
// });

//Event deligation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     // if(e.target.parentElement.className === 'delete-item secondary-content'){
//     //     console.log('deleted');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('deleted');
//         e.target.parentElement.parentElement.remove();
//     }
// }

//Local & session storage

//set local storage item
// localStorage.setItem('name', 'John');

// //set session storage item
// //sessionStorage.setItem('name', 'peter');


// //remove from storage
// //localStorage.removeItem('name');

// //get from storage

// const name = localStorage.getItem('name');
// console.log(name);

// document.querySelector('form').addEventListener('submit', function(e){
//    const task = document.querySelector('#task').value;

//    let tasks;
//    if(localStorage.getItem('tasks') === null){
//        tasks =[];
//    }else{
//        tasks = JSON.parse(localStorage.getItem('tasks'));
//    }

//    tasks.push(task);

//    localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('Task Saved');

//     e.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);
// });
// localStorage.removeItem('task');
// localStorage.removeItem('tasks');