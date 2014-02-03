module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    sass: {                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          'main.css': 'main.scss',       // 'destination': 'source'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // Default task.
  grunt.registerTask('default', ['sass']);

};
