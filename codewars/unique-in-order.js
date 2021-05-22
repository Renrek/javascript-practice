/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder=function(iterable){
  
    let charicters = Array.isArray(iterable) ? iterable : iterable.split('');
    
    let payload = charicters.filter((char, i) => {
      return charicters[i] != charicters[i + 1];
    });
    
    return payload;
  };
/*
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
*/