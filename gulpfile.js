const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass")(require('sass'));
const ghPages = require("gulp-gh-pages");

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

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages());
});

gulp.task('move-html', ()=>{
    return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
});