'use strict';

// --------------------------------------------
// Dependencies
// --------------------------------------------
var autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin'),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create();


// paths
var img_src         =   'source/img/other/*',
    sass_src        =   'source/sass/**/*.sass',
    script_src      =   'source/js/*.js',
    vendors_src     =   'source/js/vendors/',
    vendors_src_arr =  ['source/js/vendors/jquery.min.js','source/js/vendors/*.js'],
    sass_dest       =   'build/assets/css/',
    img_dest        =   'build/assets/img',
    script_dest     =   'build/assets/js',
    pug_src         =   'source/pug/pages/*.pug',
    pug_src_full    =   'source/pug/**/*.pug',
    pug_dest        =   'build/',
    base_dir_src    =   './build'
;

var css_src = 'build/assets/css/*.css',
    js_src = 'build/assets/js/*.js',
    html_src = 'build/*.html',
    vendorJs_src = 'build/assets/js/vendors/*.js'
;
// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------

// convert jade/pug -> html files
gulp.task('pug', function() {
    gulp.src(pug_src)
    .pipe(pug({
        pretty: true
      }))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest(pug_dest));
  });
// --------------------------------------------

// error_check, compile, compress, rename, re-position -> sass files
gulp.task('sass', function() {
    gulp.src(sass_src)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        // .on('error', function(errorInfo) {
        //     console.log(errorInfo.toString());
        //     this.emit('end');
        // })
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
          }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(sass_dest));
});
// --------------------------------------------


// compress, re-position -> image files
gulp.task('images', function() {
    gulp.src(img_src)
        .pipe(images())
        .pipe(gulp.dest(img_dest));
});
// --------------------------------------------


// error_check, compress, re-position -> js files
gulp.task('scripts', function() {
    gulp.src(script_src)
        .pipe(plumber())
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(uglify())
        .pipe(gulp.dest(script_dest));
});
// --------------------------------------------


// error_check, concat, compress, re-position -> vendor.js files
gulp.task('vendors', function() {
    gulp.src(vendors_src_arr)
        .pipe(plumber())
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest(script_dest));
});
// --------------------------------------------



// Watch for changes
gulp.task('watch', function(){
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: base_dir_src
        },
        notify: false
    });

    gulp.watch(pug_src_full,['pug']);
    gulp.watch(sass_src,['sass']);
    gulp.watch(script_src,['scripts']);
    gulp.watch(vendors_src,['vendors']);
    gulp.watch([ html_src, css_src, js_src, vendorJs_src]).on('change', browserSync.reload);
});


// use default task to launch Browsersync and watch JS files
gulp.task('default', [ 'pug','sass', 'scripts', 'vendors', 'watch'], function () {});
