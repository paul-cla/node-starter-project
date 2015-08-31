module.exports = function(grunt) {
  grunt.config('mochaTest', {
    test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test_results.txt',
                    quiet: false,
                    clearRequireCache: true,
                    timeout: 5000
                },
                src: ['tests/*.js']
            }
  });
};
