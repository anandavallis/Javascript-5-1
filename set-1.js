const numbers = [1, 2, 2, 3, 4, 4, 5];
function getUniqueNumbers(numbers){

    // Create Set 
    const uniqueNumbersSet = new Set (numbers);
    return Array.from(uniqueNumbersSet);
}

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
