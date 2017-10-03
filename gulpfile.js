const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const stylish = require('gulp-jscs-stylish');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const wiredep = require('gulp-wiredep');
const inject = require('gulp-inject');
const useref = require('gulp-useref');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean', function(done) {
    del(['src']).then(() => { done() });
});

gulp.task('lint', function(){
    return gulp.src('app/**/*.js')
        .pipe(jshint({esversion: 6}))
        .pipe(jscs())
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass-to-css', function() {
    return gulp.src('./assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('css-autoprefix', ['sass-to-css'], function(){
    return gulp.src('./assets/styles/css/*.css')
        .pipe(autoprefixer({
            browsers: 'last 2 major versions'
        }))
        .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('build-css', ['css-autoprefix'], function() {
    return gulp.src('./assets/styles/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets/styles/css/css'));
});

gulp.task('copy-templates', function() {
    return gulp.src('app/views/**/*.html')
      .pipe(gulp.dest('src/app/views'));
});

gulp.task('dependencies', function() {

    const source = gulp.src(['app/**/*.module.js', 'app/**/*.js', './assets/styles/css/*.css'], {read: false});

    return gulp.src('index.html')
        .pipe(inject(source))
        .pipe(wiredep())
        .pipe(useref())
        .pipe(gulp.dest('./src'));
});

gulp.task('js-watcher', function(){
    return gulp.watch('app/**/*.js', ['build']);
});

gulp.task('css-watcher', function() {
    return gulp.watch('./assets/styles/*.scss', ['build']);
});

gulp.task('build', function(done){
    runSequence( ['clean', 'lint'], 'copy-templates', 'build-css', 'dependencies', 'js-watcher', 'css-watcher', done);
});
