// let arr = [1,2,3,4,5,6,7,8,9]
//
// function handleSum(){
//     let sum = 0
//     for (let i =0; i < arr.length; i++) {
//         sum += arr [i]
//     }
//     return sum
// }
//
// console.log (handleSum());

// let str = 'Hello world'

// function handleSum(){
//     let sum = 0
//     for (let i =0; i < arr.length; i++) {
//         sum += i
//     }
//     return sum
// }
//
// console.log (handleSum());

// let str = 'Hello World'
// function handleSum(){
//     let sum = ''
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             sum += str[i] = str[i].toUpperCase()
//         }else {
//             sum += str[i] = str[i].toLowerCase()
//         }
//     }
//     return sum
// }
//
// console.log(handleSum());

// function sumMix(x) {
//     let sum = 0
//     for (let i = 0; i < x.length; i++) {
//         sum += +x[i]
//     }
//     return sum
// }
// console.log(sumMix(x[9,3,'7','3']))

// function getMiddle(s) {
//     if (s.length %2 === 0){
//         return s.substr(s.length / 2 -1, 2)
//     }else{
//         return s.substr(s.length / 2, 1)
//     }
// }
//
// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))

// function stray(numbers){
//    let a= numbers.filter((el,idx) => idx === numbers.indexOf(numbers[el]), && idx === numbers.lastIndexOf(numbers[el]))
//     return a[0]
// }
//
// console.log(stray([1, 1, 2]))

//Homework

//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// [1, 2, 3, 0, 4, 5, 6]
// let arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.map(el => el * el))

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// [1, 2, 3, 0, 4, 5, 6]
// let arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.map(el => el>0))

//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
// [1, 2, -3, 0, 4, -5, 6]
// let arr = [1, 2, -3, 0, 4, -5, 6]
// console.log(arr.some(el => el < 0))

//Дан массив с числами. Оставьте в нем только отрицательные числа.
// [1, 2, -3, 0, 4, 5, -6]
// let arr = [1, 2, -3, 0, 4, 5, -6]
// console.log(arr.filter(el => el < 0))

// Дан массив с числами. Оставьте в нем только четные числа.
// [1, -2, 3, 0, 4, -5, 6]
// let arr = [1, -2, 3, 0, 4, -5, 6]
// console.log(arr.filter(el => el %2 === 0))

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun, 'even]
// let arr = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// console.log(arr.filter(word => word.length > 5))

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// [1, 2, -3, 0, -4, 5, -6]
// let arr= [1, 2, -3, 0, -4, 5, -6]
// console.log(arr.filter(number => number < 0).length)

// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
// function merge(a, b){
//     return a.concat(b)
// }
//
// let a = [1, 2, 3, 4]
// let b = ['a', 'b', 'c', 'd']
//
// console.log(merge(a,b))

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
// function merge (a, b){
//     return a.concat(b)
// }
// let a = [2, 3, 4, 5]
// let b = 'hello world'
//
// console.log(merge(a,b))

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// function mergeSplit (a, b){
//     return a.concat(b.split(''))
// }
// let a = [2, 3, 4, 5]
// let b = 'hello world'
// console.log(mergeSplit(a,b))

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]
// function mergeSplit(a, b, a){
//     return a.concat(b.split('')) + ',' + a
// }
// let a = [2, 3, 4, 5]
// let b = 'hello world'
// console.log(mergeSplit(a,b,a))


//fizzBuzz
// for (var i = 1; i<=100; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzBuzz');
//     }else if (i % 3 === 0){
//         console.log('fizz');
//     }else if (i % 5 === 0) {
//         console.log ('Buzz');
//     }else {
//         console.log(i)
//     }
// }