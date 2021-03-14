const gulp = require('gulp');

module.exports = function html() {
  return gulp.src('source/**.html')
    .pipe(gulp.dest('build'))
};