// This object has strings, some have commas, make it so that every time there is comma you add spaceconst attributes =
let object1 = {hello: "Hello,2ello",
hello1: "Hello,Hello",
hello2: "Hello,Hello,Hi",
hello3: "true",}

let newObj = {}
function spacecomma (obj) {
let strings = Object.values(obj)
for (let i = 0; i < strings.length; i++) {
    if (strings[i].includes(',')) {
       newObj = strings[i].replaceAll(',', ', ')
        console.log(newObj)
    }
}

}
spacecomma(object1)