/*
Validation functions

*/

BindValidationToSubmitButton();

function BindValidationToSubmitButton() {
    $('#submit-contact-form-button').on('click', function() {
        var wholeFormValid = true;
        wholeFormValid = ValidateRequiredField('firstname', 'firstname-required-text') && wholeFormValid;
        wholeFormValid = ValidateRequiredField('surname', 'surname-required-text') && wholeFormValid;
        wholeFormValid = ValidateRequiredField('email', 'email-required-text') && wholeFormValid;
        wholeFormValid = ValidateRequiredField('subject', 'subject-required-text') && wholeFormValid;
        wholeFormValid = ValidateRequiredField('message', 'message-required-text') && wholeFormValid;
        
        if(wholeFormValid) {
            FadeThankYouInAndOut();
        }
    });
}

/* Validates that the field passed is not blank.
    Shows / hides "required" text
    and applies / removes other styling as appropriate.
    Inputs:
        fieldId         The ID of the element to validate
        requiredTextId  The ID of the element to show if invalid / hide if valid 
    Returns:
        true  if   valid
        false if invalid
*/

function ValidateRequiredField(fieldId, requiredTextId, regEx) {
    console.log("fieldId: " + fieldId);
    if(IsBlank(fieldId) || !ConformsToRegex(fieldId)) {
        ShowRequiredTextAndStyle(fieldId, requiredTextId);
        return false;
    }

    HideRequiredTextAndStyle(fieldId, requiredTextId);
    return true;
}

function IsBlank(fieldId) {
    var fieldValue = $("#" + fieldId).val();
    console.log("fieldValue: " + fieldValue);
    return fieldValue == '' ? true : false;
}

function ConformsToRegex(fieldId) {
    return true;
}

function ShowRequiredTextAndStyle(fieldId, requiredTextId){
    $("#" + requiredTextId).show();
    $("#" + fieldId).css("border", "3px solid red");
}

function HideRequiredTextAndStyle(fieldId, requiredTextId){
    $("#" + requiredTextId).hide();
    $("#" + fieldId).css("border", "none");
}

function FadeThankYouInAndOut() {
    $("#form-submitted-thank-you")
        .hide()
        .fadeIn(2000)
        .delay(3000)
        .fadeOut(1000);
}
