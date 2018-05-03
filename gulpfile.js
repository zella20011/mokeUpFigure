var
	gulp 			= require("gulp"),
	livereload 		= require("gulp-livereload"),
	sass			= require("gulp-sass"),
	autoprefixer	= require("gulp-autoprefixer"),
	cleancss		= require("gulp-clean-css"),
	rename			= require("gulp-rename");

gulp.task("reload-html", function() {
	gulp.src('./src/html/*.html')
	.pipe(livereload());
});

gulp.task("reload-css", function() {
	gulp.src('./src/css/less/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./src/css/'))
	.pipe(cleancss({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./src/css/'))
	.pipe(livereload());
});

gulp.task("default", function() {
	livereload.listen();
	gulp.watch('./src/html/*.html', ['reload-html']);
	gulp.watch('./src/css/less/*.scss', ['reload-css']);
});