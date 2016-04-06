

var noun1;
var femaleName;
var noun1;
var adjective1;
var noun2;
var number1;
var adjective2;
var maleName;
var noun3;
var partBody;
var pluralNoun1;
var noun4;
var adjective3;
var noun5;
var number2;
var adjective4;
var noun6;

$("#final").hide();

$("#Restart").hide();

$("button").click(function() {

 FirstName = $("#firstName").val();

  noun1 = $("#noun1").val();

 adjective1 = $("#adjective1").val();

  noun2 = $("#noun2").val();

  number1 = $("#number1").val();

adjective2= $("#adjective2").val();

SecondName = $("#SecondName").val();

 noun3= $("#noun3").val();

partBody = $("#partBody").val();

pluralNoun1 = $("#pluralNoun1").val();

 noun4 = $("#noun4").val();

adjective3 = $("#adjective3").val();

noun5 = $("#noun5").val();

number2 = $("#number2").val();

adjective4 = $("#adjective4").val();

noun6 = $("#noun6").val();


$("#first").hide();

  $("#content").hide();

  $(this).hide();

  $("#final").show();

 $("#Restart").show();

  $("#final").append("Friends, this is a surprise party for " + FirstName +  ". we are hear to celebrate you, " + noun1 + "All of your most  treasured" + adjective1 +   " friends are here, including me, your devoted and faithful friend." +  noun2 + " I must say that you don't look a day over " +  number1 + "Naturally, We have some " + adjective2 + "  presents for you. </br>, " +SecondName + "bought you a beautiful copper" +  noun3 + " that you can wear on your lovely" + partBody + " And our hostess got you a dozen" + pluralNoun1 + "  that you can hang in your" + noun4 + "  And we had the bakery send up a huge" + adjective3 + noun5 +  "  with" +number2 + "  candles on it. We all want to wish you a " +adjective4 + " happy birthday and many more blessings . Now, let's all sing together: Happy" +  noun6 + " day to you!")





});
  $("#Restart").click(function(){

   $("input").val(' ');

 $("#first").show();

  $(this).hide();

  $("#final").hide();

    $("button").show();

      $("#Restart").hide();

      $("#final").empty();
  });

