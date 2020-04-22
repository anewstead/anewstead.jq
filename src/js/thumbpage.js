var thumbpage = (function() {

  "use strict";

  var projects = [];
  var thumbFolder = window.anewstead.content + 'img/thumbs/';

  var init = function(projectjson) {
    projects = projectjson;
    createThumbs();
    validateFilters();

    //validate nav checkboxes on change
    $('#filters').change(function() {
      validateFilters();
    });
  };

  var createThumbs = function() {
    $('.pagewrapper').append('<div class="thumbs container">');

    var i = 0;
    for (i = 0; i < projects.length; i++) {

      var btn = document.createElement('a');
      var img = document.createElement('div');
      var icon = document.createElement('div');

      var project = projects[i];
      project.button = btn; //add thumb button ref to json data

      btn.className = 'thumb';
      // btn.addEventListener('mousemove', cursorMoveHandler);
      // btn.addEventListener('mouseout', cursorOutHandler);

      //create route url
      var url = './#/project/' + project.id;

      //add icon
      if (project.view == 'gallery') {
        //
      } else if (project.view == 'video') {
        //
      } else {
        //iframe
      }


      btn.href = url;

      img.style.backgroundImage = 'url("' + thumbFolder + project.thumb + '")'; //"url('../../" + project.thumb + "')";

      $(btn).append(img);
      $(img).append(icon);
      $('.thumbs').prepend(btn);
    }

    //add thumbs randomly
    // var mixed = shuffle(projects.slice(0));
    // for (i = 0; i < mixed.length; i++) {
    //   $('.thumbs').append(mixed[i].button);
    // }
  };

  var shuffle = function(arra1) {
    var ctr = arra1.length,
      temp,
      index;
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  // show/hide thumbs based on navigation checkboxes
  var validateFilters = function() {
    for (var i = 0; i < projects.length; i++) {
      var project = projects[i];
      if ($("#filters input[name='" + project.type + "']")[0].checked) {
        $(project.button).show();
      } else {
        $(project.button).hide();
      }
    }
  };

  // var cursorMoveHandler = function(e) {
  //   var tilt = 22;
  //   var centerX = (this.offsetWidth / 2);
  //   var centerY = (this.offsetHeight / 2);
  //
  //   var mouseX = e.pageX - this.offsetLeft;
  //   var mouseY = e.pageY - this.offsetTop;
  //   var offsetX = mouseX - centerX;
  //   var offsetY = mouseY - centerY;
  //   var decimalX = (offsetX / centerX) * tilt;
  //   var decimalY = (offsetY / centerY) * tilt;
  //
  //   var btn = this.firstElementChild;
  //   btn.style.transform = "rotateX(" + decimalY + "deg) rotateY(" + -decimalX + "deg) translateZ(0px)";
  // };
  //
  // var cursorOutHandler = function(e) {
  //   var btn = this.firstElementChild;
  //   btn.style.transform = "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg) translateZ(-100px)";
  // };

  var remove = function() {};

  // Public API
  var api = {
    init: init,
    remove: remove
  };

  return api;

})();
