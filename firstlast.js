const numbers = [1, 2, 3, 2, 4, 2, 5];

function findFirstAndLastIndex(arr , element){
     const firstIndex = arr.indexOf(element);
     const lastIndex = arr.lastIndexOf(element);

     return{
        firstIndex : firstIndex,
        lastIndex : lastIndex
     };
}

const result = findFirstAndLastIndex(numbers, 2);
console.log(result);
