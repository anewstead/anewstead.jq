# anewstead.jq

[https://anewstead-jq.netlify.app/](https://anewstead-jq.netlify.app/)

Portfolio site build using standard javascript, jquery, bootstrap and LESS/CSS in a Grunt build system

## Structure

    |-- [dist]
    |   |-- output
    |
    |-- [grunt]
    |   |-- grunt code
    |
    |-- [src]
    |   |
    |   |-- site code

## Getting started

- install: node lts
- install grunt-cli: sudo npm i -g grunt-cli

* clone/download this project
* run 'npm i'

- run 'grunt' - runs build, watches code changes and auto build, starts local server (http://localhost:9000/)
- run 'grunt build' - compile src to dist
- run 'grunt min' - just minify js/css in the existing build folder (i.e. without full rebuild)
