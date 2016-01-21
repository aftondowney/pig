// var word = "afton"
var ay = "ay"

var splitString = function(string, separator) {
   var wordArray =  string.split(" ");
   var newWordArray = [];
   wordArray.forEach(function(word) {
     var newWord = pigLatin(word);
     newWordArray.push(newWord);
   });
   var igpayAtinlay = newWordArray.join(" ");
 };

var pigLatin = function(word) {

  var vowel = word.search(/([aeiouAEIOU]+)/g);

  if (vowel === 0 ) {
    return word.concat(ay);
   } else {
     var cons = word.substring(0, (vowel));
     word = word.slice(vowel);
     return word + cons + ay;
  }
};


$(document).ready(function() {
  $("#text form").submit(function(event) {
    $(".string").text(igpayAtinlay);

  $("#result").show();
  event.preventDefault();
 });
});
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
