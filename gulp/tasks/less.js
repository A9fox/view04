module.exports = function() {
	$.gulp.task('less', function() {
		return $.gulp.src('src/static/less/*.less')
			.pipe($.less())
			.pipe($.autoprefixer({
				browsers: ['last 10 versions'],
			}))
			.pipe($.csso())
			.pipe($.gulp.dest('build/static/css/'));
	});
};