function directUrl(route) {
    if ((route == "login" || route == "terms" || route == "register") && !window.location.href.includes("Member")) {
        route = "Member/" + route;
    }

    if (route != "/") {
        window.location.href = route + ".html";
    } else {
        window.location.href = "index.html";
    }

}
// 判斷Menu是不是開啟
var isShowMenu = false;

function initPage(page) {
    var page = page.split("/")[page.split("/").length - 1].replace(".html", "");
    switch (page) {
        case "member":
            $(".useService").removeClass("activeBg");
            $(".topDeco").css("margin-top", "0");
            $(".bgLeave").css("margin-top", "0");
            break;
        default:
            break;
    }
    init_Mobile_Menu_Animate();
}

function init_Mobile_Menu_Animate() {
    $("#menu").click(function () {
        if (!isShowMenu) {
            $("#menu").attr("src", "./images/menu_cancel.png");
            $("html body").addClass("hideScroll");
            $("#userIcon").addClass("hide");
            $(".mobile_menu").slideDown(350);

            isShowMenu = true;
        } else {
            $("#menu").attr("src", "./images/menuBtn.png");
            $("html body").removeClass("hideScroll");
            $("#userIcon").removeClass("hide");
            $(".mobile_menu").slideUp(350);

            isShowMenu = false;
        }
    });
    $(".mobile_menu").click(function () {
        $("#menu").attr("src", "./images/menuBtn.png");
        $("html body").removeClass("hideScroll");
        $("#userIcon").removeClass("hide");
        $(".mobile_menu").slideUp(350);
        isShowMenu = false;
    });
}