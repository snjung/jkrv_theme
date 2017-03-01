/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass');

// source and distribution folder
var
    source = 'src/',
    dest = '../../Public/';

// Bootstrap scss source
var bootstrapSass = {
        in: './node_modules/bootstrap-sass/'
    };
    
// fonts
var fonts = {
        in: [source + 'Fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'Fonts/'
    };

// javascript
var javascripts = {
        in: bootstrapSass.in + 'assets/javascripts/**/*',
        out: dest + 'Javascript/'
}
// css source file: .scss files
var scss = {
    in: source + 'Scss/main.scss',
    out: dest + 'Css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};

// copy bootstrap required fonts to dest
gulp.task('fonts', ['javascripts'], function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// copy bootstrap required javascripts to dest
gulp.task('javascripts', function () {
    return gulp
        .src(javascripts.in)
        .pipe(gulp.dest(javascripts.out));
});


// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(gulp.dest(scss.out));
});

// default task
gulp.task('default', ['sass'], function () {
     gulp.watch(scss.watch, ['sass']);
});

