// mencari element mengunakan domjs
// let el = document.getElementById("div-1")
// console.log(el)
// let el = document.getElementsByTagName("div")
// let el = document.getElementsByClassName("div-2")
// console.log(el)

// Query Selector
// let el = document.querySelector("#div-1")
// // let el = document.querySelector("div")
// // let el = document.querySelector(".div-2")
// console.log(el)

// set HTML content
// el.innerHTML = "<p>Hello Woord</p>"

// change atribut
// let input = document.getElementById("input")
// console.log(input)
// input.setAttribute("type", "checkbox")

// let input = document.getElementById("input")
// input.style.borderColor = "red"
// input.style.color = "blue"

// creating & deleting element
// const pElement = document.createElement("p")
// const divEl = document.getElementById("div-1")
// divEl.appendChild(pElement)
// pElement.innerHTML = "hello this is p"
// divEl.removeChild(pElement)

// const hello = document.getElementById("hello")

// hello.addEventListener("mouseenter", function() {
//     hello.style.border = "1px solid red"
// })

// const btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     const boom = document.getElementById("boom")
//     boom.style.display = "block"
// })

function showBoom() {
    const boom = document.getElementById("boom")
    boom.style.display = "block"
}

function addBorder(el) {
    el.style.border = "lpx solid blue"
}