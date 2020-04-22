module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-connect');

    /* basic web server for testing and serving single page content */
    grunt.config.set('connect', {
        options: {
            port: 9000,
            hostname: 'localhost'
        },
        build: {
            options: {
                /*livereload : 35730,*/
                // open: true,
                // base: ['<%= files.build_dir %>']
                base: ['./'],
                open: {
                 target: 'http://localhost:9000/dist/'
            },
            }
        }
    });

};
