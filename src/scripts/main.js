/**
 * Import npm dependencies
 * 
 */
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/**
 * Initialize JS
 * 
 */
$(document).ready(() => {

    /**
     *  AJAX Request function at submitting the form
     */
    $('#modal-skill-test form').submit(function() {

        // Comment for allow the form submitting
        event.preventDefault();
 
        // Get the form and the modal
        var $form = $(this);
        var $modal = $('#modal-skill-test');

        // Define the form data
        var $formData = {
            'name'      : $('input#modal-skill-test-name').val(),
            'surname'   : $('input#modal-skill-test-surname').val(),
            'email'     : $('input#modal-skill-test-email').val()
        };

        // Get the form data
        $.ajax({
            method: "POST",
            url: "https://reqres.in/api/users",
            data: $formData,
            success: function(response){
                console.log(response);
            }
        });
        
        // Close modal and reset input values after AJAX request
        $form[0].reset();
        $modal.modal('toggle');
    });
});
