//
//const {start} = require("repl")
// globals

const SADIO = 0
const CONTAMINADO = 1
const IMUNE = 2

//const COR_SADIO ='yellow'
//const COR_IMUNE = 'green'
//const COR_CONTAMINADO = 'red'
const CORES = ['yellow','red','green']

const tempo_ciclo = 1 // milisegundos = 1 segundo de simulaçao (tempo virtual)
const tempo_refresh = 50 // refresh da tela
const tempo_medicao = 3600 // milisegundos - 1 dia de simulação 
const tempo_incubacao = 1800 // 0.5 dias
const tempo_imunidade = 3600 // 1 dias 
const taxa_inicial_contaminados = 0.05 // 5 %
const taxa_residual = 0.10 // 10% agentes que permanecem contaminados
const distancia_contaminacao = 10 // distancia na qual um agente contamina o outro


var nGrid = 1
var tEnvironment = "other"
var heuristics = ""
var interactive = false
var noperations = 0
var elapsedtime = 0

var tempo_simulacao = 0

var quantidade_sadios = 0
var quantidade_imunes = 0
var quantidade_contaminados = 0
var total_populacao = 0

var lista_agentes = []

var lista_tempos = []
var lista_casos = []

var timer
