var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var protractor_conf = require('./e2e-tests/protractor.conf');
var browserSync = require('browser-sync');

var config = {
  baseDir: 'app'
};


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('e2e-test', ['e2e-install'], function() {

    var bs = browserSync.create();
    bs.init({
        server: {
            baseDir: config.baseDir
        },
        open: false
    });

    gulp.src(protractor_conf.config.specs)
        .pipe(protractor({
            configFile: "e2e-tests/protractor.conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:3000']
        }))
        .on('error', function(e) {
          throw e
        })
        .on('end', function () {
          // Close browser sync server
          bs.exit();
        })

});

gulp.task('e2e-install', function() {
  var exec = require('child_process').execSync;
  exec('node_modules/protractor/bin/webdriver-manager update')
});


gulp.task('serve-dev', function() {

  /**
   * Run Browsersync with server config
   */
  browserSync({
      server: config.baseDir,
  });
});
