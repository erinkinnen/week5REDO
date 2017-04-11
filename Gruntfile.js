module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'client/scripts.client.js',
        dest: 'server/public/scripts/client.min.js'
      }
    },//end uglify
    copy: {
      html: {
        cwd: 'client/views/',
        src: ['index.html'],
        dest: 'server/public/views/'
      },
      css: {
        cwd: 'client/styles',
        src: ['styles.css'],
        dest: 'server/public/views/'
      },
      scripts: {
        cwd: 'client/scripts/',
        src: '[client.js]',
        dest: 'server/public/scripts/'
      },
      angular: {
        cwd: 'node_modules/angular',
        src: ['angular/*'],
        dest: 'server/public/vendors/angular/'
      },
      bootstrap: {
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/*.css', 'js/*.js', 'fonts/*.*'],
        dest: 'server/public/vendors/bootstrap'
      }
    },//end copy
    watch: {
      files: ['client/**/*.*'],
      tasks: ['uglify', 'copy']
    }//end watch
  });//end of initConfig
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};//end module.exports
