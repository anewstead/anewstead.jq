module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config.set('watch', {
        /*
        default watch interval of 100ms is too fast for our purposes.
        1500ms is fast enough and should keep CPU low even watching up to approx. 3000 files
        */
        options: {
            interval: 1500
        },

        /*
        watch grunt files but do not include the main Gruntfile.js
        in this seteup theres nothing to change in Gruntfile.js so we dont need to watch it.
        watching Gruntfile.js always triggers watch.reload if its changed but it also
        triggers a watch.reload event should you add file/folder to the root folder, which we dont want.
        */
        gruntfile: {
            files: ['<%= files.grunt.js %>'],
            tasks: ['grunt_js_changed'],
            options: {
                reload: true
            }
        },
        /*
        any content added/deleted
        note. watch often misses if a folder is deleted causeing ENOENT error
        error will clear next time watch is reloaded, but be aware should you notice your build isn't correctly sync'd
        */
        banner_all: {
            files: ['<%= files.src.all %>'],
            tasks: ['build'],
            options: {
                event: ['added', 'deleted'],
                reload: true
            },
        },
        /*
        any content change (not js,style,html)
        */
        banner_content: {
            files: ['<%= files.src.content %>'],
            tasks: ['build'],
            options: {
                event: ['changed'],
            },
        },
        /*
        js change
        */
        banner_js: {
            files: ['<%= files.src.js %>'],
            tasks: ['src_js_changed'],
            options: {
                event: ['changed'],
            },
        },
        /*
        styles change
        */
        banner_less: {
            files: ['<%= files.src.less %>'],
            tasks: ['src_less_changed'],
            options: {
                event: ['changed'],
            },
        },
        /*
        html change
        */
        banner_html: {
            files: ['<%= files.src.html %>'],
            tasks: ['src_html_changed'],
            options: {
                event: ['changed'],
            },
        }



    });

};
