const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {
  // Генерируем спрайт
  const spriteData = gulp.src('source/static/images/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite/sprite.png',
    cssName: 'sprite.less',
    padding: 5,
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  // Оптимизируем спрайт
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('build/static/images/sprite/'));

  // Собираем LESS
  const cssStream = spriteData.css
    .pipe(gulp.dest('source/static/styles/helpers/'));

  return imgStream;

};