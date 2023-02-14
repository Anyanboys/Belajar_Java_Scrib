function functionname() {
    console.log("Belajar Function")
}
functionname()

// arguments & parameter
function perkalian(num1, num2) {
    console.log(num1 * num2)
}
perkalian(5, 10)

// difault parameter
function sayhello(name = "Word") {
    console.log("Hello " + name)
}
sayhello("Budi")
sayhello()

// return Statment
function calculateArea (p, l) {
    return p * l
}

console.log(calculateArea(5, 8))
let result = calculateArea(5, 5)
console.log(result)

// keyword function
function keywordFunction () {
    console.log("Keyword function")
}
keywordFunction()