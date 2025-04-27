// dashboard.js

import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import "jquery-sparkline/jquery.sparkline.min";
import "flot/jquery.flot";
import "flot/jquery.flot.categories";
import "flot/jquery.flot.pie";
import "flot/jquery.flot.resize";
import "flot/jquery.flot.time";
import "jquery.flot.spline/jquery.flot.spline";
import "jquery.flot.tooltip/js/jquery.flot.tooltip.min";
import "easy-pie-chart/dist/jquery.easypiechart.min";
import moment from "moment/min/moment-with-locales.min";
import "ika.jvectormap/jquery-jvectormap-1.2.2.min";
import "ika.jvectormap/jquery-jvectormap-world-mill-en";
import "ika.jvectormap/jquery-jvectormap-us-mill-en";
import "jquery-slimscroll/jquery.slimscroll";

// Activamos highcharts-more
HighchartsMore(Highcharts);

// Código del dashboard
document.addEventListener("DOMContentLoaded", () => {
  moment.locale("es");

  Highcharts.chart(
    "usocpu",
    {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: { text: "Uso de la CPU" },
      pane: {
        startAngle: -130,
        endAngle: 130,
        background: [
          {
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, "#FFF"],
                [1, "#333"],
              ],
            },
            borderWidth: 0,
            outerRadius: "109%",
          },
          {
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, "#333"],
                [1, "#FFF"],
              ],
            },
            borderWidth: 1,
            outerRadius: "107%",
          },
          {},
          {
            backgroundColor: "#DDD",
            borderWidth: 0,
            outerRadius: "105%",
            innerRadius: "103%",
          },
        ],
      },
      yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: "auto",
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: "inside",
        minorTickColor: "#666",
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: "inside",
        tickLength: 10,
        tickColor: "#666",
        labels: { step: 2, rotation: "auto" },
        title: { text: "porcentaje" },
        plotBands: [
          { from: 0, to: 40, color: "#55BF3B" },
          { from: 40, to: 80, color: "#DDDF0D" },
          { from: 80, to: 100, color: "#DF5353" },
        ],
      },
      series: [
        {
          name: "Porcentaje",
          data: [0],
          tooltip: { valueSuffix: " %" },
        },
      ],
    },
    function (chart) {
      if (!chart.renderer.forExport) {
        setInterval(() => {
          const point = chart.series[0].points[0];
          $.ajax({
            url: "/uso_cpu",
            type: "GET",
            dataType: "json",
            beforeSend: (xhr) => {
              xhr.setRequestHeader(
                "X-CSRF-Token",
                $('meta[name="csrf-token"]').attr("content")
              );
            },
            success: (data) => {
              point.update(data.uso_cpu);
            },
            error: (xhr, status, response) => {
              console.error("Error fetching CPU usage");
            },
          });
        }, 4000);
      }
    }
  );
});
