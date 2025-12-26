// //! DOM SELECTORS
// // document.getElementById()
// const sectionTag = document.getElementById("box1")
// console.log(sectionTag);

// // document.getElementsByClassName()
// const containers = document.getElementsByClassName("container")
// console.log(containers); // HTMLCollection []

// // document.getElementsByTagName()
// const articleTags = document.getElementsByTagName("article")
// console.log(articleTags);// HTMLCollection []

// // document.querySelector()
// let ele1 = document.querySelector("#box1")
// console.log(ele1);

// let ele2 = document.querySelector(".container")
// console.log(ele2);

// let ele3 = document.querySelector("article")
// console.log(ele3);

// let ele4 = document.querySelector("article , .container , #box1")
// console.log(ele4);// #box1

// //! document.querySelectorAll()
// let ele5 = document.querySelectorAll("#box1")
// console.log(ele5); // NodeList [section#box1]

// let ele6 = document.querySelectorAll(".container")
// console.log(ele6);// NodeList(3) [section.container, section.container, section.container]

// let ele7 = document.querySelectorAll("article")
// console.log(ele7);// NodeList(3) [article, article, article]

// let ele8 = document.querySelectorAll("article , .container , #box1")
// console.log(ele8);// NodeList(7) [section#box1, section.container, section.container, section.container, article, article, article]

//! HTMLCollection : its a impure array which does not inherit the prototype object of Array constructor. It is also known as Live Collection.

// let collection = document.getElementsByTagName("article")
// console.log(collection);// HTMLCollection[]

// // Array.isArray() : to check array is pure or not, returns boolean
// console.log(Array.isArray(collection)); // false

// // Array.from() :  to convert impure array to pure
// let pureArr = Array.from(collection)
// console.log(pureArr);
// console.log(Array.isArray(pureArr)); // true

//! NodeList : its a impure array which does not inherit the prototype object of Array constructor. It is also known as Static Collection.

//! LIVE COLLECTION AND STATIC COLLECTION EXAMPLE
// const collection = document.getElementsByTagName("article")
// const lists = document.querySelectorAll("article")

// console.log(collection.length , "collection"); // 3
// console.log(lists.length, "list"); // 3

// let articleTag = document.createElement("article")
// articleTag.textContent = "Hello WOrld"
// document.body.appendChild(articleTag)

// console.log(collection.length , "collection"); // 4 (LIVE)
// console.log(lists.length, "list") // 3 (STATIC)

//! DOM EVENTS
// function singleClick() {
//   console.log("BTN CLICKED");
// }

// function doubleClick() {
//   console.log("BTN CLICKED TWICE");
// }

// function mouseIn() {
//   console.log("Mouse entered");
// }

// function mouseOut() {
//   console.log("Mouse Exit");
// }

// function mouseMoved() {
//   console.log("Mouse Moved");
// }

// function keyPress() {
//   console.log("Key is pressed");
// }

// function keyReleased() {
//   console.log("Key is released");
// }

//! addEventListener()
// const btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", () => {
//   console.log("BTn CLicked");
// });

// ! DOM MANIPULATION
const maincontainer = document.getElementById("maincontainer");

//! CREATE AN ELEMENT
const sectionTag = document.createElement("section");
const h1tag = document.createElement("h1");
const pTag = document.createElement("p");

//! ADD TEXT CONTENT
h1tag.innerText = "Hello World";
pTag.innerText = "I am Para";

//! APPLY CSS
h1tag.style.backgroundColor = "yellow";

//! APPEND AS A CHILD TO ANOTHER TAG
// sectionTag.appendChild(h1tag,pTag)  // it will append one Node at a time
sectionTag.append(h1tag, pTag); // it will append multiple Node at a time

console.log(sectionTag); // <section></section>

//! APPEND AS A CHILD TO BODY TO DISPLAY ON UI
maincontainer.append(sectionTag);


