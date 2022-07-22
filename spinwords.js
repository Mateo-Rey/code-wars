function spinWords(string){
    let finalArr = []
    let res = ''
    if (string.includes(' ')) {
    let strarr = string.split(' ')
    for (let i = 0; i < strarr.length; i++) {
        let preR = strarr[i].split()
        console.log(preR)
        finalArr.push((preR))
    }
    console.log(finalArr)
    for (let j = 0; j < finalArr.length; j++) {
        if (finalArr[j][0].length > 4) {
            let rev = finalArr[j].reverse()
            console.log(rev)
        }
    }

  } else {
    let strarr = string.split('')
    let reverse = strarr.reverse()
    return reverse.join('')
  }
}

console.log(spinWords('Hello everyone'))