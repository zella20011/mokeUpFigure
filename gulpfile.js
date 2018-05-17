var
	gulp 			= require('gulp'),
	browserSync  	= require('browser-sync'), // Подключаем Browser Sync
	sass			= require('gulp-sass'), //Подключаем Sass пакет,
	autoprefixer	= require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps 		= require('gulp-sourcemaps'); //Что б в режиме разработчика показывало норм стили

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('src/scss/*.scss') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass				
		.pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 9', 'ie 10'], { cascade: true })) // Создаем префиксы
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'src' // Директория для сервера - src
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/scss/*.scss', ['sass']); // Наблюдение за sass файлами в папке scss
	gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('src/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);