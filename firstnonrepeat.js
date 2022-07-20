function firstNonRepeatingLetter(s) {
    s = s.toLowerCase()
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if(map[s[i]] !== undefined) {
            map[s[i]] = ''
        } else {
            map[s[i]] = i
        }
    }
    console.log(map)

    for (let j = 0; j < s.length; j++) {
        if(typeof map[s[j]] == 'number') {
            return s[j]
        }
    }
// const [[lowestKey, lowestVal]] = Object.entries(valuemap).sort(function ([,valA], [,valB]) { return valA - valB });
// return lowestKey;
}
  console.log(firstNonRepeatingLetter('moonmen'))