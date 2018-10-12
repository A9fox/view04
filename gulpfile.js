global.$ = {
	gulp:         require('gulp'),
	less:         require('gulp-less'),
	csso:         require('gulp-csso'),
	autoprefixer: require('gulp-autoprefixer'),
	tinypng:      require('gulp-tinypng'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}

$.path.tasks.forEach(function(tasksPath) {
	require(tasksPath)();
})

$.gulp.task('default', $.gulp.series($.gulp.parallel('less', 'img'), 'watch'));