var gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer");
    
    gulp.task("default", function() {
        console.log("Default Task");
    });

    gulp.task("html", function() {
        console.log("jadada");
    });

    gulp.task("css", function() {
       return gulp.src("./money/css/style.css")
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest("./money/temp/styles"));
    });

    gulp.task("watch", function(){

        watch("./money/html/index.html",function(){
            gulp.start("html");
        });
        watch("./money/css/**/*.css",function(){
            gulp.start("css");
        });

    });