//Variables to store the different input fields values that it collects when the user presses the submit button. Button is all stored here in order to detect when it has been clicked. 

//let $button = $(".button");
//let $firstName = $("#firstname").val;
//let $surname = $("#surname").val;
//let $email = $("#email").val;
//let $subject = $("#subject").val;
//let $message = $("#message").val;
//
//$('.button').on('click', function() {
//    $(".completedForm").hide().fadeIn(2000).delay(3000).fadeOut(1000);
//    if ($firstName !== ''){
//        $("#firstname").css("border", "3px solid red");
//           } else {
//               
//           }
//});
//
////$(".completedForm").hide().slideDown(2000).delay(3000).slideUp(1000);
//$(".completedForm").hide().fadeIn(2000).delay(3000).fadeOut(1000);

//Function for the click button and used to go through each input field and check the validation.

$('.button').on('click', function() {
    var wholeFormValid = true;
    log("Submit button is pressed!");
    wholeFormValid = validateField("firstname", "firstname-required-text");
    wholeFormValid = validateField("surname", "surname-required-text") && wholeFormValid;
    wholeFormValid = validateField("email", "email-required-text") && wholeFormValid;
    wholeFormValid = validateField("phone", "phone-required-text") && wholeFormValid;
    wholeFormValid = validateField("subject", "subject-required-text") && wholeFormValid;
    wholeFormValid = validateField("message", "message-required-text") && wholeFormValid;
    if (wholeFormValid) {
        showAndHideThankYouMessage();
        clearFields("firstname");
        clearFields("surname");
        clearFields("email");
        clearFields("phone");
        clearFields("subject");
        clearFields("message");
    }
});

//Function for validation. 
function validateField(fieldID, requiredTextID) {
    log("Called validatedField()");
    var fieldObject = $("#" + fieldID);
    var requiredTextObject = $("#" + requiredTextID);
    var fieldValue = fieldObject.val();
    log("fieldValue = " + fieldValue);
    if (fieldValue == "") {
        log("Empty field");
        fieldObject.css("border", "3px solid red");
        requiredTextObject.css("display", "flex");
        return false;
    } else {
        log("This field has a value");
        fieldObject.css("border-color", "white");
        requiredTextObject.css("display", "none");
        return true;
    }
}

// Function for email address regex.
function RegexCheck() {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

//Function for phone regex.


// Function for displaying the completed form text. 
function showAndHideThankYouMessage() {
    $(".completedForm").fadeIn(2000).delay(3000).fadeOut(1000);
}

function clearFields(fieldID) {
    console.log("Placeholder for the clearFields function");
    var fieldObject = $("#" + fieldID);
    var fieldValue = fieldObject.val("");
    // console.log(fieldObject);
    // console.log(fieldValue);
    // $("#firstname")
}

clearFields();

//Helper functions
function log(stringToLog) {
    console.log(stringToLog);
}