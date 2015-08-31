module.exports = function(grunt) {
  grunt.config('jshint', {
    app: {
      options: {jshintrc: '.jshintrc'},
      src: ['*.js'],
    },
  });
};