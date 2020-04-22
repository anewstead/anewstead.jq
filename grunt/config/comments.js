module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-stripcomments');

    grunt.config.set('comments', {
        css: {
            options: {
                singleline: true,
                multiline: true,
                keepSpecialComments: true
            },
            src: ['<%= files.build_dir %>' + '**/**/*.css']
        },
        js: {
            options: {
                singleline: true,
                multiline: true,
                keepSpecialComments: true
            },
            src: ['<%= files.build_dir %>' + '**/**/*.js']
        }
    });

};
