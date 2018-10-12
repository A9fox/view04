module.exports = function() {
	$.gulp.task('img', function() {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
			.pipe($.tinypng('IxXs9B4RgWkeUiZdwP2dMIwPt0huftPX'))
			.pipe($.gulp.dest('build/static/img/'));
	});
};