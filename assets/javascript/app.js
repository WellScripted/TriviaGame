//Pseudocode for app.js

//Click Event for Start button:

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
    //Repeat same format for all 6 other questions
},{
    //3rd question
},{
    //4th question
},{
    //5th question
},{
    //6th question
}]; 

//Who was the 1st President of the United States of America?
//Choices: Abe Lincoln, Jefferson Davis, Benjamin Franklin, George Washington
//Answer: George Washington
//Image of George Washington

//What is our Nation's founding document?
//Choices: Magna Carta, Emancipation Proclaimation, Articles of Confederation, Declaration of Independence
//Answer: Declaration of Independence
//Image of Declaration of Independence

//What is the oldest State in the Union?
//Choices: New York, Pennsylvania, Delaware, Texas
//Answer: Delaware
//Image of Delaware or it's State Flag

//What year was the "Louisiana Purchase" made?
//Choices: 1984, 1492, 1803, 1776
//Answer: 1803
//Image of the Louisiana Purchase

//The "Reconstruction Era" began after the Revolutionary War ended in 1783
//Choices: True or False
//Answer: False
//Alert: WRONG! The "Reconstruction Era" began after the end of the Civil War in 1865

//Maryland was originally a colony founded for Catholics in the "New World"
//Choices: True or False
//Answer: True
//Alert: Correct! It was founded by Lord Baltimore and other Catholics for religious freedom.

//What year did the "War of 1812" begin?
//Choices: 1811, 1810, 1812, 1815
//Answer: 1812
//Image of the War of 1812

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
        //LOOP THROUGH QUESTIONS ARRAY HERE!
    },
    
    //Done method
    done: function() {
        $.each("input[name='question-0']:checked"), function() {
            if($(this).val() === questions[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        } //Create for each question in the array(name='question-1', question-2)
        this.result() //this.result goes after all the each question
    }, 
    result: function() {

    }
   
};