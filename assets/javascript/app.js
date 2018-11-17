//Click Event for Start button:
$(document).on(function(){
    console.log("hi")
})
$('#start').on("click", function() {
    game.start();
});

//Click Event for End Button:

$(document).on("click", "#done", function() {
    game.done();
});

//Questions:

var questions = [{
    question: "Who was the 1st President of the United States of America?",
    choices: ["Abe Lincoln", "Jefferson Davis", "Benjamin Franklin", "George Washington"],
    answer: "George Washington"
    //Image of George Washington
}, {
    question: "What is our Nation's founding document?",
    choices: ["Magna Carta", "Emancipation Proclaimation", "Articles of Confederation", "Declaration of Independence"],
    answer: "Declaration of Independence",
    //Image of Declaration of Independence
},{
    question: "What is the oldest State in the Union?",
    choices: ["New York", "Pennsylvania", "Delaware", "Texas"],
    answer: "Delaware"
    //Image of Delaware or it's State Flag
},{
    question: "What year was the 'Louisiana Purchase' made?",
    choices: ["1984", "1492", "1803", "1776"],
    answer: "1803"
    //Image of the Louisiana Purchase
},{
    question: "The 'Reconstruction Era' began after the Revolutionary War ended in 1783",
    choices: ["True","False"],
    answer: "False"
    //Alert: WRONG! The "Reconstruction Era" began after the end of the Civil War in 1865
},{
    question: "Maryland was originally a colony founded for Catholics in the 'New World'",
    choices: ["True","False"],
    answer: "True"
    //Alert: Correct! It was founded by Lord Baltimore and other Catholics for religious freedom.
},{
    question: "What year did the 'War of 1812' begin?",
    choices: ["1811", "1810", "1812", "1815"],
    answer: "1812"
    //Image of the War of 1812
}]; 

//Game logic

var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done()
        }
    },

    //Start method
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#sub-container").prepend("<h2> Time Remaining: <span id='counter'></span> Seconds: </h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#sub-container").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].choices.length; j++) {
                $("#sub-container").append("<input type='radio' name='question-" + i +
              "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j] + "</br>");
            }
          }
          //change to submit button w/listener
          $("#sub-container").append("<button id='submit'>SUBMIT!</button>");
          $("#submit").on("click", game.done); 
    },
    
    //Done method
    done: function() {
        $.each("input[name='question-0']:checked", function() {
            if($(this).val() === questions[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }) //Create for each question in the array(name='question-1', question-2)

        $.each("input[name='question-1']:checked", function() {
            if($(this).val() === questions[1].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each("input[name='question-2']:checked", function() {
            if($(this).val() === questions[2].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each("input[name='question-3']:checked", function() {
            if($(this).val() === questions[3].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each("input[name='question-4']:checked", function() {
            if($(this).val() === questions[4].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each("input[name='question-5']:checked", function() {
            if($(this).val() === questions[5].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each("input[name='question-6']:checked", function() {
            if($(this).val() === questions[6].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
                        
        this.result() //this.result goes after all the each question
    }, 
    result: function() {
        // Use clearInterval for our timer variable
        console.log(timer);
        clearInterval(timer);
        // Remove all HTML from the questions array
        // New HTML:  add Correct Answers, Incorrect Answers and Unanswered questions
        //HINT:  to calculate unanswered questions, subtract the correct & incorrect answers from the total questions.length

    }
   
};