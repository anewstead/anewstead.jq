var app = (function() {

  "use strict";

  window.anewstead = {};
  window.anewstead.content = 'https://anewstead-content.netlify.app/';

  var dataSrc = './data.json';
  var projects = [];

  $(document).ready(function() {
    loadData();
  });

  var loadData = function() {
    $.getJSON(dataSrc, {}).done(function(json) {
      projects = json;
      loadDataComplete();
    }).fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      $('body').append('<p>Failed to load data: ' + err + '</p>');
    });
  };

  var loadDataComplete = function() {
    // checkDevice();
    router.init(projects);

    $('#expand').click(function() {
      $(this).css('display', 'none');
    });

    $('.sitewrapper').css({display: 'block'});
  };

  // var checkDevice = function() {
  //   if (window.isMobile) {
  //     var el = $('.pagewrapper');
  //     el.append('<div class="detect-alert">You seem to be on a mobile or tablet. Some content may not mobile friendly, please view on laptop or desktop.</div>');
  //   }
  // };

  // Public API
  var api = {};

  return api;

})();
