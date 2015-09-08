// describe('leapYear', function() {
//   // test 1 is false for a year that is not divisible by 4
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
//
//    // test 4 is true for most years divisible by 400
//     it("is true for most years divisible by 400", function(){
//       expect(leapYear(1600)).to.equal(true);
//     });
//
//   // test 2 is true for most years divisible by 4
//   it("is true for most years divisible by 4", function() {
//     expect(leapYear(2012)).to.equal(true);
//   });
//   // test 3 is false for most years divisible by 100
//   it("is false for most years divisible by 100", function() {
//     expect(leapYear(1900)).to.equal(false);
//   });
//
// });




/////////////////////////////// tri  tests ///////////////////////////////////
describe('triangle', function(){
  it("determines if 3 sides create a valid triangle", function(){
    expect(triangle(2,2, 5000)).to.equal("These sides do not make a triangle.")
  });

  it("determines if 3 sides make an equilateral triangle.", function(){
    expect(triangle(2,2,2)).to.equal("equilateral")
  });
  it("determines if 3 sides make an isosceles triangle", function (){
    expect(triangle(2,8,8)).to.equal("isosceles")
  });
  it("determines is 3 sides make a scalene triangle", function(){
    expect(triangle(3,4,5)).to.equal("scalene")
  });
});
