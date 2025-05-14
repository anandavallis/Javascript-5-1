
    <h2>Array.Keys()</h2>
    
        function printArrayKeys(arr){
            const keys = arr.keys();
            for(let key of keys){
            console.log(key);
            }
        }
        const items = ["apple", "banana","cherry"];
        printArrayKeys(items);
    
