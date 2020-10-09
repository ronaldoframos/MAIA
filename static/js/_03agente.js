class Agent{
    // tamanho do quadrado do agente
    constructor(){
        this.comp_lado = 10
        // x : coordenada x,y: coordenada y, w: largura, h : altura
        // limsupx : limite superior de x, liminfx : limite inferior de x , etc
    }
    percepcao(){
        // a fazer
    }
    move(){
        // a fazer
    }
}
class Agent_Covid extends Agent{
    // a fazer
    constructor(){
        super()
    }
    draw(canvas){
        // a fazer
        //alert("desenhar o agente")
        // fiquei aqui usar as funcoes clearret do contexto e settimeout javascript para fazer animacao
        // dividir as classes em arquivos separados
        if (canvas.getContext){
            var ctx = canvas.getContext('2d')
            var X = canvas.width * Math.random()
            var Y = canvas.height * Math.random()
            var R = this.comp_lado
            //ctx.fillStyle = "red"
            ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
            ctx.beginPath()
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.fill()
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }
}