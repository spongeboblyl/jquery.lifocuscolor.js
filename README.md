# jquery.lifocuscolor.js
jquery对象级别插件开发

（1）功能描述：在列表<ul>元素中，鼠标在表项<li>元素移动时，可以自定义其获取焦点(focus)时的背景颜色，即设置表项<li>元素选中时的背景色。

（2）搭建框架 
<!--     功能：设置列表中表项获取鼠标焦点时的背景色
         参数：li_col【可选】鼠标所在表项的背景色
         返回：原调用对象
         示例：$("ul").focusColor("red");   -->
  ;(function($) {
     $.fn.extend( {
          "yourPluginName":function(pram_value) {
          //各种默认属性或者参数的设置
     
          this.each(function) {
          //插件代码的实现
          }）
        }
     }) 
  }) (jquery);
  
  
 （3）代码编写
