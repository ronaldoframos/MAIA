//
//const {start} = require("repl")
// globals

const SADIO = 0
const CONTAMINADO = 1
const IMUNE = 2
const MORTO = 3

const CORES = ['yellow','red','blue','black']

const tempo_refresh = 60 // refresh da tela
const tempo_passo  = 900 // step do tempo real Rt = 4 a cada dia a pessoa pode contaminar ate 4 pessoas
const tempo_medicao = 3600 // milisegundos - 1 dia de simulação 
const tempo_incubacao = 2 * tempo_medicao  // 2 dias
const tempo_imunidade = 15 * tempo_medicao  // 5 dias - Tempo máximo que cada paciente leva para se recuperar
const taxa_inicial_contaminados = 0.05 // 5 %
const taxa_residual = 0.01 // 1% agentes que permanecem contaminados
const distancia_contaminacao = 10 // distancia na qual um agente contamina o outro
const tempo_simulacao_maximo = 30 * tempo_medicao // 30 dias
const taxa_mortalidade = 0.05 // 5 % de mortalidade
const taxa_imunidade_natural = 0.05 // 5 % de assintomáticos

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
