function sendMail(contactForm) {
    emailjs.send("service_olkn7y9","template_6vnplkb", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.sendlocation.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Thank you for messaging. Your message has been sucessfully sent!');
        },
        function(error) {
            console.log("FAILED", error);
            alert("Failed. Please check your connection and try again")
        }
    )
    
    return false;  // To block from loading a new page
}


