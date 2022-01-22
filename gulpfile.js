const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass")(require('sass'));

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });

    gulp.watch("src/scss/*.scss", gulp.series(['sass']));
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('move-html', ()=>{
    return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
});