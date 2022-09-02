// Vetores e Arrays Aula 03

// let array = ['String', 1, true] ;
// console.log(array)
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
// console.log(array[1])

///forEach
// array.forEach(function(item, index){console.log(item, index)})

// array.push('novo item') // Adiciona um item ao final indice
// console.log(array)

// array.pop() // Apaga o ultimo indice
// console.log(array)

// array.shift() // Apaga o primeiro indice
// console.log(array)

// array.unshift('new') // Adiciona ao inicio do indice
// console.log(array)

// console.log(array.indexOf(true)) // Retorna o valor do indice

// array.splice(0, 3) // Apaga ou substitui valores
// console.log(array)


// let novoArray = array.slice(0,3)
// console.log(novoArray)

let object = {string: 'Deivison', number: 22, boolean: true, array: ["Indice 0"], objectInterno: {objectInterno:'Objeto interno'}}
// console.log(object.number)

// var string = object.string
// console.log(string)

// var arrayInterno = object.array
// console.log(arrayInterno)


var {string, boolean, number} = object
console.log(string, boolean, number)