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
        for (var i = 0; i < document['num_agents'];i++){
            this.listaAgentes.push(new Agent_Covid)
        }
    }
    sinaliza_agentes(){
        // envia algo que será capturado pelas percepcoes dos agentes
    }
    update(){
        var height = this.canvas.height
        var width = this.canvas.width
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext("2d")
            ctx.clearRect(2,2,height-4,width-4)
        }
        tempo_simulacao+=tempo_refresh
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
            console.log("desenhando agente"+i)
            this.listaAgentes[i].draw(this.canvas)
        }
    }
}