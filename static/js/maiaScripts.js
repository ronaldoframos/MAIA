// globals
var nGrid = 4
var tEnvironment = "other"
// classes
class Environment{
    constructor(){
        this.canvas = document.getElementById("canvas")
        //var nGrid = Number({{ngrid|tojson}})
    }
    draw() {
        // draw the environment
        var height = this.canvas.height
        var width = this.canvas.width
        var steph = Number.parseInt(width/nGrid)
        var stepv = Number.parseInt(height/nGrid)
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext("2d");
            for (var i = 0; i <= height; i += stepv) {
                ctx.moveTo(0, i)
                ctx.lineTo(canvas.width, i)
                ctx.stroke()
            }
            for (var i = 0; i <= width; i += steph){
                ctx.moveTo(i, 0)
                ctx.lineTo(i,canvas.height)
                ctx.stroke()
            }
        } 
    }
}
e = new Environment
e.draw()

// functions event handlers
document.getElementById("startbutton").addEventListener("click",start)
function start() {
  alert("Hello World!");
}