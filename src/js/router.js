var router = (function () {

  "use strict";

  var projects = [];
  var route = [];
  var page;

  var init = function (projectjson) {
    projects = projectjson;
    setPage();

    $(window).on('hashchange', function (e) {
      clearPage();
      setPage();
      showPage();
    });
  };

  var clearPage = function () {
    $('.pagewrapper').css({ display: 'none' });
    page.remove();
    $('.pagewrapper').html('');
  };

  var showPage = function () {
    $('.pagewrapper').css({ display: 'block' });
  };

  /*
  url hash array format:
  [0] null/about/project
  [1] id for project data object
  [...] bespoke as required by page template
  */
  var setPage = function () {
    var hash = location.hash.replace(/^#/, ''); //remove # if first char
    var hash2 = hash.replace(/^\//, ''); //remove / if first char
    route = hash2.split('/');

    switch (route[0]) {
    case 'about':
      page = aboutpage;
      aboutpage.init();
      setTitle(false);
      setNav(false);
      break;

    case 'project':
      showProject();
      break;

    default: //home
      page = thumbpage;
      thumbpage.init(projects);
      setNav(true);
    }
    trackPage(hash);
    window.scrollTo(0, 0);
  };

  var trackPage = function (hash) {
    // window.gtag('set', 'page', hash);
    // window.gtag('send', 'pageview');
    // var folder = location.pathname.split('/')[1];
    var pagetitle = route[0];
    if (pagetitle == 'project') {
      pagetitle = projects[route[1]].brand + ' ' + projects[route[1]].project;
    }
    if (location.hostname == 'localhost') {
      console.log('track: ' + hash);
    } else {
      gtag('config', 'UA-8077707-2', {
        'page_title': pagetitle,
        'page_path': hash
      });
    }
  };

  var showProject = function () {
    var project = currentProject();
    switch (project.view.type) {
    case 'gallery':
      page = gallerypage;
      gallerypage.init(project);
      setTitle(true);
      setNav(false);
      break;

    case 'video':
      page = videopage;
      videopage.init(project);
      setTitle(true);
      setNav(false);
      break;

    case 'iframe':
      page = sitepage;
      sitepage.init(project);
      setTitle(true);
      setNav(false);
      break;
      //no default!
    }
  };

  //find the current project node in json data
  var currentProject = function () {
    return projects.find(function (obj) {
      return obj.id == route[1];
    });
  };

  var setTitle = function (isProject) {
    if (isProject) {
      $('#nav-client').html(projects[route[1]].client);
      $('#nav-project').html(projects[route[1]].brand + ' ' + projects[route[1]].project);
    } else {
      $('#nav-client').html('');
      $('#nav-project').html('');
    }
  };

  var setNav = function (isHome) {
    if (isHome) {
      $('#nav1').css({ display: 'block' });
      $('#nav2').css({ display: 'none' });
    } else {
      $('#nav1').css({ display: 'none' });
      $('#nav2').css({ display: 'block' });
    }
  };

  // Public API
  var api = {
    init: init,
    route: route
  };

  return api;

})();
