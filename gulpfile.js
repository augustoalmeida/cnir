var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', function() {
	browserSync.init({
		server: '.'
	});
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass','serve','watch']);