// load gulp and gulp plugins
var gulp = require('gulp');
var del = require('del');

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
    return gulp.src('gulpdemo/css/*.css')
        .pipe(gulp.dest("gulpdemo/build/css/"));
});

gulp.task('js', function(){
    return gulp.src('gulpdemo/js/**/*.js')
        .pipe(gulp.dest("gulpdemo/build/js/"));
});

gulp.task('fonts', function(){
    return gulp.src('gulpdemo/fonts/*')
        .pipe(gulp.dest("gulpdemo/build/fonts/"));
});

gulp.task('images', function(){
    return gulp.src('gulpdemo/images/*')
        .pipe(gulp.dest("gulpdemo/build/images/"));
});

// run all of our tasks.
gulp.task('default', ['clear-build', 'html', 'css', 'js', 'fonts', 'images']);
