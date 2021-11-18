import Highcharts from 'highcharts';

export const updateScatterOptions = (data) => ({
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
      data: data

  }]
})