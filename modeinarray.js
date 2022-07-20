const a = [65,65,21,53,321,321,21,21,21,88,44,67,7,7,7,7,7,7,7,7,7];

function modearray(array) {
    let count = {}
    for (const element of array) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
    
    }
return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);;
}
console.log(modearray(a))