module.exports = function(grunt) {

    /*
    load js modules
    */
    var path = require('path');

    var config = './grunt/config/*.js';
    var task = './grunt/tasks/*.js';

    var files = [config, task];

    grunt.file.expand(files).forEach(function(item) {
        // console.log(item);
        require(path.resolve(item))(grunt);
    });

};
