// HTML document is loaded. DOM is ready.
$(function() {

  // Parallax
  $('.intro-section').parallax({
  imageSrc: 'img/2-2.jpg',
  speed: 0.2
  });

  $('.services-section').parallax({
  imageSrc: 'img/2-3.jpg',
  speed: 0.2
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
});
