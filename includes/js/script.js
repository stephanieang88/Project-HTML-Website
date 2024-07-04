/*

My Custom JS
============

Author:    Stephanie Ang
Completed: 20 Aug 2017
Notes:     Assignment 3

*/


/* create variables */
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector (".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");
var fromEmail = document.querySelector(".feedback-email");
var fromPhone = document.querySelector(".feedback-phone");
var emailField = document.querySelector("#emailinput");
var phoneField = document.querySelector("#phoneinput");


/* add text to preview section */
function completePreview () {
    fromValue.textContent = nameField.value;
    feedbackValue.textContent = feedbackField.value;
    fromEmail.textContent = emailField.value;
    fromPhone.textContent = phoneField.value;
    feedbackPreview.className = "feedback-preview show"
    if (form.checkValidity () === true) {
        submitButton.className = "submitbutton show";
    }
}


/* create event listener for changes to form */
form.addEventListener ("change", completePreview, false);
