var postcss = require('postcss');
var wapuudate = require('./wapuu.json');

module.exports = postcss.plugin('postcss-wapuu', function () {
    return function (css) {
        css.walkDecls('わぷー', function (decl) {
            var wapuu = postcss.list.space(decl.value);

            decl.cloneBefore({ prop: 'background-repeat', value: 'no-repeat' });
            decl.cloneBefore({ prop: 'background-size', value: 'contain' });
            decl.cloneBefore({ prop: 'transform-origin', value: '0 0' });

            if ( wapuu == 'わぷー' ) {
              decl.cloneBefore({ prop: 'width',  value: '400px' });
              decl.cloneBefore({ prop: 'height', value: '400px' });
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ wapuudate.wapuu +')' });
            } else if (wapuu == 'わぷ田信玄') {
              decl.cloneBefore({ prop: 'width',  value: '400px' });
              decl.cloneBefore({ prop: 'height', value: '400px' });
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ wapuudate.wapudashingen +')' });
            } else if (wapuu == 'マリンわぷー') {
              decl.cloneBefore({ prop: 'width',  value: '400px' });
              decl.cloneBefore({ prop: 'height', value: '400px' });
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ wapuudate.marinwapuu +')' });
            }
            decl.remove();
        });
    };
});
