
.controller('LibsCtrl',function($scope){
    "use strict";
   $scope.words = [
    {word: 'FirstName', placeholder:'female name'},
    {word: 'noun#1', placeholder:'noun #1'},
    {word: 'adjective#1', placeholder:'adjective #1'},
    {word: 'noun#2', placeholder:'noun #2'},
    {word: 'number#1', placeholder:'number #1'},
    {word: 'adjective#2', placeholder:'adjective #2'},
    {word: 'secondName', placeholder:'male name'},
    {word: 'noun#3', placeholder:'noun #3'},
    {word: 'partBody', placeholder:'part of the body'},
    {word: 'pluralnoun#1', placeholder:'plural noun #1'},
    {word: 'noun#4', placeholder:'noun #4'},
    {word: 'adjective#3', placeholder:'adjective #3'},
    {word: 'noun#5', placeholder:'noun #5'},
    {word: 'number#2', placeholder:'number #2'},
    {word: 'adjective#4', placeholder:'adjective #4'},
    {word: 'pluralnoun#2', placeholder:'plural noun #2'},
    {word: 'noun#6', placeholder:'noun #6'}

    ];

    $scope.madLib = true;

    $scope.submit = function(){
      var validForm                      = $scope.myForm.$valid;
      var validName                      = $scope.myForm.myName.$dirty;
      var validNoun1                     = $scope.myForm.myNoun1.$dirty;
      var validAdjective1                = $scope.myForm.myAdjective1.$dirty;
      var validNoun2                     = $scope.myForm.myNoun2.$dirty;
      var validNumber1                   = $scope.myForm.myNumber1.$dirty;
      var validAdjective2                = $scope.myForm.myAdjective2.$dirty;
      var validSecName                   = $scope.myForm.mySecName.$dirty;
      var validNoun3                     = $scope.myForm.myNoun3.$dirty;
      var validBody                      = $scope.myForm.myBody.$dirty;
      var validPluralnoun1               = $scope.myForm.myPluralnoun1.$dirty;
     var validNoun4                      = $scope.myForm.myNoun4.$dirty;
    var validAdjective3                  = $scope.myForm.myAdjective3.$dirty;
    var validNoun5                       = $scope.myForm.myNoun5.$dirty;
     var validNumber2                    = $scope.myForm.myNumber2.$dirty;
    var validAdjective4                  = $scope.myForm.myAdjective4.$dirty;
    var validmyPluralnoun2               = $scope.myForm.myPluralnoun2.$dirty;
    var validNoun6                       = $scope.myForm.myNoun6.$dirty;


      if(validForm || validName || validNoun1|| validAdjective1 || validNoun2  || validNumber1 || validAdjective2  || validSecName || validNoun3 || validBody|| validPluralnoun1 || validNoun4|| validAdjective3 || validNoun5   || validNumber2 || validAdjective4  || validPluralnoun2 || validNoun6 ){
        // hide inputs if true
        $scope.formInputs = true;
        $scope.madLib = false;
      }
    };
    // on click startover hide mad lib content, show inputs, and reset the form
    $scope.startOver = function(){
      // hide madLib content
      $scope.madLib = true;
      // show form inputs
      $scope.formInputs = false;
    };
  })
