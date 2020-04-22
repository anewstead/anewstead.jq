module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.config.set('cssmin', {
        build: {
            files: [{
                expand: true,
                cwd: '<%= files.build_dir %>',
                src: ['**/*.css'],
                dest: '<%= files.build_dir %>'
            }]
        }
    });

};
