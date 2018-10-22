var gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require ("postcss-import");

gulp.task("default", function(){
    console.log("default task");
});     

gulp.task("styles", function(){
    console.log("done");
    return gulp.src("C:\Users\Marvin\Desktop\ez\money\css\style.css")
    .pipe(gulp.dest("C:\Users\Marvin\Desktop"));
});

gulp.task("watch", function(){
    watch("./money/css/style.css", function(){
        console.log("hallo");
        gulp.start("styles");

    });
});