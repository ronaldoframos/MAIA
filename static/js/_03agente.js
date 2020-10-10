class Agent{
    // tamanho do quadrado do agente
    constructor(){  
    } 
}
class Agent_Covid extends Agent{
    constructor(){
        super()
        this.canvas = document.getElementById("canvas")
        this.comp_lado = 5
        this.X = canvas.width * Math.random()
        this.Y = canvas.height * Math.random()
        this.R = this.comp_lado 
        this.estado = SADIO
        this.data_contaminacao = 0
    }
    /**
     * @param {any} valor
     */
    set_contaminado(){
        this.estado = CONTAMINADO
        this.data_contaminacao = tempo_simulacao
        quantidade_contaminados++
        quantidade_sadios--
    }
    verificaImunidade(){
        if(tempo_simulacao - this.data_contaminacao > tempo_imunidade){
            this.estado=IMUNE
            quantidade_contaminados--
            quantidade_imunes++
        }
        return this.estado
    }
    getCor(){
        return CORES[this.estado]
    }
    update(){
        this.X = canvas.width * Math.random()
        this.Y = canvas.height * Math.random()
        this.R = this.comp_lado
    }
    draw(canvas){
        if (canvas.getContext){
            var ctx = canvas.getContext('2d')
            ctx.fillStyle = this.getCor(this.estado)
            ctx.beginPath()
            ctx.arc(this.X, this.Y, this.R, 0, 2 * Math.PI, false)
            ctx.fill()
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }
}