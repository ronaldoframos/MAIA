// globals
var nGrid = 4
var tEnvironment = "other"
var heuristics = ""
var interactive = false
var noperations = 0
var elapsedtime = 0
// classes
class Environment{
    constructor(){
        this.canvas = document.getElementById("canvas")
        var  tokens =  document.getElementById("env").innerText.split(" ")
        document['tEnvironment'] = tokens[1]
        document['nGrid'] = Number(tokens[3])
        document['heuristics'] = tokens[5]
        document['interactive'] = tokens[7]
    }
    draw(ngrid) {
        // draw the environment
        var height = this.canvas.height
        var width = this.canvas.width
        var steph = Math.trunc(width/ngrid)
        var stepv = Math.trunc(height/ngrid)
        var limit_h = steph*ngrid
        var limit_v = stepv*ngrid
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext("2d");
            for (var i = 0; i <= height; i += stepv) {
                ctx.moveTo(0, i)
                ctx.lineTo(limit_h, i)
                ctx.stroke()
            }
            for (var i = 0; i <= width; i += steph){
                ctx.moveTo(i, 0)
                ctx.lineTo(i,limit_v)
                ctx.stroke()
            }
        } 
    }
}
e = new Environment
e.draw(document['nGrid'])
// functions event handlers
document.getElementById("startbutton").addEventListener("click",start)
//
//  fiquei aqui
//
// criar rotinha sqlite para salvar as execuções
// colocar o event hanadler para o menu principal agente e retirar o href
// criar o desenho ao lado do canvas
// fazer chamada a uma função python
function start() {
    e.draw(document['nGrid'])
}