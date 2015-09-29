/**
 * Created by Ding-YH on 2015/9/29.
 */
var main = function() {
   $(".caigou").hide();
    $(".shengchan").hide();
    $("#tab01").click(function () {
        $(".caigou").hide();
        $(".shengchan").hide();
        $(".touzi").show();
        $("#tab02").removeClass(("active"));
        $("#tab03").removeClass(("active"));
        $("#tab01").addClass("active");
    });

    $("#tab02").click(function () {
        $(".shengchan").hide();
        $(".touzi").hide();
        $(".caigou").show();
        $("#tab01").removeClass(("active"));
        $("#tab03").removeClass(("active"));
        $("#tab02").addClass("active");
    });

    $("#tab03").click(function () {
        $(".caigou").hide();
        $(".touzi").hide();
        $(".shengchan").show();
        $("#tab02").removeClass(("active"));
        $("#tab01").removeClass(("active"));
        $("#tab03").addClass("active");
    });
};

$(document).ready(main);