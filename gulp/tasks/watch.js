module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/static/less/**/*.less', $.gulp.series('less'));
		$.gulp.watch('src/static/img/*', $.gulp.series('img'));
	});
}