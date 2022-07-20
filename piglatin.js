function pigIt(str) {
   let wordArray = str.split(' ')
   let punctuations = [".", ",", ":", "!", "?"];
   let resultArray = []
   let finalArray = []
for (let j = 0; j < wordArray.length; j++) {
    if (wordArray[j].includes('!') || wordArray[j].includes('.') || wordArray[j].includes('?')) {
    finalArray.push(wordArray[j])
    } else {
        finalArray.push((wordArray[j].substr(1) + (wordArray[j].substr(0,1)) + 'ay'))
    }
}
let finalstr = finalArray.join(' ')
return finalstr;
}

console.log(pigIt('Pull the lever the seats is leather'))