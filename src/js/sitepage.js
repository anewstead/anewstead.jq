var sitepage = (function() {

  "use strict";

  var project = {};

  var init = function(jsonnode) {
    project = jsonnode;

    $('.pagewrapper').append('<div class="sitepage"></div>');

    //check ad blocker
    if (project.type == 'banner') {
      if (window.hasAdBlock) {
        $('.pagewrapper').prepend('<div class="detect-alert">You seem to have an Ad Blocker. <br/>Please disable if content does not appear.</div>');
      }
    }

    var s = window.anewstead.content + project.view.href;
    var w = project.view.width;
    var h = project.view.height;
    $('.sitepage').append('<iframe src="' + s + '" width="' + w + '" height="' + h + '"class="siteframe"></iframe>');

    addInfo();
  };

  var addInfo = function() {
    if (project.info != '') {
      var div = '<div class="info" style="width:' + project.view.width + 'px;">';
      $('.sitepage').append(div + project.info + '</div>');
    }
  };

  var remove = function() {};

  // Public API
  var api = {
    init: init,
    remove: remove
  };

  return api;

})();
