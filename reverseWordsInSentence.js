function reverseWordsInSentence(sentence) {

    let words = sentence.split(' ');
    
    let reversedWords = [];
    
    for (let word of words) {
        let reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }
    

    let reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
}

function reverseWord(word) {

    return word.split('').reverse().join('');
}

let inputSentence = "Hi Meena";
let reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
