function createPhoneNumber(numbers) {
let firstthree = `(${numbers[0]}${numbers[1]}${numbers[2]})`
let secondthree = `${numbers[3]}${numbers[4]}${numbers[5]}`
let lastfour = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

let finalstr = `${firstthree} ${secondthree}-${lastfour}`
return finalstr;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(createPhoneNumber(array))