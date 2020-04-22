var aboutpage = (function() {

  "use strict";

  var s = '';

  s += '<h2>Front-end UI/UX developer</h2>';

  s += '<p>I have many years experience that started with my BA(hons) degree in digital multimedia, <br>';
  s += 'and have been working in digital industries since 2000.</p>';

  s += '<p>In brief I currently work with HTML, CSS/SCSS, JavaScript, Git, React, Redux, Gulp, node, JSON, jQuery<br>';
  s += 'but theres a lot more besides that when you delve into it!</p>';

  s += '<p>I also have technical experience of Adobe creative suite ';
  s += '(Animate (Flash), ActionScript, Photoshop, After Effects, Audition), ';
  s += 'and other creative applications such as invision and sketch.</p>';

  s += '<p>I enjoy working in teams that follow Agile methodoilgies, ';
  s += 'working closely with designers and product owners alike to to bring their vision to life.</p>';



  var init = function() {
    $('.pagewrapper').append('<div class="aboutpage container">' + s + '</div>');
  };

  var remove = function() {};

  // Public API
  var api = {
    init: init,
    remove: remove
  };

  return api;
})();
