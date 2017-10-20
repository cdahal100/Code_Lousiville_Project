// HTML document is loaded. DOM is ready.
$(function() {
  // Parallax
  $('.intro-section').parallax({
  imageSrc: 'img/2-2.jpg',
  speed: 0.2
  });
  $('.teams-section').parallax({
  imageSrc: 'img/2-3.jpg',
  speed: 0.2
  });
  $('.services-section').parallax({
  imageSrc: 'img/services.jpg',
  speed: 0.2
  });
  $('.contact-section').parallax({
  imageSrc: 'img/2-4.jpg',
  speed: 0.2
  });
  // jQuery Scroll Up / Back To Top Image
  $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
    scrollDistance: 300,         // Distance from top/bottom before showing element (px)
    scrollFrom: 'top',           // 'top' or 'bottom'
    scrollSpeed: 1000,            // Speed back to top (ms)
    easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
    animation: 'fade',           // Fade, slide, none
    animationSpeed: 300,         // Animation speed (ms)
    scrollText: '', // Text for element, can contain HTML
    scrollImg: true            // Set true to use image
    });
  // ScrollUp Placement
  $( window ).on( 'scroll', function() {

    // If the height of the document less the height of the document is the same as the
    // distance the window has scrolled from the top...
    if ( $( document ).height() - $( window ).height() === $( window ).scrollTop() ) {
        // Adjust the scrollUp image so that it's a few pixels above the footer
        $('#scrollUp').css( 'bottom', '80px' );
    } else {
        // Otherwise, leave set it to its default value.
        $('#scrollUp').css( 'bottom', '30px' );
    }
  });
  //Single Page Navigation
  $('.single-page-nav').singlePageNav({
    offset: $('.single-page-nav').outerHeight(),
    speed: 2000,
    filter: ':not(.external)',
    updateHash: true
  });
  $('.navbar-toggle').click(function(){
    $('.single-page-nav').toggleClass('show');
  });
  $('.single-page-nav a').click(function(){
    $('.single-page-nav').removeClass('show');
  });

  //Lightbox Gallary feature
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");
// Hide the lightbox
    $lightbox.hide();
// Add image and caption to lightbox
  $lightbox
    .append($img)
    .append($caption);
// Add lighbox to document
  $('body').append($lightbox);
  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();
// Get image link and description
    var src = $(this).attr("src");
    var cap = $(this).attr("alt");
// Add data to lighbox
    $img.attr('src', src);
    $caption.text(cap);
// Show lightbox
    $lightbox.fadeIn('fast');
// Exit the lightbox when the div is clicked anywhere
    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });
});
