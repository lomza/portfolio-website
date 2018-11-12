$(document).ready(
  function() {
    // custom variablees, functions
    var scrollTime = 1000;
    var startFromLeft = true;
    var fadeLeft = "fadeInLeft";
    var fadeRight = "fadeInRight";

    function scrollToTop(id) {
      $([document.documentElement, document.body]).animate({
              scrollTop: $(id).offset().top
          }, scrollTime)
      if (startFromLeft) {
        $(id + "-insides").addClass("animated " + fadeLeft + " slow");
      } else {
        $(id + "-insides").addClass("animated " + fadeRight + " slow");
      }
      startFromLeft = !startFromLeft;
    }

    // menu functionality
     $(".burger-button").click(function() {
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });

     $(".burger-menu").click(function() {
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });

     // scroll to sections on up and down buttons
     $(document).keydown(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 40) {
          // "down"
          if ($("#publications").visible(true)) {
            scrollToTop("#contact-me");

          } else if ($("#talks_and_workshops").visible(true)) {
            scrollToTop("#publications");

          } else if ($("#technology").visible(true)) {
            scrollToTop("#talks_and_workshops");

          } else if ($("#projects").visible(true)) {
            scrollToTop("#technology");

          } else if ($("#about-me").visible(true)) {
            scrollToTop("#projects");
          }
        } else if (code == 38) {
          // "up"
          if ($("#projects").visible(true)) {
            scrollToTop("#about-me");

          } else if ($("#technology").visible(true)) {
            scrollToTop("#projects");

          } else if ($("#talks_and_workshops").visible(true)) {
            scrollToTop("#technology");

          } else if ($("#publications").visible(true)) {
            scrollToTop("#talks_and_workshops");

          } else if ($("#contact-me").visible(true)) {
            scrollToTop("#publications");
          }
        }
    });

    // SMOOTH SCROLL JQUERY CODE
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, scrollTime, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    // END SMOOTH SCROLL JQUERY CODE
  }
);
