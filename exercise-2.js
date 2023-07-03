const flatten = (arr) => {
  const result = []
  arr.forEach(element => {
    if (Array.isArray(element)) {
      const flattened = flatten(element);
      for (const innerElement of flattened) {
        result.push(innerElement)
      }
    }else {
        result.push(element)
      }
  })
  return result;
}
console.log(flatten([1,2,3]));
console.log(flatten([1,2,3,[1,2,3]]));
console.log(flatten([[1,2,3],1,2,3]));
