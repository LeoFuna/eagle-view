import Highcharts from 'highcharts';

export const scatterOptions = {
  chart: {
      type: 'scatter',
      zoomType: 'xy'
  },
  title: {
      text: 'Saúde'
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      title: {
          enabled: true,
          text: ''
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
  },
  yAxis: {
      title: {
          text: 'Saúde (%)'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 50,
      y: 0,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1
  },
  plotOptions: {
      scatter: {
          marker: {
              radius: 5,
              states: {
                  hover: {
                      enabled: true,
                      lineColor: 'rgb(100,100,100)'
                  }
              }
          },
          states: {
              hover: {
                  marker: {
                      enabled: false
                  }
              }
          },
          tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x} un, {point.y} %'
          }
      }
  },
  series: [{
      name: 'Ativo',
      color: 'rgba(223, 83, 83, .5)',
      data: [[1, 70], [2, 73.7], [3, 90.9], [4, 88.3], [5, 60.4], [6, 91.2], [7, 53.8], [8, 76.12], [9, 66.09], [10, 50.13]]

  }]
}