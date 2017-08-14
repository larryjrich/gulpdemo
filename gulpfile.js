// load gulp and gulp plugins
var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var connect = require('gulp-connect');

// cleanup anything that is inside the build directory
gulp.task('clear-build', function(){
    del('gulpdemo/build/*');
});

// copy files to build directory
gulp.task('html', function(){
    gulp.src('gulpdemo/*.html')
        .pipe(gulp.dest("gulpdemo/build/"));
});

gulp.task('css', function(){
    gulp.src(['!gulpdemo/css/styles.css', 'gulpdemo/css/*.css'])
        .pipe(gulp.dest("gulpdemo/build/css/"));
});

gulp.task('minify', function(){
    gulp.src('gulpdemo/css/styles.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('gulpdemo/build/css/'));
});

gulp.task('js', function(){
    gulp.src('gulpdemo/js/*.js')
        .pipe(gulp.dest("gulpdemo/build/js/"));

    gulp.src('gulpdemo/js/bob-ross/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('gulpdemo/build/js'));
});

gulp.task('fonts', function(){
    gulp.src('gulpdemo/fonts/*')
        .pipe(gulp.dest("gulpdemo/build/fonts/"));
});

gulp.task('images', function(){
    gulp.src('gulpdemo/images/*')
        .pipe(gulp.dest("gulpdemo/build/images/"));
});

gulp.task('connect', function(){
    connect.server({
        root: 'gulpdemo/build/',
        port: 8005
    });
});

// run all of our tasks.
gulp.task('default', ['clear-build', 'html', 'css', 'minify', 'js', 'fonts', 'images', 'connect']);
