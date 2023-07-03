const flatten = (obj) => {
  let result = {}
  
  for (const [key, val]  of Object.entries(obj)) {
    if (typeof val === 'object') { 
      //nested object
      const flattened = flatten(val);
      result = {...result, ...flattened};
      //delete result[key];
      return result;
    } else {
      //primitive values
      result[key] = val;
    }
  }
  return result;
}

const object = {
       id: 1,
       name: 'bob',
       happy: true,
       friend : {
         id2: 2,
         name2: 'alice',
         happy2: true
       }
}
console.log(flatten(object));