var videopage = (function() {

  "use strict";

  var project = {};
  var videoFolder = '//drive.google.com/uc?export=download&amp;id=';
  var posterFolder = window.anewstead.content + 'img/poster/';
  var vPad = 90; //for controls below video, also see css
  var initW = 0;
  var initH = 0;
  var ratio = 0;

  var init = function(jsonnode) {
    project = jsonnode;

    $('.pagewrapper').append('<div class="videopage"></div>');

    addVideo();
    addInfo();

    $('.vidplayer video').on('loadstart', resizeHandler);
    $(window).resize(resizeHandler);
  };

  var addVideo = function() {
    var s = videoFolder + project.view.href;
    var p = posterFolder + project.view.poster;

    initW = project.view.width;
    initH = project.view.height;
    ratio = initH / initW;

    var player = '<div class="vidplayer">';
    player += '<video poster="' + p + '" controls preload="none" controlsList="nodownload">';
    player += '<source src="' + s + '" type="video/mp4">';
    player += 'Your browser does not support this video.';
    player += '</video></div>';
    $('.videopage').append(player);
  };

  var addInfo = function() {
    if (project.info != '') {
      var div = '<div class="info">';
      $('.videopage').append(div + project.info + '</div>');
    }
  };

  var resizeHandler = function() {
    var pageW = $('.videopage').width();
    if (pageW > initW) {
      $('.vidplayer video').attr('width', initW);
      $('.vidplayer video').attr('height', initH + vPad);
    } else {
      $('.vidplayer video').attr('width', pageW);
      $('.vidplayer video').attr('height', (pageW * ratio) + vPad);
    }
    $('.info').css('width', $('.vidplayer video').width());
  };

  var remove = function() {
    $(window).off("resize", resizeHandler);
    $('.vidplayer video').off('loadstart', resizeHandler);
  };

  // Public API
  var api = {
    init: init,
    remove: remove
  };

  return api;

})();
