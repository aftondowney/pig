
describe('pigLatin', function() {

  it("checking if a word starts with a vowel", function() {
    expect(pigLatin("afton")).to.equal("aftonay");
  });

  it("remove first letter if the first letter is not a vowel and put it at the end", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });
});
