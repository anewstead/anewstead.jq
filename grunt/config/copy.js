module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.config.set('copy', {
    contents:{
      files: [
        {
          cwd:'<%= files.src_dir %>',
          expand: true,
          flatten: false,
          filter: 'isFile',
          src: [
            '**',
            '!js/**/*',
            '!styles/*',
          ],
          dest: '<%= files.build_dir %>'
        }
      ]
    }
  });

};
