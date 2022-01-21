const { src, dest, watch, parallel } = require('gulp')

//*css
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autopre = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')


//*images
const webp = require('gulp-webp')
const avif = require('gulp-avif')

//*js
const terser = require('gulp-terser-js')

function css( done ){
    
    //*Identify the css file to compile it
    src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe( plumber() )
    .pipe( sass() )//*Compile  //*with pipe calls the next action    
    .pipe( postcss( [autopre(), cssnano()] ) )
    .pipe(sourcemaps.write('.'))
    .pipe( dest('build/css') )//*Save scss compiled
    


    done()
}


//*Images to webp format
function toWebp( done ){

    const options = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe( webp(options) )
    .pipe( dest('build/img') )
    done();
}
//*Images to avif format
function toAvif( done ){

    const options = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
    .pipe( avif(options) )
    .pipe( dest('build/img') )
    done();
}

function js( done ){

    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe( terser() )
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))
    done()
}



function dev( done ){

    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)

    done()
}

exports.css = css
exports.js = js
exports.toWebp = toWebp
exports.toAvif = toAvif
exports.dev = parallel( dev, toWebp, toAvif)

