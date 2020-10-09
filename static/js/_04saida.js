class Output{
    constructor(){
        this.canvas = document.getElementById("outgraph")
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
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: lista_tempos,
                    datasets: [{
                        label: 'Curva Epidêmica Simulada',
                        data: lista_casos,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(54, 162, 235, 0.9)',
                            'rgba(255, 206, 86, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(153, 102, 255, 0.9)',
                            'rgba(255, 159, 64, 0.9)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        } 
    }
}