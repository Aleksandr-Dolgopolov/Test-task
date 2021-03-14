const gulp = require('gulp');

// Копируем все шрифты из папки dev в build

module.exports = function fonts() {
  return gulp.src('source/static/fonts/**/*.*')
    .pipe(gulp.dest('build/static/fonts'))
};