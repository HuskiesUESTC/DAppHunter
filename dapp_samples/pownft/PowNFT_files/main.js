
"user strict";
/*
====================== components =======================    
    1.Video Model 
    2.Timer
    3.Smooth scroll
    4.Background-paralax
    5.Header sticky
    6.Mail function
    7.Loader JS
*/


/*-----------------------1 Video modal JS ------------------*/
$(document).ready(function(){
   var $button = $('.open-video-modal'),
       $overlay = $('.video-overlay'),
       $modal = $('.video-modal'),
       $player = $('#player'),
       $close = $('#video_modal_close'),
       player,
       getVideoID = 'c96xiXI5b4c',
       buyBtn = $('.buy-on-pcs');
   
   //setup video
   var onYouTubePlayerAPIReady = function() {
      player = new YT.Player('player', {
        /*height: '390',
        width: '640',*/
        videoId: getVideoID,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
   }
   
   buyBtn.click(function(e){ 
        e.preventDefault(); 
        // var url = "https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x57F239E1e62abd0f68D7B7C0FE11Df25b3217d99";
        // window.open(url, '_blank');
    });
   
   // Open modal after click
   $button.click(function(e){
      e.preventDefault();
      if (!player) onYouTubePlayerAPIReady();
      $overlay.attr('aria-hidden', 'false');
      $modal.attr('tabindex', '0');
      $button.hide();
   });
   
   // Close modal by btn click/hit
  $close.click(function(e){
     e.preventDefault();
     closeSection();
  });
   
   // autoplay video
   function onPlayerReady(event) {
      event.target.playVideo();
   }

   // Video ends
   function onPlayerStateChange(event) {        
      if(event.data === 0) {
         closeSection();
      }
   }
   
   // Stop video
   function resetPlayer() {
      player.pauseVideo();
   };
   
   //close modal
   function closeSection(){
      $button.show();
      $overlay.attr('aria-hidden', 'true');
      $modal.attr('tabindex', '-1');
      resetPlayer();
   }
   
   //check where mouse is clicked
   $overlay.mousedown(function(e) {
      var clicked = $(e.target); // get the element clicked
      if (clicked.is('.video-modal') || clicked.parents().is('video-modal')) {
         return; // click happened within the dialog, do nothing here
      } else { // click was outside the dialog, so close it
         closeSection();
      }
   });
   
   $(document).keydown(function(e) {
      // ESCAPE key pressed
      if (e.keyCode === 27) {
         closeSection();
      }
   });
});
// video modal JS END
/*-------------------------- 2.Timer --------------------------*/
function makeTimer() {
    var endTime = new Date("July 30, 2021 07:00:00 PDT"); // Change timer date form here...!        
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (days < "10") {
        days = "0" + days;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }
    $(".days").html(days + "<span>Days</span>");
    $(".hours").html(hours + "<span>Hours</span>");
    $(".minutes").html(minutes + "<span>Minutes</span>");
    $(".seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function() {
    makeTimer();
}, 1000);
var NavBar = $('.navbar ');
/*---------Timer-end-----------*/

/*------------------------------------- 3.Smooth scroll --------------------------------*/
// redirect-btn - this class for smooth scroll of other button instead of header menu ..! 
$(document).ready(function() {
    $('.navbar a, .links a').on('click', function(event) {
        if (event.target.classList.contains('external-link')) {
          return;
        }
        event.preventDefault();
        var target = $(this.hash);
        if ($(window).width() < 992) {
            $('body,html').animate({
                'scrollTop': target.offset().top - 68
            }, 400);
        } else {
            $('body,html').animate({
                'scrollTop': target.offset().top - 80
            }, 400);
        }
        $('.navbar-collapse').removeClass('in');
        $('.navbar-toggle').addClass('collapsed');
    });
    /*-------- Smooth scroll-end -----------*/

    /*----------------------------- 4.Background-parallax ---------------------------*/
    $(window).scroll(function(e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.parallax').css('background-position-y', -(scrolled * 0.2) + 'px');
    } /*--------- Background-paralax-end ----------*/

    /*------------------------------- 5.Header sticky -------------------------*/
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = NavBar.outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (st + $(window).height() < $(document).height()) {
            NavBar.addClass('sticky-header');
            if (st == 0) {
                NavBar.removeClass('sticky-header');
            }
        }
        lastScrollTop = st;
    }
});

/*------------ Hader sticky-end  -------*/

/*--------------------------------- 6.Mail Fucntion -------------------------------*/
$(function() {
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $('#first_name').val('');
                $('#last_name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.'); /*--------- Contact submission erroe Message ---------------*/
                }
            });
    });

    var form1 = $('#subscribe_now');
    var mailMessages = $('#mail-messages');
    $(form1).submit(function(e) {
        e.preventDefault();
        var formData = $(form1).serialize();
        $.ajax({
                type: 'POST',
                url: $(form1).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(mailMessages).removeClass('error');
                $(mailMessages).addClass('success');
                $(mailMessages).text(response);
                $('#email').val('');
            })
            .fail(function(data) {
                $(mailMessages).removeClass('success');
                $(mailMessages).addClass('error');
                if (data.responseText !== '') {
                    $(mailMessages).text(data.responseText);
                } else {
                    $(mailMessages).text('Oops! An error occured and your message could not be sent.'); /*--------- Contact submission erroe Message ---------------*/
                }
            });
    });
});

/* -------------- Mail function-end ----------*/
$(document).ready(function($) {
new WOW().init();
    /*----------------------- 7.Loader JS -------------------*/
    $('.site-loader').fadeOut(600);
});

// particlesJS("particles-js", {"particles":{"number":{"value":50,"density":{"enable":true,"value_area":1000}},"color":{"value":"#4e68f0"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
