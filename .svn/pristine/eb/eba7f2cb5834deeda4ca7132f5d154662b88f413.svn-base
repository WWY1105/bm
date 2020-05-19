var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
//������ˢ��
var livereload = require('gulp-livereload');
var ngmin = require('gulp-ngmin');
var stripDebug = require('gulp-strip-debug');
//gulp.task('minify', function () {
//    return gulp.src(['js/appService.js', 'js/app.js']) //ע�⣬�˴�������ˣ�����˳���µ�����
//        .pipe(ngAnnotate())
//        .pipe(ngmin({dynamic: false}))
//        .pipe(stripDebug())
//        .pipe(uglify({outSourceMap: false}))
//        .pipe(concat('all.min.js'))
//        .pipe(gulp.dest('js/'))
//});
// "public/js/indexctr.js", "public/js/config.js",'public/js/build/statistics.js',"public/js/config.js"
gulp.task('js', function () {
    // �����Ĭ�ϵ�������������
    gulp.src(["public/js/indexctr.js","public/js/adminctr.js", "public/js/keeperctr.js","public/js/config.js"])
        
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(uglify({outSourceMap: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("public/js/dest"))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })

});
gulp.task('build', function () {
    // �����Ĭ�ϵ�������������
    gulp.src(['public/js/build/statistics.js'])
        //.pipe(ngAnnotate())
        //.pipe(ngmin({dynamic: false}))
        .pipe(uglify({outSourceMap: false}))
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("public/js/dest"));

});
gulp.task('one', function () {
    // �����Ĭ�ϵ�������������
    gulp.src(["public/js/qrcode.js"])
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(uglify({outSourceMap: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("public/js/"));

});
gulp.task('chart', function () {
    return gulp.src(['public/highcharts/highcharts.js', 'public/highcharts/highcharts-ng.js']) //ע�⣬�˴�������ˣ�����˳���µ�����
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(stripDebug())
        .pipe(uglify({outSourceMap: false}))
        .pipe(concat('concat.min.js'))
        .pipe(gulp.dest('public/highcharts/'))
});
gulp.task("watch", function () {
    livereload.listen();
    gulp.watch("list.html", []);
    //gulp.watch("public/js/build/*.js", ["js"]);
});
//����livereload����
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});


/*
 * ���������
 * 2016��8��16
 *
 * */


gulp.task("watch", function () {
    //gulp.watch("./mweb/js/mweb.js",["mini-mweb-js"]);
    gulp.watch("public/js/adminctr.js",["js"]);
    gulp.watch("public/js/keeperctr.js",["js"]);
    gulp.watch("public/js/config.js",["js"]);
    //gulp.watch("./mweb/sui_assets/css/sm.css",["mini-sm-css"]);
    //gulp.watch("./mweb/assets/css/common.css",["mini-assets-css"]);
    //gulp.watch("./mweb/css/common.css",["mini-mweb-css"]);
});
