module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.config.set('concat', {
    js: {
      options: {
        sourceMap: true,
        separator: '\n\n',
        // banner: "'use strict';\n",
        // process: function(src, filepath) {
        //   return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        // }
      },
      files: [
        {
          src: ['<%= files.src.js %>'],
          dest: '<%= files.build_dir %>' + '/main.js'
        }
      ]
    },
    less: {
      options: {
        sourceMap: true,
        separator: '\n\n',
        banner: "/*do not modify here. temporary file created by grunt process*/\n",
      },
      files: [
        {
          src: ['<%= files.src.less %>'],
          dest: '<%= files.tmp_dir %>' + '/styles.less'
        }
      ]
    }
  });

};
