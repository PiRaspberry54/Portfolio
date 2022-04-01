const menuButton = $(".menu-btn");
$(".top-nav").css("display", "none");

menuButton.on("click", function() {
    $(".top-nav").css("display", "flex");
    console.log("Hello button");
});