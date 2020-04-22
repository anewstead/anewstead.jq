var gallerypage = (function() {

  "use strict";

  var project = {};
  var imageFolder = window.anewstead.content + 'img/gallery/';

  var init = function(jsonnode) {
    project = jsonnode;

    $('.pagewrapper').append('<div class="gallerypage"></div>');

    createGallery();
    addInfo();

    $(window).resize(resizeHandler);
  };

  var createGallery = function(){
    $('.gallerypage').append('<div class="gallery"></div>');

    var loaded = 0;

    var checkProgress = function() {
      if (++loaded === project.view.stills.length) {
        $('.gallery').slick({autoplay: false, dots: true, infinite: false, adaptiveHeight: true});
        $('.gallery').css('visibility', 'visible');
      }
      if (loaded===1) {
        resizeHandler();
      }
    };
    var img_onload = function() {
      var slide = document.createElement('div');
      $(slide).append(this);
      $('.gallery').append(slide);
      checkProgress();
    };
    var img_onerror = function() {
      console.log('File not found: ' + this.src);
      checkProgress();
    };

    for (var i = 0; i < project.view.stills.length; i++) {
      var img = document.createElement('img');
      img.onload = img_onload;
      img.onerror = img_onerror;
      img.setAttribute('src', imageFolder + project.view.stills[i]);
    }
  };

  var addInfo = function() {
    if (project.info != '') {
      var div = '<div class="info" style="width:' + project.view.width + 'px;">';
      $('.gallerypage').append(div + project.info + '</div>');
    }
  };

  var resizeHandler = function() {
    $('.info').css('width', $('.gallery').width());
  };

  var remove = function() {
    try {
      var count = $('.gallery').slick('getSlick').slideCount;
      //console.log(count);
      for (var i = 0; i < count; i++) {
        $('.gallery').slick('slickRemove', 0);
      }
      $('.gallery').slick('unslick');
      //console.log('cleared slick');
    } catch (e) {
      //console.log('no slick');
    }
    $(window).off("resize", resizeHandler);
  };

  // Public API
  var api = {
    init: init,
    remove: remove
  };

  return api;

})();
