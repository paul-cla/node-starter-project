'use strict';

//var _ = require('lodash');

module.exports = function (grunt) {

    var gruntPlugins = [
        'grunt-contrib-jshint',
        'grunt-jscs',
        'grunt-mocha-test'
     ];
    gruntPlugins.forEach(function (plugin) { grunt.loadNpmTasks(plugin) });

    grunt.initConfig({
        pkg: require('./package.json')
    });

    // Load per-task config from separate files.
    grunt.loadTasks('grunt');

    grunt.registerTask('test', ['jshint', 'jscs', 'mochaTest']);
};