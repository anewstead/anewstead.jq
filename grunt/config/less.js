module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-contrib-less');

  var LessPluginAutoPrefix = require('less-plugin-autoprefix');
  var autoPrefixPlugin = new LessPluginAutoPrefix({
      browsers: ["last 5 versions"]
  });


  grunt.config.set('less', {
      main:{
        options: {
            compress: false,
            modifyVars: {
                img_path: '""',
            },
            plugins: [
                autoPrefixPlugin
            ]
        },
        files: [{
            src: [
                '<%= files.tmp_dir %>' + '/styles.less'
            ],
            dest: '<%= files.build_dir %>' + '/styles.css'
        }]
      }
  });




};
