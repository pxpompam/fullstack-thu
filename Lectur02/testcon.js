function censorWord(sentence, wordTocensor){
    const regex = new RegExp(wordTocensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalPost = "JavaScript is fun, but sometime javascript can be tricky"
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost);