const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('open');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const stylish = require('gulp-jscs-stylish');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const fs = require('fs');

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
gulp.task('default', ['compress'], function () { });