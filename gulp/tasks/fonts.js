module.exports = function() {
  $.gulp.task("fonts", function() {
      return $.gulp.src(["./src/fonts/**/*.{woff,woff2,ttf,otf,eot,svg}","./src/fonts/*.css"])
          .pipe($.gulp.dest("./dest/fonts/"))
          .pipe($.debug({"title": "fonts"}));
  });
};