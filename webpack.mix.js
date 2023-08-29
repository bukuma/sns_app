const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
      // ここでapp/assets/stylesheets/sass/app.scssをコンパイルしてpublic/css/app.cssとして生成
    .sass('app/assets/stylesheets/sass/app.scss', 'public/css/app.css')
    .js('app/javascript/app.js', 'public/js/app.js')
    .js('app/javascript/bootstrap.js', 'public/js/bootstrap.js')
      // この行を追加
    .js('app/javascript/turbo.js', 'public/js/turbo.js');