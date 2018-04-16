var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("scripts/*.js", ['js']);
    gulp.watch("css/*.css").on("change", browserSync.reload);
});


gulp.task('scripts', function() {
  return gulp.src(['./scripts/jquery.min.js', './scripts/jquery.fancybox.js', './scripts/jquery.validate.min.js', './scripts/main.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('js', ['scripts'] , function () {
    return gulp.src('js/all.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);