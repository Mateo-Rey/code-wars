stringMerge=(string1,string2,letter)=> {
    let finalmerge = ''
    indx= (str) => {
        let cmn = (str.indexOf(letter)) + 1
        return cmn;
    }
        let premerge1 = string1.slice(0,(indx(string1)))
        let premerge2 = string2.slice((indx(string2)))
        console.log(premerge1)
        finalmerge = premerge1 + premerge2
        return finalmerge;
}

console.log(stringMerge("person","here", "e"))