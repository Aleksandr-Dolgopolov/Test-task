var gulp = require("gulp");
var jsonServer = require("gulp-json-srv");

var server = jsonServer.create();

module.exports = function dbserver() {
  return gulp.src('source/static/db/db.json')
    .pipe(server.pipe());
};