function environment(){
    var result = app.popUpMenu("opt1", "opt2", "opt3");
    this.getField("Text1").value=result;
}
function agent(){
    alert("Creating a agente")
}
function menu(){
    document.getElementById("myDropdown").classList.toggle("show");
}
/* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
function menu1() {
    document.getElementById("menu1").classList.toggle("show");
}
function menu2() {
    document.getElementById("menu2").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {    
    elem = event.target
    var dropdowns
    if(elem.name=="bt1"){
        dropdowns = document.getElementsByName("menu2")
    } else if (elem.name=="bt2"){
        dropdowns = document.getElementsByName("menu1")
    } else {
        // if (!elem.matches('.dropbtn')) {
        // var dropdowns = document.getElementsByClassName("dropdown-content");
        dropdowns = document.getElementsByClassName("dropdown-content")
    }
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]
        if (openDropdown == null) { return }
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }
}

var canvas = document.getElementById('canvas')
var context = canvas.getContext("2d")


/* continuar a partir daqui
var spritesheet = new Image();

// Functions..........................................................

function windowToCanvas(canvas, x, y) {
   var bbox = canvas.getBoundingClientRect();
   return { x: x - bbox.left * (canvas.width  / bbox.width),
            y: y - bbox.top  * (canvas.height / bbox.height)
          };
}

function drawBackground() {
   var VERTICAL_LINE_SPACING = 12,
       i = context.canvas.height;

   context.clearRect(0,0,canvas.width,canvas.height);
   context.strokeStyle = 'lightgray';
   context.lineWidth = 0.5;

   while(i > VERTICAL_LINE_SPACING*4) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
      i -= VERTICAL_LINE_SPACING;
   }
}

function drawSpritesheet() {
   context.drawImage(spritesheet, 0, 0);
}

function drawGuidelines(x, y) {
   context.strokeStyle = 'rgba(0,0,230,0.8)';
   context.lineWidth = 0.5;
   drawVerticalLine(x);
   drawHorizontalLine(y);
}

function updateReadout(x, y) {
   readout.innerText = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

function drawHorizontalLine (y) {
   context.beginPath();
   context.moveTo(0,y + 0.5);
   context.lineTo(context.canvas.width, y + 0.5);
   context.stroke();
}

function drawVerticalLine (x) {
   context.beginPath();
   context.moveTo(x + 0.5, 0);
   context.lineTo(x + 0.5, context.canvas.height);
   context.stroke();
}

// Event handlers.....................................................

canvas.onmousemove = function (e) {
   var loc = windowToCanvas(canvas, e.clientX, e.clientY);

   drawBackground();
   drawSpritesheet();
   drawGuidelines(loc.x, loc.y);
};

// Initialization.....................................................

spritesheet.src = 'running-sprite-sheet.png';
spritesheet.onload = function(e) {
   drawSpritesheet();
};

drawBackground();

*/