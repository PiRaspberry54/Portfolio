$('#submit-contact-form-button').on('click', function() {
    var wholeFormValid = true;
    wholeFormValid = ValidateRequiredField(firstname, firstname_required_text) && wholeFormValid;
    wholeFormValid = ValidateRequiredField(surname, surname_required_text) && wholeFormValid;
    if(wholeFormValid) {
        FadeThankYouInAndOut();
    }
});

function FadeThankYouInAndOut() {
    $("#form-submitted-thank-you")
        .hide()
        .fadeIn(2000)
        .delay(3000)
        .fadeOut(1000);
}
// Validates that the field passed is not blank,
// and shows / hides "required" text.
// and other styling as appropriate
// Returns:
// true if valid
// falsse if invalid
function ValidateRequiredField(fieldId, requiredTextId) {
    if(IsBlank(fieldId)){
        ShowRequiredTextAndStyle(fieldId, requiredTextId);
        return false;
    }
    HideRequiredTextAndStyle(fieldId, requiredTextId);
    return true;
}

function IsBlank(fieldId){
    var fieldValue = $(fieldId).val();
    return fieldValue == '' ? true : false;
}

function ShowRequiredTextAndStyle(fieldId, requiredTextId){
    $(requiredTextId).show();
    $(fieldId).css("border", "3px solid red");
}

function HideRequiredTextAndStyle(fieldId, requiredTextId){
    $(requiredTextId).hide();
    $(fieldId).css("border", "none");
}