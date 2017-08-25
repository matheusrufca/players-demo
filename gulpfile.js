// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

var assetsDirectory = {
	'sass': 'assets/sass/',
	'css': 'assets/css/'
};

gulp.task('sass', function () {
	gulp.src(assetsDirectory.sass + '*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(assetsDirectory.css));
});

gulp.task('default', ['sass'], function () {
	gulp.watch(assetsDirectory.sass + '*.scss', ['sass']);
});