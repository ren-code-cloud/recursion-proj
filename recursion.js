const fizzBuzz = (startNum, endNum) => {
  if (startNum > endNum) {
    return
  }
  fizzBuzz(startNum + 1, endNum)
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz")
  } else if (startNum % 5 === 0) {
    console.log("Buzz")
  }else {
    console.log(startNum)
  }
}

const result = fizzBuzz(0, 100)
console.log(result)
