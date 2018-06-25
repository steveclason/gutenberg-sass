
var gulp = require('gulp');
var sass = require( 'gulp-sass' );
var sourcemaps = require('gulp-sourcemaps');
// var rename = require( 'gulp-rename' );
// var minify = require( 'gulp-minify-css' );
var autoprefixer = require( 'gulp-autoprefixer' );
// var util = require( 'gulp-util' );
var log = require( 'fancy-log' );
//require( 'stylelint' )(),

gulp.task( 'sass', function () {
  'use strict';
  log( 'Generate CSS files ' + (new Date()).toString());
  return gulp
    .src('./css-partials/gutenberg-blocks.scss')
    // .src( './css-partials/_test.scss' )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe( autoprefixer( 'last 3 version' ))
    .pipe( sourcemaps.write('.'))
    .pipe( gulp.dest( './dist' ));

});
