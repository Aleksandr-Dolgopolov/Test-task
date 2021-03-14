const gulp = require('gulp');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('source/static/js/*.js')
    .pipe(gulp.dest('build/static/js/'));
};