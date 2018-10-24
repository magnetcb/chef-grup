$(function() {
    // Get the form.
    var contactForm = $('#contact-form');

    // Get the messages div.
    var contactFormMessages = $('#contact-form-messages');

    // Set up an event listener for the contact form.
    contactForm.submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        
        // Get the language of body
        var bodyLanguage = $("body").attr("class");
    
        var contactFormData = contactForm.serialize();
        
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: contactForm.attr('action'),
            data: contactFormData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            contactFormMessages.removeClass('error');
            contactFormMessages.addClass('success');
            
            // Set the message text.
            if(bodyLanguage == "tr") {
                contactFormMessages.text("Tesekkurler! Mesajiniz alindi.");   
            } else {
                contactFormMessages.text("Thank You! Your message has been sent.");
            }
        
            // Clear the form.
            $('#name-field').val('');
            $('#surname-field').val('');
            $('#email-field').val('');
            $('#phone-field').val('');
            $('#message-field').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            contactFormMessages.removeClass('success');
            contactFormMessages.addClass('error');
        
            // Set the message text.
            if (data.responseText !== '') {
                contactFormMessages.text(data.responseText);
            } else {
                // Set the message text.
                if(bodyLanguage == "tr") {
                    contactFormMessages.text('Bir hata olustu. Lutfen tekrar deneyin.');   
                } else {
                    contactFormMessages.text('Oops! An error occured and your message could not be sent.');
                }
            }
        });
    });
});