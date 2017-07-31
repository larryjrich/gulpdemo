var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('html', function(){
    gulp.src('gulpdemo/*.html');
});

gulp.task('css', function(){
    gulp.src('gulpdemo/css/*.css');
});

gulp.task('js', function(){
    gulp.src('gulpdemo/js/*.js');
});

gulp.task('fonts', function(){
    gulp.src('gulpdemo/*');
});

gulp.task('webserver', function(){
    gulp.src('gulpdemo')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            fallback: 'index.html',
            port: 8050,
            path: 'gulpdemo/html/'
        }));
});

gulp.task('default', ['html', 'css', 'js', 'fonts', 'webserver']);
