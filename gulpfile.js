var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');
gulp.task('build', async function (done) {
  gulp.series('open-app')
  done();
});

var Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/argon-dashboard.scss',
  SCSS: './assets/scss/**/**'
};

gulp.task('compile-scss', async function () {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
});

gulp.task('watch', async function () {
  gulp.watch(Paths.SCSS, gulp.series('compile-scss'));
});

gulp.task('open', async function () {
  gulp.src('pages/dashboard.html')
    .pipe(open());
});

gulp.task('open-app', async function (done) {
  gulp.parallel('open', 'watch')
  done();
});