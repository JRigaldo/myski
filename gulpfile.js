const gulp = require('gulp');
// const sass = require('gulp-sass');
// const changed = require('gulp-changed');
// const del = require('del');
const browserSync = require('browser-sync').create();

// const BASE = 'http://localhost:8888/';
// const SOURCE = './assets/sass/**/*.scss';
// const CSS_DEST = './';

// gulp.task('styles', function(){
//     return gulp.src(SOURCE)
//         .pipe(changed(CSS_DEST))
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(CSS_DEST))
//         .pipe(browserSync.stream());
// });

// gulp.task('clean', () => {
//     return del([
//         CSS_DEST + 'main.css',
//     ]);
// });

// gulp.task('default', gulp.series(['clean', 'styles']));

// gulp.task('watch', () => {
//     browserSync.init({
//         proxy: BASE
//     });
//     gulp.watch(SOURCE);
// });



// function style(){
//     return gulp.src(SOURCE)
//         .pipe(changed(CSS_DEST))
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(CSS_DEST))
//         .pipe(browserSync.stream());

// }

function watch(){
    browserSync.init({
        proxy: BASE
    });

    gulp.watch('./assets/sass/**/*.scss');
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// exports.style = style;
// exports.watch = watch;
