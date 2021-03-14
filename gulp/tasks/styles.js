const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const rename = require("gulp-rename");


// Работаем со стилями

module.exports = function styles() {
  return gulp.src('source/static/styles/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['last 3 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest('build/static/css'))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/static/css"))
};