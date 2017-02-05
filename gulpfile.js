// Include the required packages
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq = require('gulp-group-css-media-queries'),
	csso = require('gulp-csso'),
	svgo = require('gulp-svgo'),
	svgstore = require('gulp-svgstore');

// Sass
gulp.task('sass', function () {
  return gulp.src('sass/main.sass')
  	.pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

// Watcher
gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch('css/main.css', ['gcmq']);
});

// Group css media queries
gulp.task('gcmq', function () {
	gulp.src('css/main.css')
	.pipe(gcmq())
	.pipe(gulp.dest('css'));
});

// CSSO
gulp.task('csso', function () {
	return gulp.src('css/main.css')
	.pipe(csso())
	.pipe(gulp.dest('css'));
});

// SVG Optimizer
gulp.task('svgo', function() {
    gulp.src('img/svg/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('img/svg'));
});

// SVG Sprites
gulp.task('svgstore', function () {
    return gulp.src('img/svg/*.svg')
        .pipe(svgstore())
		.pipe(svgo())
        .pipe(gulp.dest('img/'));
});

// Default gulp task to run
gulp.task('default', ['watch']);
