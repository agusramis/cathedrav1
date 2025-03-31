// Place all the behaviors and hooks related to the matching controller here.

//--- Sparklines
//= require jquery-sparkline/jquery.sparkline.min
//--- Flot
//= require flot/jquery.flot
//= require highcharts
//= require highcharts-more
//= require flot/jquery.flot.categories
//= require flot/jquery.flot.pie
//= require flot/jquery.flot.resize
//= require flot/jquery.flot.time
//= require jquery.flot.spline/jquery.flot.spline
//= require jquery.flot.tooltip/js/jquery.flot.tooltip.min
// --- EasyPie
//= require easy-pie-chart/dist/jquery.easypiechart.min
//--- Moment
//= require moment/min/moment-with-locales.min
//--- jQuery Vector map (only dashboard v3)
//= require ika.jvectormap/jquery-jvectormap-1.2.2.min
//= require ika.jvectormap/jquery-jvectormap-world-mill-en
//= require ika.jvectormap/jquery-jvectormap-us-mill-en
//--- Slimscroll
//= require jquery-slimscroll/jquery.slimscroll

$(document).ready(function () {
    moment.locale('es');
    Highcharts.chart('usocpu', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Uso de la CPU'
        },
        pane: {
            startAngle: -130,
            endAngle: 130,
            background: [{
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'porcentaje'
            },
            plotBands: [{
                from: 0,
                to: 40,
                color: '#55BF3B' // green
            }, {
                from: 40,
                to: 80,
                color: '#DDDF0D' // yellow
            }, {
                from: 80,
                to: 100,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Porcentaje',
            data: [0],
            tooltip: {
                valueSuffix: ' %'
            }
        }]

    }, function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0], newVal, inc = Math.round((Math.random() - 0.5) * 20);
                $.ajax({
                    url: '/uso_cpu',
                    type: 'GET',
                    dataType: 'json',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                    },
                    success: function (data) {
                        //console.log(data.uso_cpu)
                        // var json = JSON.parse(data);
                        point.update(data.uso_cpu);
                    },
                    error: function (xhr, status, response) {/* your error callback */
                    }
                })
            }, 4000);
        }
    })
});
