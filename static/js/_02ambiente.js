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
        total_populacao = document['num_agents']
        for (var i = 0; i < total_populacao;i++){
            lista_agentes.push(new Agent_Covid)
            quantidade_sadios++
        }
        // contaminar alguns
        for (var i = 0; i < Math.ceil( total_populacao * taxa_inicial_contaminados );  i++){
            lista_agentes[i].set_contaminado()
        }
        total_populacao = quantidade_sadios + quantidade_contaminados
    }
    update(){
        var height = this.canvas.height
        var width = this.canvas.width
        if (this.canvas.getContext) {
            var ctx = this.canvas.getContext("2d")
            ctx.clearRect(2,2,height-4,width-4)
        }
        for(var i=0;i<lista_agentes.length;i++){
            lista_agentes[i].update()
        }
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
        var l = limpa_lista()
        for(var i = 0; i < l.length;i++){
            l[i].draw(this.canvas)
        }
    }
}