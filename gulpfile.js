var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var prefixer = require('gulp-autoprefixer');
//var reload = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest('build'));
        //.pipe(reload({stream: true}));
        //.pipe(browserSync.stream());
        //.pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
        gulp.watch('src/styles/*.scss', gulp.series('sass'));
        gulp.watch('src/**/*').on('change', browserSync.reload);
        gulp.watch('build/**/*.html').on('change', browserSync.reload);
});



