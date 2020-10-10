//
//const { start } = require("repl")
// globals
var nGrid = 1
var tEnvironment = "other"
var heuristics = ""
var interactive = false
var noperations = 0
var elapsedtime = 0

var tempo_ciclo = 1 // milisegundos = 1 segundo de simulaçao (tempo virtual)
var tempo_refresh = 50 // refresh da tela
var tempo_medicao = 3600 // milisegundos - 1 dia de simulação 

var tempo_incubacao = 5 * 3600 // 5 dias
var tempo_imunidade = 10 * 3600 // 10 dias 

var tempo_simulacao = 0
var taxa_inicial_contaminados = 0.05 // 5 %
var distancia_contaminacao = 20 // distancia na qual um agente contamina o outro
var numero_agentes_contaminados 

var lista_agentes_sadios = []
var lista_agentes_contaminados = []

var lista_tempos = []
var lista_casos = []

var timer
