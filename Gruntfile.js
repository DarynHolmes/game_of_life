
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
        tasks: ['jshint', 'concat', 'uglify', 'mocha'] 
      } 
    },
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js']
    },

    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
            'dist/built.min.js': ['dist/built.js']
          }
        }
    }


  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['mocha']);
};