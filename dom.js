//acess dom
console.log(window.document);
console.dir(window.document)
//acesses dom element or selecting element in javascript

//by id
let heading=document.getElementById("heading")
console.log(heading);

//by tagName

let firstHeading=window.document.getElementsByTagName("h1")
console.log(firstHeading[0].innerText);
console.log(firstHeading[1].innerText);

//by class

let classSelector=document.getElementsByClassName("headings")
console.log(classSelector[0]);
console.log(classSelector[1]);
console.log("-----------------------------------------------------");

//dom manipulation
//Query Selector
let selectFirstEl=window.document.querySelector("h1")//return 1st h1 element
console.log(selectFirstEl);

let selectFirstClassEl=window.document.querySelector(".headings")//rtn first class element only
console.log(selectFirstClassEl);

//Query Selector All
let selectAllEl=window.document.querySelectorAll(".headings")
console.log(selectAllEl[0]);
console.log(selectAllEl[1]);

//properties:
//tagName-:return tag for element nodes

let tagName=window.document.querySelector(".headings").tagName
console.log(tagName);

//innerText-:return text content of elements and all its children

let textOfEl=document.querySelector("p").innerText
console.log(textOfEl);

//innerHTML-:return plain text and html content in the element
let content=window.document.querySelectorAll(".headings")
content[0].innerHTML="<i> <b><small>I Have Learned JS From Screch </small></b></i>"
console.log(content);

//textContent-:return textual content of element even for hidden element