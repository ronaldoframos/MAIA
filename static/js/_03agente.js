class Agent{
    // tamanho do quadrado do agente
    constructor(){
        this.canvas = document.getElementById("canvas")
        this.comp_lado = 5
        this.X = canvas.width * Math.random()
        this.Y = canvas.height * Math.random()
        this.R = this.comp_lado 
        // x : coordenada x,y: coordenada y, w: largura, h : altura
        // limsupx : limite superior de x, liminfx : limite inferior de x , etc
    }
    update(){
        this.X = canvas.width * Math.random()
        this.Y = canvas.height * Math.random()
        this.R = this.comp_lado
    }
}
class Agent_Covid extends Agent{
    // a fazer
    constructor(){
        super()
        this.contaminado = false
    }
    getCor(){
        if (this.contaminado){
            return 'red'
        }
        return 'yellow'
    }
    draw(canvas){
        if (canvas.getContext){
            var ctx = canvas.getContext('2d')
            ctx.fillStyle = this.getCor()
            ctx.beginPath()
            ctx.arc(this.X, this.Y, this.R, 0, 2 * Math.PI, false)
            ctx.fill()
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }
}