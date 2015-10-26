var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var protractor_conf = require('./e2e-tests/protractor.conf');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('e2e-test', function() {

    gulp.src(protractor_conf.config.specs)
        .pipe(protractor({
            configFile: "e2e-tests/protractor.conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) { throw e });

});
