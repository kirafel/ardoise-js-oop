$(function () {
    let paint = new Program();
    paint.start();

    let colorWell = document.querySelector("#colorWell");
    colorWell.addEventListener("input", createDiv, false);

    function onClickGetColor(e) {
        return e.target.value;
    }

    function createDiv(e) {
    let color = onClickGetColor(e);

    $(".second-li div").removeClass("selected");

    $("<div>")
        .insertBefore($("#colorWell"))
        .addClass("pen-color selected")
        .css("background-color", color)
        .data("color", color);
    } 
});

