//
//const { start } = require("repl")
// globals
var nGrid = 1
var tEnvironment = "other"
var heuristics = ""
var interactive = false
var noperations = 0
var elapsedtime = 0
// document.getElementById("startbutton").addEventListener("click",start)
// classes
class Agent{
    // tamanho do quadrado do agente
    constructor(x,y,w,h,liminfx,limsupx,liminfy,limsupy){
        this.comp_lado = 10
        // x : coordenada x,y: coordenada y, w: largura, h : altura
        // limsupx : limite superior de x, liminfx : limite inferior de x , etc
        alert('Contruindo agente'+x+' '+y)
    }
    percepcao(){
        // a fazer
    }
    move(){
        // a fazer
    }
    draw(canvas){
        // a fazer
        //alert("desenhar o agente")
        // fiquei aqui usar as funcoes clearret do contexto e settimeout javascript para fazer animacao
        // dividir as classes em arquivos separados
        if (canvas.getContext){
            var ctx = canvas.getContext('2d')
            var X = canvas.width / 2
            var Y = canvas.height / 2
            var R = this.comp_lado
            ctx.fillStyle = "red"
            ctx.beginPath()
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.fill()
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }
}
class Agent_Covid extends Agent{
    // a fazer
    constructor(x,y,w,h,liminfx,limsupx,liminfy,limsupy){
        super(x,y,w,h,liminfx,limsupx,liminfy,limsupy)
    }
}
class Environment{
    constructor(){
        // dados gerais do ambiente
        this.canvas = document.getElementById("canvas")
        var  tokens =  document.getElementById("env").innerText.split(" ")
        document['tEnvironment'] = tokens[1]
        document['nGrid'] = Number(tokens[3])
        document['heuristics'] = tokens[5]
        document['interactive'] = tokens[9]
        document['num_agents'] = Number(tokens[7])
        //criando os agentes
        this.listaAgentes = []
        for (var i = 0; i < document['num_agents'];i++)
            var novoagente = new Agent_Covid(50,50,10,10,0,100,0,100)
            this.listaAgentes.push(novoagente)
        //for(var i = 0;i<11;i++){
        //    console.log('verificando o console num agentes'+i+' = '+ tokens[i])
        //}
    }
    sinaliza_agentes(){
        // envia algo que será capturado pelas percepcoes dos agentes
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
        //  draw agents
        for(var i = 0; i < this.listaAgentes.length;i++){
            this.listaAgentes[i].draw(this.canvas)
        }
    }
}
class Output{
    constructor(){
        this.canvas = document.getElementById("outgraph")
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
// objetos estáticos das classe 
ambiente = new Environment

// saida
saida = new Output

