module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.watch(["./src/views/**/*.pug", "!./src/views/blocks/*.pug"], $.gulp.series("pug"));
            $.watch("./src/styles/**/main.scss", $.gulp.series("styles"));
            $.watch(["./src/img/**/*.{jpg,jpeg,png,gif,svg}", "!./src/img/icons/svg/*.svg"], $.gulp.series("images"));
            $.watch("./src/js/**/*.js", $.gulp.series("scripts"));
            res();
        });
    });
};