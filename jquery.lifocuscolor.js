;(function($) {
    $.fn.extend({
    	"focusColor": function(li_col) {
    		var def_col="#ccc";//默认获取焦点的色值
    		var lst_col="#fff";//默认丢失焦点的色值

    		//如果设置的颜色不为空，使用设置的颜色，否则为默认色
    		li_col=(li_col==undefined) ? def_col : li_col;
    		
    		//遍历表项<li>中的所有元素
    		$(this).find("li").each(function() {
    			$(this).mouseover(function() {
    				$(this).css("background-color",li_col);//使用设置的颜色
    			}).mouseout(function() {
    				$(this).css("background-color","#fff");//恢复原来的颜色
    			})
    		});
            return $(this);//返回jquery对象，保持链式操作
    	}
    });
}) (jQuery);
