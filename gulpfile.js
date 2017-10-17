var gulp = require('gulp'), 
gutil = require('gulp-util'),
mocha = require('gulp-mocha'),
webserver = require('gulp-webserver');

gulp.task('watch', function() {
  gulp.watch(['js/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
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

gulp.task('tws', ['mocha','webserver']);

gulp.task('ws', ['watch','webserver']);

