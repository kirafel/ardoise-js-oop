class Palette {
    // Initialize Class Properties
    constructor () {
        this.pickedColor = {
            red : 0,
            green : 0,
            blue : 0
        }
        this.canvas = document.getElementById('color-palette');
        this.ctx = this.canvas.getContext("2d");

        this.build();
        
        this.canvas.addEventListener('click',this.onPickColor.bind(this));
    }

    onPickColor(e) {
        let location=  this.getMouseLocation(e);
        let palette = this.ctx.getImageData(location.x, location.y, 1, 1);

        this.pickedColor.red = palette.data[0];
        this.pickedColor.green = palette.data[1];
        this.pickedColor.blue = palette.data[2];

}

    getMouseLocation(e) {
        return {
            x: e.offsetX,
            y: e.offsetY
        };
    }

    build() {
         // Add Gradient to the canvas
         let gradient = this.ctx.createLinearGradient(0,0, this.canvas.width,0);
         gradient.addColorStop(0,    'rgb(255,   0,   0)');
         gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
         gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
         gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
         gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
         gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
         gradient.addColorStop(1,    'rgb(255,   0,   0)');
 
         this.ctx.fillStyle = gradient;
         this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
         
         gradient = this.ctx.createLinearGradient(0, 0, 0, 350);
         gradient.addColorStop(      0,  'rgba(255, 255, 255,    1)'); 
         gradient.addColorStop(  0.5,    'rgba(255, 255, 255,    0)');
         gradient.addColorStop(  0.5,    'rgba(   0,     0,      0,      0)');
         gradient.addColorStop(  1,  'rgba(   0,     0,      0,  1)');
         this.ctx.fillStyle = gradient;
         this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}