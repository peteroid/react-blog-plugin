module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'src/bower_components/foundation/scss',
          'src/bower_components/foundation-icon-fonts',
          'src/bower_components/bourbon/app/assets/stylesheets'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'src/scss/app.scss'
        }
      }
    },

    // uglify: {
    //   dist: {
    //     files: {
    //       'js/pre-lib.min.js': [
    //         'src/bower_components/modernizr/modernizr.js'
    //       ],
    //       'js/lib.min.js': [
    //         'src/bower_components/jquery/dist/jquery.js',
    //         'src/bower_components/unslider/src/unslider.js',
    //         'src/bower_components/masonry/dist/masonry.pkgd.js',
    //         'src/bower_components/foundation/js/foundation.js'
    //       ],
    //       'js/app.min.js': [
    //         'src/js/app.js',
    //         'src/js/timeline.js'
    //       ],
    //       'js/blog.min.js': [
    //         'src/js/blog.js'
    //       ]
    //     }
    //   }
    // },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass']
      },

      // uglify: {
      //   files: 'src/js/**/*.js',
      //   tasks: ['uglify']
      // }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
