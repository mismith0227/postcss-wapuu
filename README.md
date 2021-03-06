# postcss-wapuu [![license](https://img.shields.io/github/license/mismith0227/postcss-wapuu.svg?maxAge=2592000)](https://github.com/mismith0227/postcss-wapuu/blob/master/license.txt)

## install

```
npm install postcss-wapuu
```

## gulp

```
var postcss = require('gulp-postcss');

gulp.task('styles', function() {
  return gulp.src([
    'src/css/style.css',
  ])
  .pipe(postcss([
      require("postcss-wapuu")
    ]))
  .pipe(gulp.dest('build/css'))
});
```

## usage

```
div {
  わぷー: わぷー;
}
```

## Values

* [わぷー](https://github.com/jawordpressorg/wapuu/blob/gh-pages/wapuu-original/wapuu-original.svg)
* [わぷ田信玄](https://github.com/natsumiine/wb_yamanashi/blob/master/wapuda-shingenn.svg)
* [マリンわぷー](https://github.com/466548/wapuu/blob/gh-pages/wapuu-archive/marinwapuu.svg)

## License

"わぷー(Wapuu)" is ja.wordpress.org official character. "わぷー(Wapuu)" was designed by Kazuko Kaneuchi under GPL v2 license or any later version.

[Wapuu archive](https://github.com/jawordpressorg/wapuu/)
