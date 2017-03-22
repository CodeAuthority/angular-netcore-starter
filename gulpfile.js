var gulp     = require('gulp');
var ts       = require('gulp-typescript');
var rimraf   = require('gulp-rimraf');
var sass     = require('gulp-sass');

var tsconfig = ts.createProject('./tsconfig.json');

var paths = {
    tsIn:            './Scripts/src/**/*.ts',
    tsOut:           './wwwroot/ng',
    jsOut:           './wwwroot/js',
    ngSassIn:        './Scripts/src/**/*.scss',
    ngSassOut:       './wwwroot/ng',
    ngHtmlIn:        './Scripts/src/**/*.html',
    ngHtmlOut:       './wwwroot/ng',
    sassOut:         './wwwroot/css',
    libIn:           ['./node_modules/rxjs/**/*.*'
                     ,'./node_modules/@angular/**/*.*'
                     ,'./node_modules/core-js/client/shim.min.js'
                     ,'./node_modules/zone.js/dist/zone.js'
                     ,'./node_modules/systemjs/dist/system.src.js'],
    libOut:          './wwwroot/lib/npm'
};

gulp.task('build:ts', () => {
    return gulp.src(paths.tsIn)
            .pipe(tsconfig())
            .pipe(gulp.dest(paths.tsOut));
});

gulp.task('build:jslib', () => {
    return gulp.src(paths.libIn, { base: 'node_modules/' })
                .pipe(gulp.dest(paths.libOut));
});

gulp.task('build:sass', () => {
    return gulp.src(paths.ngSassIn)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(paths.ngSassOut));
});

gulp.task('build:html', () => {
    return gulp.src(paths.ngHtmlIn)
            .pipe(gulp.dest(paths.ngHtmlOut));
});

gulp.task('build', ['build:ts', 'build:sass', 'build:html', 'build:jslib']);

gulp.task('clean', (cb) => {
    return gulp.src([paths.tsOut, paths.jsOut, paths.libOut], 
                    { base: 'wwwroot/', read: false })
                .pipe(rimraf());
});

gulp.task('watch', () => {
    gulp.watch([paths.tsIn], ['build:ts']);
    gulp.watch([paths.ngSassIn], ['build:sass']);
    gulp.watch([paths.ngHtmlIn], ['build:html']);
});

gulp.task('default', ['build']);