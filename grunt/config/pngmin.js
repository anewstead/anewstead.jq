module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-pngmin');
    /*
    pngmin:build compress pngs in the dist folder
    */
    grunt.config.set('pngmin', {
        build: {
            options: {
                ext: '.png',
                force: true,
            },
            files: [{
                expand: true,
                cwd: '<%= files.build_dir %>',
                src: ['**/*.png'],
                dest: '<%= files.build_dir %>'
            }]
        },
        /*
        pngmin:tmp compress pngs placed in _tmp/pngmin/...
        */
        tmp: {
            options: {
                ext: '.png',
                force: true,
            },
            files: [{
                expand: true,
                cwd: '<%= files.tmp_dir %>/pngmin',
                src: ['**/*.png'],
                dest: '<%= files.tmp_dir %>/pngmin/compressed'
            }]
        }
    });

};
