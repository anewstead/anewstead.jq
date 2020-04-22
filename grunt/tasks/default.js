module.exports = function(grunt) {

  "use strict";

    /*
    just type grunt
    fresh build, start localhost, launch browser, watch source
    */
    grunt.registerTask('default', [
        'jshint',
        'build',
        'connect',
        'watch'
    ]);

    /*
    compile banners from src folder into build folder
    */
    grunt.registerTask('build', [
        'clean:build',
        'processhtml',
        'concat',
        'less',
        'copy',
        'comments'
    ]);

    /*
    minify js and css in existing build
    */
    grunt.registerTask('min', [
        'cssmin',
        'uglify'
    ]);

    /*
    task for backward feature parity to 1.0.0
    */
    grunt.registerTask('build-min', [
        'build',
        'min',
        'pngmin:build'
    ]);



};
