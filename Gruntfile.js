module.exports = function(grunt) {

  // プロジェクト設定
  grunt.initConfig({
    // タスク設定
    sass: {                              // タスク
      dist: {                            // ターゲット
        files: {                         // ファイルのディレクトリ
          'main.css': 'main.scss',       // 'アウトプット': 'インプット'
        }
      }
    }
  });

  // タスクに必要なプラグインを読み込む
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // デフォルトタスク
  grunt.registerTask('default', ['sass']);

};
