class Program {
    constructor() {
        // Initialize Class Properties
        this.pen = new Pen();
        this.slate = new Slate(this.pen);
        this.palette = new Palette();
    }

    start() {
        // Initialize Events
        $('.third-li button').on('click', this.onPickSize.bind(this));
        $(document).on('click','.second-li div', this.onPickColor.bind(this));
        $('#tool-clear-canvas').on('click', this.slate.onErase.bind(this.slate));
        $('#tool-color-picker').on('click', this.onClickColorPicker.bind(this));
        $('#tool-color-erase').on('click', this.onClickEraser.bind(this));
        $('#tool-clear-brush').on('click', this.onClickBrush.bind(this));
        $('#tool-color-star').on('click', this.onClickStar.bind(this));
        $("#color-palette").on('click', this.onClickCanvas.bind(this));
    }

    onClickCanvas() {
        let color = this.palette.pickedColor;
        this.pen.setPenColorRGB(color.red, color.green, color.blue);
        
        let newColor = "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
        $(".second-li div").removeClass("selected");
        $(".second-li .default")
        .css("background-color", newColor)
        .data("color", newColor)
        .addClass("selected");

        $('#color-palette').fadeOut();
    }

    onPickSize(e) {
        let size = $(e.currentTarget).data('size');
        this.pen.setPenSize(size);
    }

    onPickColor(e) {
        let color = $(e.currentTarget).data('color');
        this.pen.setPenColor(color);

        $(".second-li div").removeClass("selected");
        $(e.currentTarget).addClass("selected");
    }

    onClickColorPicker() {
        $('#color-palette').fadeToggle();
    }

    onClickEraser() {
        this.slate.setMode("eraser");
    }

    onClickBrush() {
        this.slate.setMode("pen");
    }

    onClickStar() {
        this.slate.setMode("star");
    }
}