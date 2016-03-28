var gulp = require('gulp'),
	util = require('gulp-util'),
	// jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps');

//default task
// gulp.task('default',['watch','build-js','sass']);
gulp.task('default',['watch','sass','build-js','copyHtml','copyFonts','copyImages','copyCSS',]);


//task to copy all files
gulp.task('copyHtml',function(){
	gulp.src('source/**/*.html')
		.pipe(gulp.dest('public'));
});

gulp.task('copyFonts',function(){
	gulp.src('source/fonts/*')
		.pipe(gulp.dest('public/fonts'));
});

gulp.task('copyImages',function(){
	gulp.src('source/images/*')
		.pipe(gulp.dest('public/images'));
});

gulp.task('copyCSS',function(){
	gulp.src('source/css/*.css')
		.pipe(gulp.dest('public/css'));
});

//task for sass to css
gulp.task('sass',function(){
	gulp.src('source/scss/**/*.scss')
		.pipe(sourcemaps.init())
			.pipe(sass().on('error',sass.logError))
			.pipe(util.env.type==='production'? cssnano() : util.noop())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('source/css'))
		.pipe(gulp.dest('public/css'));
});

//task for combining js files and minify them if necessary
gulp.task('build-js',function(){
	return gulp.src('source/js/**/*.js')
		.pipe(sourcemaps.init())
			// .pipe(concat('app.js'))
			.pipe(util.env.type==='production'?uglify() : util.noop())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('public/js'));
});

//task to watch the changes
gulp.task('watch',function(){
	// gulp.watch('source/javascript/**/*.js',['jshint']);
	gulp.watch('source/scss/**/*.scss',['sass']);
	gulp.watch('source/js/**/*.js',['build-js']);
	gulp.watch('source/fonts/*',['copyFonts']);
	gulp.watch('source/images/*',['copyImages']);
	gulp.watch('source/css/*.css',['copyCSS']);
	gulp.watch('source/**/*.html',['copyHtml']);
});