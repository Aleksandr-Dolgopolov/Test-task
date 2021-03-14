const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');
const dbserver = require('./gulp/tasks/dbserver');
const html = require('./gulp/tasks/html');

const dev = gulp.parallel(html, script, styles, imageMinify, spriteSVG, spritePNG, fonts);

exports.default = gulp.series(
  clean,
  dbserver,
  dev,
  serve
);