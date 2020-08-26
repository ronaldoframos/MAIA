
// globals

var nGrid = 4
var tEnvironment = "other"

// classes

class GlobalObserver{
 // inserir uma lista de variavais observadas pelo sistema
    registerVariabel(variable){
        this.variable = variable
    }
    // inserir uma lista de observadores
    registerObservers(object){

    }
    setValue(variable,value){

    }
    getValue(variable,value){

    }
    // inserir uma rotina de modificacao de valores das variaveis globais e sinalizacao dos ibservadores
    notifyAll(){

    }

}

class Environment{
    constructor(){
        this.canvas = document.getElementById("canvas")
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

// functions event handlers
e = new Environment
e.draw()
