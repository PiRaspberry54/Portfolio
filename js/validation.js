// Global variables for use within the functions. In particular the regex function. 
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//Function for the click button and used to go through each input field and check the validation.

$('.button').on('click', function() {
    var wholeFormValid = true;
    log("Submit button is pressed!");
    wholeFormValid = validateField("firstname", "firstname-required-text");
    wholeFormValid = validateField("surname", "surname-required-text") && wholeFormValid;
    wholeFormValid = validateField("email", "email-required-text") && wholeFormValid;
    wholeFormValid = checkAgainstRegex("email", emailRegex, "email-valid-text") && wholeFormValid;
    wholeFormValid = checkAgainstRegex("phone", phoneRegex, "phone-valid-text") && wholeFormValid;
    wholeFormValid = validateField("phone", "phone-required-text") && wholeFormValid;
    wholeFormValid = validateField("subject", "subject-required-text") && wholeFormValid;
    wholeFormValid = validateField("message", "message-required-text") && wholeFormValid;
    // emailRegexCheck("email");
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
        fieldObject.css("border-color", "red");
        requiredTextObject.css("display", "flex");
        return false;
    } else {
        log("This field has a value");
        fieldObject.css("border-color", "white");
        requiredTextObject.css("display", "none");
        return true;
    }
}

// Function for email address and phone number regex.
function checkAgainstRegex(fieldID, regex, requiredTextID) {
    var emailToCheck = $("#" + fieldID).val().toString();
    var match = emailToCheck.match(regex);
    var requiredTextObject = $("#" + requiredTextID);
    // console.log("Just checking that the regexcheck function is actually being called and working", emailToCheck);
    // console.log(match);
    if (match !== null) {
        console.log("This is a valid " + fieldID);
        requiredTextObject.css("display", "none");
        return true;
    } else {
        console.log("This isn't a valid " + fieldID);
        requiredTextObject.css("display", "flex");
        return false;
    }
}

//Function for phone regex.


// Function for displaying the completed form text. 
function showAndHideThankYouMessage() {
    $(".completedForm").fadeIn(2000).delay(3000).fadeOut(1000);
}

function clearFields(fieldID) {
    // console.log("Placeholder for the clearFields function");
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