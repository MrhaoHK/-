var isMoving = false;
$(document).ready(function (e) {
    $(".googleitem").click(function () {
        if (isMoving == true)
            return;
        isMoving = true;
        var target = $(this);
        $(".item").find("div").animate({ height: "0px" }, 300, function () {
          
        });
        $(".bingitem").find("div").animate({ height: "0px" }, 300, function () {

        });
        $(".sogouitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "285px" }, 300, function () { isMoving = false; });
        });
    });
});