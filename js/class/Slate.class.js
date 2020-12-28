class Slate {
    constructor(pen) {
        this.pen = pen;
        this.mode = "pen";

        // Class Properties
        this.canvas = document.getElementById("slate");
        this.ctx= this.canvas.getContext("2d");

        // Get Current location
        this.currentLocation = {x: 0, y: 0};
        this.isDrawing = false;

        // Add the events for the class
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    };

    setMode(mode) {
        this.mode = mode;
    }

    onMouseDown(e) {
        this.currentLocation = this.getMouseLocation(e);    
        this.isDrawing = true;
    }

    onMouseMove(e) {
        if(!this.isDrawing) return;
        let location = this.getMouseLocation(e);
        this.ctx.beginPath();
        if (this.mode != "eraser") {
            this.ctx.globalCompositeOperation = "source-over";
            if (this.mode == "pen") {
                // Draw Line
                this.ctx.moveTo(this.currentLocation.x, this.currentLocation.y);
                this.ctx.lineTo(location.x, location.y);
            }
            if (this.mode == "star") {
                  // Draw Star
                this.drawStar(this.ctx, this.currentLocation.x, this.currentLocation.y, 5, 5, 10);
            }
            this.ctx.closePath();
            this.ctx.lineWidth = this.pen.size;
            this.ctx.strokeStyle = this.pen.color;
            this.ctx.lineCap = "round";
            
            this.ctx.stroke();
        } else {
            this.ctx.globalCompositeOperation = "destination-out";
            this.ctx.arc(this.currentLocation.x, this.currentLocation.y ,this.pen.size , 0, Math.PI*2);
            this.ctx.fillStyle = "green";
            this.ctx.fill();
            this.ctx.stroke();
        }
        
        // Update current location
        this.currentLocation = location;
    }

    drawStar(ctx,cx,cy,spikes,r0,r1){
        let rot = Math.PI / 2*3;
        let x=cx;
        let y=cy;
        let step = Math.PI/spikes;
    
        ctx.beginPath();
        ctx.moveTo(cx,cy-r0);
        for(let i=0;i<spikes;i++){
            x=cx+Math.cos(rot)*r0;
            y=cy+Math.sin(rot)*r0;
            ctx.lineTo(x,y)
            rot+=step
            
            x=cx+Math.cos(rot)*r1;
            y=cy+Math.sin(rot)*r1;
            ctx.lineTo(x,y)
            rot+=step
        }
        ctx.lineTo(cx,cy-r0);
    }

    onMouseUp() {
        this.isDrawing = false;
    }

    onMouseLeave() {
        this.isDrawing = false;
    }

    
    onErase() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    getMouseLocation(e) {
        return {
            x: e.offsetX,
            y: e.offsetY
        };
    }
}