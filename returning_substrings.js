
function inArray(array1,array2){
    let r = []
    let finalR = []
    for (let i = 0; i <array1.length; i++) {
        let iValue = array1[i]
        r.push(iValue)
    for (let j = 0; j <array2.length; j++) {
        if (array2.indexOf(iValue)) {
            finalR.push[iValue]
        }
    }
  } 
}
console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))
