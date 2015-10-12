
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
    concat: {
      options: {
        process: function(src, filepath) {
              return '// ' + filepath + '\n' + src;
            },
        stripBanners: true,
             banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
               '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/built.js',
      },
    },
    watch: {
    

      // run tests on changes
      scripts: { 
        files: ['src/**/*.js', 'tests/**/*.js'], 
        tasks: ['concat','mocha'] 
      } 
    }

  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['mocha']);
};