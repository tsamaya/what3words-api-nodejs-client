const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

/* eslint "arrow-body-style": ["error", "always"] */

/**
 * sources
 * @type {Array}
 */
const sources = ['index.js', 'lib/**/*.js', 'test/**/*.js'];
const testSources = ['test/environement.spec.js', 'test/**/*.spec.js'];
/**
 * LINTER
 */
gulp.task('lint', () => {
  // lint sources
  return gulp
    .src(sources)
    .pipe(eslint())
    .pipe(eslint.format()) // Brick on failure to be super strict
    .pipe(eslint.failOnError());
});

/**
 * TEST
 */
gulp.task('mocha', () => {
  return gulp
    .src(testSources, {
      read: false,
    })
    .pipe(mocha({
      reporter: 'spec',
      timeout: 10000,
    }));
});
gulp.task('test', ['lint', 'mocha']);

/**
 * WATCH
 */
gulp.task('watch', () => {
  gulp.watch(sources, ['test']);
});

/**
 * DEFAULT TASK
 */
gulp.task('default', ['test', 'watch']);
