//create a function that will take two numbers from an array and add them together to meet the target

let indexes = []
function twosum(arr,target) {
for (let i = 0; i <arr.length; i++) {
    for (let j = 0; j <arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            indexes.push(arr[i])
            indexes.push(arr[j])
        }
    }

}
return indexes;
}
console.log(twosum([],))