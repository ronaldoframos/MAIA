function contamina(){
    console.log('agentes contaminados '+lista_agentes_contaminados.length)
    console.log('agentes sadios '+ lista_agentes_sadios.length )
    var paraContaminar = []
    for(var i=0;i<lista_agentes_contaminados.length;i++){
        for(var j = 0; j< lista_agentes_sadios.length;j++){
            d = distancia(lista_agentes_contaminados[i],lista_agentes_sadios[j])
            if ( d < distancia_contaminacao ){
                paraContaminar.push(j)
            }
        }
    }
    paraContaminar.forEach(transfere)
}
function transfere(elemento,indice,matriz){
    console.log('tranferir o elemento na posicao '+elemento)
    lista_agentes_sadios[elemento].contaminado=true
    lista_agentes_contaminados.push(lista_agentes_sadios[elemento])
    lista_agentes_sadios.splice(elemento,1)
}
function descontamina(){

}   
function distancia(a,b){
    return Math.sqrt((a.X-b.X)**2 + (a.Y-b.Y)**2)
}
function update(){
    tempo_simulacao+=tempo_refresh
    contamina()
    ambiente.update()
    ambiente.draw(nGrid)
    document.getElementById("tempodecorrido").innerHTML ="Elapsed Time:"+tempo_simulacao
    lista_tempos.push(tempo_simulacao)
    lista_casos.push(lista_agentes_contaminados.length)
    saida.draw(1)
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