var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		jade         = require('gulp-jade'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs'),
		spritesmith  = require('gulp.spritesmith');

gulp.task('browser-sync', ['styles', 'scripts', 'jade'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('dev/sass/**/*\.+(sass|scss|css)')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(minifycss())
	.pipe(gulp.dest('app/assets/css'))
	.pipe(browserSync.stream());
});

gulp.task('jade', function() {
	return gulp.src('dev/jade/pages/*.jade')
	.pipe(jade({
      pretty: true
    }))
	.pipe(gulp.dest('app'));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./dev/sprite/*.*')
            .pipe(spritesmith({
                imgName: '../img/sprite.png',
                cssName: '_sprite.sass',
                cssFormat: 'sass',
                algorithm: 'top-down',
                padding: 10
            }));

    spriteData.img.pipe(gulp.dest('./app/assets/img/'));
    spriteData.css.pipe(gulp.dest('./dev/sass/'));
});

gulp.task('scripts', function() {
	return gulp.src([
			'./app/assets/vendor/jquery/dist/jquery.min.js',
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/assets/js/'));
});

gulp.task('watch', function () {
	gulp.watch('dev/jade/**/*.jade', ['jade']);
	gulp.watch('dev/sass/**/*\.+(sass|scss|css)', ['styles']);
	gulp.watch('dev/sprite/**/*.*', ['sprite']);
	gulp.watch('dev/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/images/sprite.png').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['jade', 'sprite', 'styles', 'scripts', 'browser-sync', 'watch']);
