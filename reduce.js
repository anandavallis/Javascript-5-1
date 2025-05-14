  
    const numbers = [1, 2, 3, 4, 5];
  
  function multiplyArray(numbers){
    // Use the reduce Method
    return numbers.reduce((product , current) => product * current,1);
}

const product = multiplyArray(numbers);
console.log(product);
