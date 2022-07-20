let strArr = []
let vowels = ['a','e','i','o','u']
let cutStr = []
let strnew = []
let strnew2 = []
let strnew3 = []
let strnew4 = []
function disemvowel(str) {
  strnew = str.split('')
  let finalStr = ""
  for (let i = 0; i < strnew.length; i++) {

  if (strnew[i] != 'a' && strnew[i] !='e' && strnew[i] != 'i' && strnew[i] != 'o' && strnew[i] != 'u' && strnew[i] != 'A' && strnew[i] != 'E' && strnew[i] != 'I' && strnew[i] != 'O' && strnew[i] != 'U') {
finalStr = finalStr + strnew[i]
  }
}
return finalStr;
}

  //  for (let j = 0; j < strnew.length; j++) {
  //  strnew2.slice(j)
  //   strnew3 = strnew2
  //   return strnew3;
  //  }
  // }

console.log(disemvowel('I eat little pieces of shit for breakfast'))