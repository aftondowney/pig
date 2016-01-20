// var word = "afton"
 var ay = "ay"

var pigLatin = function(word) {
  // word = word.toLowerCase();
  var first = word.charAt(0);

  if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u" ) {
    return word.concat(ay);
  } else {
    word = word.substring(1);
    return word + first + ay;
  }
};

var splitString = function(string, separator) {
  return string.split(" ");
};
