/*
    Validation functions
*/

BindValidationToSubmitButton();

function BindValidationToSubmitButton() {
    $('#submit-contact-form-button').on('click', function() {
        var wholeFormValid = true;
        wholeFormValid = ValidateField('firstname', 'firstname-required-text') && wholeFormValid;
        wholeFormValid = ValidateField('surname', 'surname-required-text') && wholeFormValid;
        wholeFormValid = ValidateField('email', 
                                        'email-required-text', 
                                        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
                                        'email-not-valid-text') 
                            && wholeFormValid;
        wholeFormValid = ValidateField('subject', 'subject-required-text') && wholeFormValid;
        wholeFormValid = ValidateField('message', 'message-required-text') && wholeFormValid;
        
        if(wholeFormValid) {
            FadeThankYouInAndOut();
        }
    });
}

/* Validates that the field passed is not blank,
    and matches the regex (if passed)
    Shows / hides "required" text, and / or "doesn't match the regex" text
    and applies / removes other styling as appropriate.
    Inputs:
        fieldId                 The ID of the element to validate
        requiredTextId          The ID of the element to show if invalid / hide if valid 
        regex                   The regex to compare against
        doesntMatchRegexTextId  The ID of the element to show if invalid / hide if valid
    Returns:
        true  if   valid
        false if invalid
*/

function ValidateField(fieldId, requiredTextId, regex, doesntMatchRegexTextId = null) {
    HideNotValidatedStyle(fieldId);
    if(!ValidateRequired(fieldId, requiredTextId)) { return false; }
    HideRequiredText(requiredTextId);
    if(!ValidateAgainstRegex(fieldId, regex, doesntMatchRegexTextId)){ return false; }
    HideDoesntMatchRegexTextId(doesntMatchRegexTextId);

    return true;
}

function ValidateRequired(fieldId, requiredTextId) {
    if(IsBlank(fieldId)) {
        ShowRequiredText(requiredTextId);
        ShowNotValidatedStyle(fieldId);
        return false;
    }
    return true;
}

function IsBlank(fieldId) {
    var fieldValue = $("#" + fieldId).val();
    console.log("fieldValue: " + fieldValue);
    return fieldValue == '' ? true : false;
}

function ShowRequiredText(requiredTextId) {
    $("#" + requiredTextId).show();
}
function HideRequiredText(requiredTextId) {
    if(requiredTextId == null) { return true; }
    $("#" + requiredTextId).hide();
}
function ShowNotValidatedStyle(fieldId) {
    $("#" + fieldId).css("border", "3px solid red");
}
function HideNotValidatedStyle(fieldId) {
    $("#" + fieldId).css("border", "none");
}
function ShowDoesntMatchRegexTextId(doesntMatchRegexTextId) {
    $("#" + doesntMatchRegexTextId).show();
}
function HideDoesntMatchRegexTextId(doesntMatchRegexTextId) {
    $("#" + doesntMatchRegexTextId).hide();
}

function ValidateAgainstRegex(fieldId, regex = null, doesntMatchRegexTextId) {
    if(regex == null) { return true; }
    if(!MatchesRegex(fieldId, regex)) {
        ShowDoesntMatchRegexTextId(doesntMatchRegexTextId);
        ShowNotValidatedStyle(fieldId);
        return false;
    }
    return true;
}

function MatchesRegex(fieldId, regex) {
    const textToTest = $("#" + fieldId).val().toString();
    const match = textToTest.match(regex);
    console.log("Matches regex: " + match);
    return match != null;
}


function FadeThankYouInAndOut() {
    $("#form-submitted-thank-you")
        .hide()
        .fadeIn(2000)
        .delay(3000)
        .fadeOut(1000);
}
