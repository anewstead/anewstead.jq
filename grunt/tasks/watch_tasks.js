module.exports = function(grunt) {

  "use strict";

    /*
    expected use via watch
    */
    grunt.registerTask('grunt_js_changed', [
        'jshint:grunt',
        'build'
    ]);

    grunt.registerTask('src_js_changed', [
        'jshint:src',
        'concat:js',
        'comments:js'
    ]);

    grunt.registerTask('src_less_changed', [
        'concat:less',
        'less',
        'comments:css'
    ]);

    grunt.registerTask('src_html_changed', [
        'processhtml'
    ]);




};
