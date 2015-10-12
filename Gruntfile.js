
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Mocha
    mocha: {
      all: {
        src: ['tests/testrunner.html'],
      },
      options: {
        run: true
      }
    },
    watch: {
    

      // run tests on changes
      scripts: { 
        files: ['src/**/*.js', 'tests/**/*.js'], 
        tasks: ['mocha'] 
      } 
    }

  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['mocha']);
};