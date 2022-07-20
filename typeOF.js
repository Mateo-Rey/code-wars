function typeOF(arr) {
  let valuemap = [];
  for (let i = 0; i < arr.length; i++) {
    valuemap.push(typeof arr[i]);
  }
  return valuemap;
}

console.log(typeOF(["hey", 1, true, 23]));
