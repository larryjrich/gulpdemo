// load gulp and gulp plugins
var gulp = require('gulp');
var del = require('del');

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
    gulp.src('gulpdemo/css/*.css')
        .pipe(gulp.dest("gulpdemo/build/css/"));
});

gulp.task('js', function(){
    gulp.src('gulpdemo/js/**/*.js')
        .pipe(gulp.dest("gulpdemo/build/js/"));
});

gulp.task('fonts', function(){
    gulp.src('gulpdemo/fonts/*')
        .pipe(gulp.dest("gulpdemo/build/fonts/"));
});

gulp.task('images', function(){
    gulp.src('gulpdemo/images/*')
        .pipe(gulp.dest("gulpdemo/build/images/"));
});

// run all of our tasks.
gulp.task('default', ['clear-build', 'html', 'css', 'js', 'fonts', 'images']);
