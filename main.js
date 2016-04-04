

var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var countDisplay = document.getElementById("countdown");
var radios = document.getElementsByTagName("input");

    quiz.style.display = "none";
startButton.addEventListener("click", function() {
    quiz.style.display = "block";
    this.style.display = "none";

         var count = 10;
    var countdown = function() {
        if (count == 0) {
            clearInterval(countdownInterval);
            var checked = 0;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    score++;
                }
                startButton.style.display = "block";
                startButton.innerHTML = "Try again.";
            }
            countDisplay.innerHTML = "Out of time. Your score is " + score + " / " + radios.length;
        } else {
            countDisplay.innerHTML = "Time to complete quiz: " + count;
            count--;
        }
    };
    var countdownInterval = setInterval(countdown, 1000);

});



function gradeTest() {
    //variables with global implications
   var totalQuestions = 5;
   var score = 0;

    var radios = document.getElementsByName('question1');

    //console.log(radios.length);

    //var ischecked_method = false;

    for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
            // do whatever you want with the checked radio
                //console.log(radios[i].value);
                if(radios[i].value == "script"){
                    score++;
                    break;
                }//else{alert("wrong answer");}

        }
//break;
    }

    //console.log(score);
    var radios2 = document.getElementsByName('question2');

    //console.log(radios.length);

    //var ischecked_method = false;

    for (var i = 0; i < radios.length; i++) {
            if (radios2[i].checked) {
            // do whatever you want with the checked radio
                //console.log(radios[i].value);
                if(radios2[i].value == "cascading"){
                    score++;
                    break;
                }//else{alert("wrong answer");}

        }
        //break;
    }

     var radios3 = document.getElementsByName('question3');

    //console.log(radios.length);

    //var ischecked_method = false;

    for (var i = 0; i < radios.length; i++) {
            if (radios3[i].checked) {
            // do whatever you want with the checked radio
                //console.log(radios[i].value);
                if(radios3[i].value == "style"){
                    score++;
                    break;
                }//else{alert("wrong answer");}

        }
        //break;
    }

     var radios4 = document.getElementsByName('question4');

    //console.log(radios.length);

    //var ischecked_method = false;

    for (var i = 0; i < radios.length; i++) {
            if (radios4[i].checked) {
            // do whatever you want with the checked radio
                //console.log(radios[i].value);
                if(radios4[i].value == "backcolor"){
                    score++;
                    break;
                }//else{alert("wrong answer");}

        }
        //break;
    }

    var radios5 = document.getElementsByName('question5');

    //console.log(radios.length);

    //var ischecked_method = false;

    for (var i = 0; i < radios.length; i++) {
            if (radios5[i].checked) {
            // do whatever you want with the checked radio
                //console.log(radios[i].value);
                if(radios5[i].value == "margin"){
                    score++;
                    break;
                }//else{alert("wrong answer");}

        }
        //break;
    }




    var message = document.getElementById("message");
    if(score == totalQuestions) {
        message.innerHTML ="Congratulations! You got all the questions right!";
   }
   else {
      message.innerHTML ="You got " + score + " out of " + totalQuestions + " correct!";
   }
}

