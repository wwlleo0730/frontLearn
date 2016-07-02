# chapter1  

from 

1.安装nodejs

Grunt和所有grunt插件都是基于nodejs来运行的，如果你的电脑上没有nodejs，就去安装吧。安装nodejs非常简单，完全傻瓜式、下一步下一步下一步、的安装方式，这里不再赘述。去 https://nodejs.org/ 安装

2.安装grunt-CLI

CLI”被翻译为“命令行”。要想使用grunt，首先必须将grunt-cli安装到全局环境中，使用nodejs的“npm install…”进行安装。


3.创建package.json

json格式，定义项目

4. 安装grunt
接下来我们会有一系列插件的安装，他们的安装过程和grunt一样。
但是他们的执行都是基于grunt的，因此才能把grunt叫做一个“构建工具”。
Grunt没有具体的作用，但是它能把有具体作用的一个一个插件组合起来，形成一个整体效应。

npm install grunt --save-dev

这里需要解释的是，“—save-dev”的意思是，在当前目录安装grunt的同时，顺便把grunt保存为这个目录的开发依赖项。
上文在配置package.json时，其中的“devDependencies”中就会存储开发依赖项。


执行完毕后，文件夹内 package.json变为

{
  "name": "grunt-test",
  "version": "1.0.0",
  "title": "grunt-test",
  "author": "wuwenli",
  "devDependencies": {
    "grunt": "^1.0.1"
  }
}


5.创建Gruntfile.js




