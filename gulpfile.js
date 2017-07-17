/**
 * Created by banYing on 2017/7/17 0017.
 */
var gulp = require('gulp'),
    fileInclude = require('gulp-file-include');

gulp.task('creadHtml', function () {

    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['page/**/*.html','!page/include/**.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/aa'));


})
