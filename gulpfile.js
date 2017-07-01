const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');


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
    .pipe(eslint.format())
    // Breack on failure to be super strict
    .pipe(eslint.failOnError());
});

/**
 * TEST and Coverage
 */
gulp.task('pre-test', () => {
  return gulp.src(sources)
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});
gulp.task('coverage', ['pre-test'], () => {
  return gulp.src(testSources)
    .pipe(mocha({
      timeout: 10000,
    }))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 90,
      },
    }));
});

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
