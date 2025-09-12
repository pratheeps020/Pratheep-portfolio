// Welcome message on page load

window.addEventListener("load", function() {

  alert("Welcome to S. Pratheep's Portfolio!");

});

// Smooth scrolling for internal links (if you add a navbar)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Confirmation when email is clicked

const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {

  emailLink.addEventListener("click", function(e) {

    const confirmMsg = confirm("Do you want to send an email to Pratheep?");

    if (!confirmMsg) {

      e.preventDefault();

    }

  });

}

// Confirmation when phone number is clicked

const phoneLink = document.querySelector('a[href^="tel:"]');

if (phoneLink) {

  phoneLink.addEventListener("click", function(e) {

    const confirmMsg = confirm("Do you want to call Pratheep?");

    if (!confirmMsg) {

      e.preventDefault();

    }

  });

}