'use-strict'

let gulp = require("gulp");
let mocha = require("gulp-mocha");
let gUtil = require("gulp-util");


gulp.task("runMocha", () => {
    return gulp.src(["test/*.js"], {read: false})
        .pipe(mocha({
            reporter: "list"
        }))
        .on("error", gUtil.log);
});

gulp.task("watchMocha", () => {
    gulp.watch(["./**/*.js", "test/**/*.js"], gulp.series("runMocha"));
});

gulp.task("default", gulp.parallel("runMocha", "watchMocha"))
