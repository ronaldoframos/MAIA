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
    var l = limpa_lista()
    for(var i=0;i<total_populacao;i++){
        l[i].verificaImunidade() 
    } 
}
function mata(){
    var l = limpa_lista()
    for(var i=0;i<total_populacao;i++){
        l[i].verificaObito() 
    } 
}
function distancia(a,b){
    return Math.sqrt((a.X-b.X)**2 + (a.Y-b.Y)**2)
}
function conta_contaminados(){
    var contaminados = lista_agentes.filter(function(element){return element.estado ==CONTAMINADO});
    quantidade_contaminados = contaminados.length
    return contaminados.length
}
function conta_imunes(){
    var imunes = lista_agentes.filter(function(element){return element.estado==IMUNE});
    return imunes.length
}
function conta_mortos(){
    var ob = lista_agentes.filter(function(element){return element.estado==MORTO})
    return ob.length
}
function limpa_lista(){
    lista_agentes = lista_agentes.filter(function( element ){
        return element !== undefined;
    });
    return lista_agentes
}
function update(){
    c = conta_contaminados()
    if(tempo_simulacao % tempo_medicao==0){
        // um dia de simulacao
        lista_tempos.push(Math.ceil(tempo_simulacao/tempo_medicao))
        lista_casos.push(c)
    }
    tempo_simulacao+=tempo_passo
    contamina()
    mata()
    imuniza()
    ambiente.update()
    ambiente.draw(nGrid)
    document.getElementById("tempodecorrido").innerHTML ="Elapsed Time:"+tempo_simulacao
    saida.draw(1)
    if(( total_populacao - conta_imunes() < taxa_residual * total_populacao)||(tempo_simulacao>tempo_simulacao_maximo)) {
         fim()
    }
}
// scripts da pagina maia start
function inicio(){
    timer = setInterval(update,tempo_refresh)
}
function fim(){
    clearInterval(timer)
    alert('Sumário \nPopulação : '+total_populacao+'\nRecuperados :'+conta_imunes()+'\nMortos: '+conta_mortos())
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