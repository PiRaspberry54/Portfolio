//Variables to store the different input fields values that it collects when the user presses the submit button. Button is all stored here in order to detect when it has been clicked. 

const $button = $(".button");
const $firstName = $("#firstname");
const $surname = $("#surname");
const $email = $("#email");
const $subject = $("#subject");
const $message = $("#message");

$('.button').on('click', function() {
    while ($firstName !=== ''){
        $("#firstname").css("border", "3px solid red");
           }
});

//$(".completedForm").hide().slideDown(2000).delay(3000).slideUp(1000);
$(".completedForm").hide().fadeIn(2000).delay(3000).fadeOut(1000);