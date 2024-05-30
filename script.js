//Attributes
//get attributes
let first=document.querySelector("div")
console.log(first)
let second=first.getAttribute("div")
console.log(second)
//set attributes
let third=document.querySelector("p")
console.log(third.setAttribute("class","paragrah"))
//style
third.style.backgroundColor="red"
third.innerText=" hello, this is my first paragraph "
first.style.backgroundColor="green"
//insert elements
let btn=document.createElement("button")
btn.innerText="click me!"
let hh=document.querySelector("div")
hh.append(btn)
btn.style.backgroundColor="red"
btn.style.color="white"
//remove node
third.remove()



