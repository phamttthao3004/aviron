const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const paths = {
    styles: {
        src: './src/user/styles/less/style.less',
        dest: './src/user/styles/less'
    },
    styles_libs: {
        src: './src/user/styles/libs/app.less',
        dest: './src/user/styles/libs'
    }
    // scripts: {
    //   src: 'src/scripts/**/*.js',
    //   dest: 'assets/scripts/'
    // }
};
function styles_less() {
    return gulp
        .src(paths.styles.src, {
            sourcemaps: true
        })
        .pipe(less())
        .pipe(
            rename({
                basename: 'style',
                suffix: ''
            })
        )
        .pipe(cleanCSS({ debug: true }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(paths.styles.dest));
}
function styles_libs() {
    return gulp
        .src(paths.styles_libs.src, {
            sourcemaps: true
        })
        .pipe(less())
        .pipe(
            rename({
                basename: 'app',
                suffix: ''
            })
        )
        .pipe(cleanCSS({ debug: true }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.styles_libs.dest));
}
// function scripts() {
//     return gulp
//         .src(paths.scripts.src, { sourcemaps: true })
//         .pipe(babel())
//         .pipe(uglify())
//         .pipe(concat('main.min.js'))
//         .pipe(gulp.dest(paths.scripts.dest));
// }

// watch
function watch_child_less() {
    gulp.watch(['./src/user/styles/less/*.less'], styles_less);
}
function watch_less() {
    gulp.watch(paths.styles.src, styles_less);
}
const build = gulp.parallel(styles_less, styles_libs, watch_less, watch_child_less);

gulp.task(build);
gulp.task('default', build);
