/**
 * Created by Ding-YH on 2015/9/28.
 */
var main = function()
{
    $(".btn").click(

                function() {
                    //数据交给后台
                  $(this).addClass("btn-success");
                  $(this).text("提交成功");

                    //接下来应跳转到主操作面板
                }
    );

};

$(document).ready(main);