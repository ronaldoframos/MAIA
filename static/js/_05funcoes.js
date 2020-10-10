function contamina(){
    lista_agentes = lista_agentes.filter(function( element ){
        return element !== undefined;
    });
    var contaminados = lista_agentes.filter(function(element){return element.estado ==CONTAMINADO});
    console.log('contaminadod '+contaminados)
    var sadios = lista_agentes.filter(function(element){return element.estado==SADIO});
    console.log('sadios '+sadios)
    for(var i=0;i<contaminados.length;i++){
        for(var j = 0; j< sadios.length;j++){
            d = distancia(contaminados[i],sadios[j])
            if ( d < distancia_contaminacao ){
                sadios[j].set_contaminado()
                quantidade_contaminados++
                quantidade_sadios--
            }
        }
        
    }
}
function imuniza(){
    for(var i=0;i<total_populacao;i++){
        try {
            lista_agentes[i].verificaImunidade() 
        } catch (error) {
            continue
        }
    } 
}
function distancia(a,b){
    return Math.sqrt((a.X-b.X)**2 + (a.Y-b.Y)**2)
}
function conta_contaminados(){
    var conc = 0
    lista_agentes = lista_agentes.filter(function( element ) {
        return element !== undefined;
    });
    var conc=0
    for(var i=0;i<total_populacao;i++) {
        if(lista_agentes[i].estado==CONTAMINADO){
            conc++
        }
    }
    quantidade_contaminados = conc
    return conc
}
function update(){
    tempo_simulacao+=tempo_refresh
    contamina()
    imuniza()
    c = conta_contaminados()
    lista_tempos.push(tempo_simulacao)
    lista_casos.push(c)
    ambiente.update()
    ambiente.draw(nGrid)
    document.getElementById("tempodecorrido").innerHTML ="Elapsed Time:"+tempo_simulacao
    saida.draw(1)
    if((quantidade_sadios == 0) && (quantidade_contaminados  < taxa_residual * total_populacao)){
         fim()
    }
}
// scripts da pagina maia start
function inicio(){
    //alert("funcionou")
    timer = setInterval(update,tempo_refresh)
    //ambiente.update()
}
function fim(){
    clearInterval(timer)
}
function save(){
    alert("Saving"+lista_casos)
    saida.draw(1)
}

// objetos estáticos das classe 
ambiente = new Environment
ambiente.draw(document['nGrid'])

// saida
saida = new Output
saida.draw(1)