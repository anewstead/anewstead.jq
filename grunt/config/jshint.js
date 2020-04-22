module.exports = function(grunt) {

  "use strict";

    grunt.loadNpmTasks('grunt-contrib-jshint');

    /*
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */
    grunt.config.set('jshint', {
        grunt: [
            '<%= files.grunt.js %>'
        ],
        src: [
            '<%= files.src.js %>'
        ],
        /* test: [
           '<%= files.app.jsunit %>'
         ],*/
        options: {
            curly: true,
            immed: true,
            newcap: true,
            noarg: true,
            sub: true,
            boss: true,
            eqnull: true,
            strict: true
        }
    });

};
