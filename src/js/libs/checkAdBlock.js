/*
checks if adblocker installed/enabled
creates element with classname 'adsbox' which adbloker will block setting offsetHeight===0
IMPORTANT: only works after page ready
*/
var checkAdBlock = (function() {

  "use strict";

  $(document).ready(function() {
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    window.hasAdBlock = (test.offsetHeight===0);
    // console.log('cab.detected-' + hasAdBlock + ' :' + test.offsetHeight);
    test.remove();
  });

})();
