/////// OLD ////////////////////////////////////////////////////////////////////
// var leapYear = function(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

 ////////// new but same as above //////////////////////////////////////////////

//  var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// };



//////////// working ///////////////////////////////////////////////////////////
// var leapYear = function(year) {
//   if ((year % 400 === 0)) {
//     return true;
//   }
//   else if ((year % 4 === 0) && (year % 100 !== 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };



////////// new  leap year function - working ////////////////////////////////////
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });

////////// triangle esablishing rules /////////////////////////////////////
var triangle = function (sideOne, sideTwo, sideThree) {
  console.log(sideThree);
  if ((sideOne <= (sideTwo + sideThree))
        && (sideTwo <= (sideThree + sideOne))
        && (sideThree <= (sideOne + sideTwo))) {
          if ((sideOne===sideTwo) && (sideTwo===sideThree)) {
            return "equilateral";
          } else if ((sideOne === sideTwo) || (sideOne === sideThree) || (sideThree === sideTwo)) {
            return "isosceles" ;
          } else {
            return "scalene";
          }
  } else {
    return "These sides do not make a triangle." ;
  }
 };

/////////////////////////////// this part is like app in php part  ////////////
$(document).ready (function() {
  $("form#triangle").submit(function(event) {
    $(".not").text("");
    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    sideOne = parseInt($("input#sideOne").val(""));
    sideTwo = parseInt($("input#sideTwo").val(""));
    sideThree = parseInt($("input#sideThree").val(""));

    $(".triangle").text(triangle);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show(result);
    event.preventDefault();
  });
});
