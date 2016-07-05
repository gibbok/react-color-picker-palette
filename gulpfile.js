const gulp = require('gulp');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const gutil = require('gulp-util');
const stylish = require('gulp-jscs-stylish');
const open = require('open');

/**
 * Open examples in the browser.
 */
gulp.task('examples', function () {
    open('http://localhost:8080/examples/');
});

/**
 * Validate source code using jscs and jshint.
 */
gulp.task('checkcode', function () {
    gulp.src('.')
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function () { })
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Default action.
 */
gulp.task('default', ['examples'], function () { });