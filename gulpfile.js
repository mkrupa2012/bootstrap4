const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

// Sass Task
gulp.task('compile:sass', () => {
    let plugins = [
        autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }),
        cssnano()
    ]
    return gulp.src('src/sass/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/assets/css'));
});

// Pug Task
gulp.task('compile:pug', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/'));
});

// Minify JS Task
gulp.task('minify:js', () => {
    return gulp.src('src/js/app.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/assets/js'))
});

// Copy JS Files to dist/assets/js
// gulp.task('copy-js', () => {
//     return gulp.src([
//         'node_modules'
//     ])
//     .pipe(gulp.dest('dist/assets/js'));
// });

// Copy CSS Files to dist/assets/css
// gulp.task('copy-css', () => {
//     return gulp.src([
//         'node_modules'
//     ])
//     .pipe(gulp.dest('dist/assets/css'));
// });

// Watch Tasks
gulp.task('watch:sass', () => {
    gulp.watch('src/sass/**/*.scss', ['compile:sass']);
});

gulp.task('watch:pug', () => {
    gulp.watch('src/pug/**/*.pug', ['complie:pug']);
});

gulp.task('watch:js', () => {
    gulp.watch('src/app.js', ['minify:js'])
});

// Default Task
gulp.task('default', ['watch:sass', 'watch:pug', 'minify:js']);