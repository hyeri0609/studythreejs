var gulp = require('gulp'), webserver = require('gulp-webserver');
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: false,
      open: false
    }));
});

gulp.task('default', ['webserver']);
gulp.task('ws', ['webserver']);