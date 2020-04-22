module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.config.set('uglify', {
        build: {
            files: [{
                expand: true,
                cwd: '<%= files.build_dir %>',
                src: ['**/*.js'],
                dest: '<%= files.build_dir %>'
            }]
        }
    });

};
