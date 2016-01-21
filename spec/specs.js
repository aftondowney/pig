
describe('pigLatin', function() {
  it("checking if a word starts with a vowel", function() {
    expect(pigLatin("afton")).to.equal("aftonay");
  });

  it("replace word with updated spliced word", function() {
    expect(pigLatin("trash")).to.equal("ashtray");
  });
});

describe('splitString', function() {

  it("split string that has more than one word into an array", function() {
  expect(splitString("happy day")).to.equal("appyhay ayday");
  });
});

// describe('findVowel', function() {
//
//   it("determine the position of the first vowel", function() {
//     expect(findVowel("trash")).to.equal(2);
//   });
// });
//
// describe('consonants', function() {
//
//   // it("capture removed consonants in var cons", function() {
//   //   expect(consonants("trash")).to.equal("tr");
//   // });
//
//
// });
