# multi-page-of-vue
> 这是一个基于vue2.0和webpack2.0的多页面的模板

## 多模块多页面实现

> src/module 存放所有页面的入口文件，module下一层目录为模块名称，每个模块目录下可以有多个页面
> 例：module下可以有mobile和pc两个模块，mobile下可以放list和detail两个页面目录，其中的mobile和pc
> 为模块，list和detail为mobile模块下的页面目录，实现多模块多页面，而每个页面文件下的js文件为入口文件
> 因此页面文件下有且仅有一个js文件

## 前沿特性

- postcss 支持
> 支持postcss和原生css语法，引入salad、precss、css-reset、pxtorem、short等postcss插件提升css开发效率
- eslint airbnb 语法检测（根据team可以选择关闭或者换成其他规则）
- 多页面模板模式
> src/template 下是各种页面模板，而模块名称对应的就是相应的模板，也就是一个模块使用一个模板。

## 安装启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

