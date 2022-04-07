const menuButton = $(".menu-btn");
const exitButton = $(".exit-button")
$(".top-nav").css("display", "none");

menuButton.on("click", function() {
    $(".top-nav").css("display", "flex");
    console.log("Menu button has been pressed.");
    menuButton.css("display", "none");
});

exitButton.on("click", function() {
    $(".top-nav").css("display", "none");
    console.log("Exit button has been pressed.");
    menuButton.css("display", "flex");
});