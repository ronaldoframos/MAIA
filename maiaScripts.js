// globals
var nGrid = 4
var tEnvironment

// function

function agent(){
    alert("Creating a agente")
}
function setEnvironment(){
    modal.style.display = "block"
}
function setAgent(){
    alert("fodeu")
}
function about(){
    alert("fodeu")
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function processaForm() {
    var x = document.getElementById("frm1");
    nGrid = x.elements[0].value
    tEnvironment = x.elements[1].value
}
class Environment{
    constructor(){
        //alert("Default grid is "+nGrid)
        this.canvas = document.getElementById("canvas")
        this.draw()
    };
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
var env = new Environment()

