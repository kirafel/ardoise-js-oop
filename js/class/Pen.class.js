class Pen {
    constructor() {
        this.size = 1;
        this.color = "#ccc";
    }

    setPenSize(penSize) {
        this.size = penSize;
    }

    setPenColor(penColor) {
        this.color = penColor;
    }

    setPenColorRGB(red, green, blue) {
        this.color = "rgb(" + red + "," + green + "," + blue + ")";
    }
}
