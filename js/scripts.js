// var word = "afton"
var ay = "ay"
var wordArray =  string.split(" ");
// var splitString = function(string, separator) {
//
//    return wordArray;
//  };

var pigLatin = function(wordArray.forEach(function(word) {

  var vowel = word.search(/([aeiouAEIOU]+)/g);

  if (vowel === 0 ) {
    return word.concat(ay);
   } else {
     var cons = word.substring(0, (vowel));
     word = word.slice(vowel);
     return word + cons + ay;
  }
}));

// first === "a" || first === "e" || first === "i" || first === "o" || first === "u"

// var findVowel = function(word) {
//     var vowel = word.search(/([aeiouAEIOU]+)/g);
//     return vowel;
// };
//
// var consonants = function(word) {
//   var vowel = word.search(/([aeiouAEIOU]+)/g);
//   var cons = word.substring(0, (vowel));
//   word = word.slice(vowel);
//   return word + cons + ay;
// }
//
// var newWord = function(word) {
//
// }
