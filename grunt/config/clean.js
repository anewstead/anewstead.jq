module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-clean');

    /* remove build folders */
    grunt.config.set('clean', {
        build: [
            '<%= files.build_dir %>'
        ]
    });

};
