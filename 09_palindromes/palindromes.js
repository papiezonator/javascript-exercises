const palindromes = function (sentence) {
    let lowerCase = sentence.toLowerCase();
    let palindrome = [];
    let reversePalindrome = [];
    for(let i = 0; i < lowerCase.length; i++){
        if(lowerCase[i] == ' ' || lowerCase[i] == ',' || lowerCase[i] == '.' || lowerCase[i] == '!'){
        continue;   
        }
        palindrome.push(lowerCase[i]);
        reversePalindrome.push(lowerCase[i]);
    }

  reversePalindrome.reverse();
    
  console.log("regular: ", palindrome);
  console.log("reversed: ", reversePalindrome);
  if(reversePalindrome.join('') == palindrome.join('')){
        return true
    } else {
        return false
    }  
};

module.exports = palindromes;


