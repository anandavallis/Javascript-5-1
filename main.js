 const input =[1,2,3,4,5];
function squareNumbers(numbers){
  return numbers.map(function(num){
     return num * num;
  });
}
  const traditionalOutput = squareNumbers(input);
  console.log("Traditional Function Output : " ,traditionalOutput);
  
//Arrow Function

const squareNumbersArrow = (numbers) => {
   return numbers.map(num => num * num );
}

const arrowOutput = squareNumbersArrow(input);
console.log("Arrow Function Output : " , arrowOutput);
