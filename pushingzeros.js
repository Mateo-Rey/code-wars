let myArray = [1,2,0,1,0,1,0,3,0,1]

function moveZeros(arr) {
    let copy = []
    let zerocounter = 0
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] !== 0) {
            copy.push(arr[i])
        } else if (arr[i] == 0){
            zerocounter = zerocounter + 1
        }
     }
for (let j = 0; j < zerocounter; j++) {
    copy.push(0)
}
return copy;
}

console.log(moveZeros(myArray))