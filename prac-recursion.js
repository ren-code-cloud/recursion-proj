const nums = [1,2,3,4,5,6];

const sum = (array, index) => {
  //BASE case
  if (index === array.length -1 ) {
    return array[index]; 
  }
  
  //recursive case(s)
  console.log(`At index : ${index}`);
  const total = array[index] + sum(array, index + 1);
  console.log(`Total at index ${index} is ${total}`);
  return total;
}

const result = sum(nums, 0);
console.log(result);