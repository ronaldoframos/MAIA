
// objetos estáticos das classe 
ambiente = new Environment
ambiente.draw(document['nGrid'])

// saida
saida = new Output
saida.draw(1)

var timer;

function update(){
    ambiente.update()
    ambiente.draw(nGrid)
    document.getElementById("tempodecorrido").innerHTML ="Elapsed Time:"+tempo_simulacao
    lista_tempos.push(tempo_simulacao)
    lista_casos.push(Math.floor(Math.random()*1000))
    //console.log('casos '+lista_casos)
    //saida.draw(1)
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