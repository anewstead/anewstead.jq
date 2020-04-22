module.exports = function(grunt) {

  "use strict";

    /*
    This file/module contains all configuration for the build process.
    */
    grunt.config.set('files', {

        /*
        directories
        */
        root_dir: '.',
        src_dir: './src',
        build_dir: './dist',
        tmp_dir: './_tmp',

        /*
        html template
        */
        index_html: '<%= files.src_dir %>' + '/index.html',

        /*
        file patterns that refer to our app code (the stuff in src/).
        dev note. json files treated as content (changes make watch build)
        */
        src: {
            all: [
                '<%= files.src_dir %>' + '/**/*'
            ],
            js: [
                '<%= files.src_dir %>' + '/**/*.js',
            ],
            less: [
                '<%= files.src_dir %>' + '/**/*.{less,css}'
            ],
            html: [
                '<%= files.src_dir %>' + '/**/*.{html,htm}'
            ],
            content: [
                '<%= files.root_dir %>' + '/content/**/*'
            ]
        },

        /*
        file patterns that refer to grunt code.
        we dont include Gruntfile.js as in this setup theres nothing to change there
        see watch.js for more info
        */
        grunt: {
            js: [
                'grunt/**/*.js'
            ]
        }
    });


};
