// load gulp and gulp plugins
var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');

// cleanup anything that is inside the build directory
gulp.task('clear-build', function(){
    return del('gulpdemo/build/*');
});

// copy files to build directory
gulp.task('html', function(){
    return gulp.src('gulpdemo/*.html')
        .pipe(gulp.dest("gulpdemo/build/"));
});

gulp.task('css', function(){
    return gulp.src(['!gulpdemo/css/styles.css', 'gulpdemo/css/*.css'])
        .pipe(gulp.dest("gulpdemo/build/css/"));
});

gulp.task('minify', function(){
    return gulp.src('gulpdemo/css/styles.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('gulpdemo/build/css/'));
});

gulp.task('js', function(){
    return gulp.src('gulpdemo/js/*.js')
        .pipe(gulp.dest("gulpdemo/build/js/"));
});

gulp.task('uglify', function(){
    return gulp.src('gulpdemo/js/bob-ross/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('gulpdemo/build/js'));
});

gulp.task('fonts', function(){
    return gulp.src('gulpdemo/fonts/*')
        .pipe(gulp.dest("gulpdemo/build/fonts/"));
});

gulp.task('images', function(){
    return gulp.src('gulpdemo/images/*')
        .pipe(gulp.dest("gulpdemo/build/images/"));
});

gulp.task('connect', function(){
    return connect.server({
        root: 'gulpdemo/build/',
        port: 8005,
        livereload: true
    });
});

// run all of our tasks.
gulp.task('default', function(callback) {
    return runSequence(
        ['clear-build'],
        ['html', 'css', 'js', 'fonts', 'images'],
        ['minify', 'uglify'],
        ['connect'],
        callback
    );
});
