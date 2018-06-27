
var gulp = require('gulp');
var sass = require( 'gulp-sass' );
var sourcemaps = require('gulp-sourcemaps');
// var rename = require( 'gulp-rename' );
// var minify = require( 'gulp-minify-css' );
var autoprefixer = require( 'gulp-autoprefixer' );
// var util = require( 'gulp-util' );
var log = require( 'fancy-log' );
//require( 'stylelint' )(),

// TODO: use series to compile SASS then copy to dist.
gulp.task( 'sass', gulp.series( function () {
  'use strict';
  log( 'Generate CSS files ' + (new Date()).toString());
  return gulp
    .src('./css-partials/blocks.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe( autoprefixer( 'last 3 version' ))
    .pipe( sourcemaps.write('.'))
    .pipe( gulp.dest( './dist' ));

}));
