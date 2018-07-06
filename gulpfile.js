const gulp = require('gulp')
const sass = require('gulp-sass')

let src = './sass/*.+(scss|sass)'
let destination = './'

gulp.task('styles', () => {
  gulp.src(src)
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest(destination))
})

gulp.task('watch', () => {
  gulp.watch(src, ['styles'])
})

gulp.task('default', ['watch'])
