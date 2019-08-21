var gulp = require('gulp'),
    fileInclude = require('gulp-file-include'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

// 打包所有CSS
gulp.task('concat', function () {
    return gulp.src('./assets/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});

// 壓縮CSS
gulp.task('minify-css', gulp.series('concat', function () {
    return gulp.src('./build/css/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./dist/'));
}));

// 壓縮JS
gulp.task('uglify', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            // path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', gulp.series('minify-css', 'uglify', function () {
    //src和dest的路径都是以gulpfile.js为基寻找的
    gulp.src('./*.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'))
}));