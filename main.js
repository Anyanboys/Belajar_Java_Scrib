console.log("Hello Word External")
// Data Type
// Undefined
let undefineValue
console.log(undefineValue)

// Null
let nulValue = null
console.log(null)

// Numbber
let numbberValue = 10
console.log(typeof numbberValue)

// String
let stringValue = "Hello"
console.log(typeof stringValue)

// Bolean
let booleanValue = true
console.log(booleanValue)
booleanValue = false
console.log(typeof booleanValue)

// Object
let objectValue = {
    key : "value",
    a: 1
}
console.log(typeof objectValue)
console.log(typeof objectValue.a)

// Arithmatic Operator
let num1 = 2, num2 = 3, num3 = 5

// penjumlahan
console.log(10 + 5)
console.log(num1 + num2)

// Pengurangan
console.log(10 - 5)
console.log(num3 - num2)

// Perkalian
console.log(10 * 5)
console.log(num1 * num2)

// Pembagian
console.log(50 / 2)
console.log(num3 / num1)

// Perpangkatan
console.log(10 ** 5)
console.log(num1 ** 2)

// Persenan
console.log(20 % 3)
console.log(num3 % num1)

// income
console.log(num2++)
console.log(num1)
console.log(++num3)

// dectremen
console.log(num1--)
console.log(num2)
console.log(--num3)

num1 += num2
num1 = num1 + num2
console.log(num1)

// let num1 = 10, num2 =50;

// console.log("Belajar Conditional")

// if (num1 > num2) {
//     console.log("Kondisi if benar")
// } else if (num1 == num2) {
//     console.log("kondisi if else benar")
// }else {
//     console.log("Kondisi seluruh if salah")
// }
// ..............sama dengan.................
// let var1 = 10, var2 = "10"
// if (var1 == var2) {
//     console.log("if 1 benar")
// }
// if (var1 === var2) {
//     console.log("if 2 benar")
// }
// else {
//     console.log("if 2 salah")
// }
// // ..............tidak sama dengan.................
// if (var1 != var2) {
//     console.log("if 1 benar")
// }
// if (var1 !== var2) {
//     console.log("if 2 benar")
// }
// // ..............lebiih dari sama dengan.................
// let var3 = 25, var4 = 25
// if (var3 >= var4) {
//     console.log("if 1 benar")
// }
// if(var3 <= var4) {
//     console.log("if 2 benar")
// }
// ..........Mengecek angka diantara variabel 1&3........
let var1 = 10, var2 = 30, var3 =50
if (var2 < var3) {
    console.log("benar")
}
if (var2 > var1 && var2 < var3) {
    console.log("true")
}