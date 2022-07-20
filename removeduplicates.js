function rmdup(array) {
    let map = {}
for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== true) {
        map[array[i]] = i
    }
}console.log(map)
return Object.keys(map);
}

console.log(rmdup([21,21,23,24,25,25,21,26]))