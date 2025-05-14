
    <h2>string includes()</h2>
    
        function wordInSentence(sentence, word){
            return sentence.includes(word)
        }
        const sentence = 'The quick brown fox jumps over the lazy dog';
        const word = 'fox';

        const result = wordInSentence(sentence, word);
        console.log(result);
    
