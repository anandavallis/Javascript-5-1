// const words = ["apple", "Banana" , "Berry" , "Dates" , "Elderberry" , "Fig"];
function filterLongWords(words){
    return words.filter(word => word.length > 5);
}

const words = ["apple", "Banana" , "Berry" , "Dates" , "Elderberry" , "Fig"];

const longWords = filterLongWords(words);
console.log(longWords);
