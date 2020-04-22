module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-processhtml');

    grunt.config.set('processhtml', {
        indexpage: {
            options: {
                data: {
                }
            },
            files: [{
                src: '<%= files.index_html %>',
                dest: '<%= files.build_dir %>' + '/index.html'
            }]
        }
    });

};
