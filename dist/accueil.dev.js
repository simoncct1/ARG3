"use strict";

//influence
var data = [{
  year: 2010,
  count: 0.27
}, {
  year: 2011,
  count: 0.25
}, {
  year: 2012,
  count: 0.23
}, {
  year: 2013,
  count: 0.35
}, {
  year: 2014,
  count: 0.56
}, {
  year: 2015,
  count: 0.33
}, {
  year: 2016,
  count: 0.35
}, {
  year: 2017,
  count: 0.4
}, {
  year: 2018,
  count: 0.42
}, {
  year: 2019,
  count: 0.45
}, {
  year: 2020,
  count: 0.6
}, {
  year: 2021,
  count: 0.62
}, {
  year: 2022,
  count: 0.78
}, {
  year: 2023,
  count: 0.64
}];
var influence = new Chart(document.getElementById('acquisitions'), {
  type: 'line',
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#FAFAFA",
          font: {
            size: 18,
            family: 'Montserrat'
          }
        }
      }
    },
    "responsive": true,
    "maintainAspectRatio": false,
    layout: {
      padding: 12
    },
    scales: {
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: "#FAFAFA",
          font: {
            size: 12
          },
          stepSize: 0.5,
          beginAtZero: true
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: "#FAFAFA",
          font: {
            size: 12
          },
          stepSize: 0.1,
          beginAtZero: true
        }
      }
    }
  },
  data: {
    labels: data.map(function (row) {
      return row.year;
    }),
    datasets: [{
      backgroundColor: "#52057B",
      borderColor: "#FAFAFA",
      label: 'Niveau d\'influence',
      data: data.map(function (row) {
        return row.count;
      }),
      fill: true
    }]
  }
});
influence.tooltip.chart._metasets[0].data[5].$context.raw = 6;
influence.tooltip.chart._metasets[0].data[5].$context.parsed.y = 6; //missions 

var data2 = {
  labels: ['Missions réussies', 'Missions en cours', 'Missions échouées'],
  datasets: [{
    label: 'Missions de la F.N.D.P',
    data: [84, 12, 8],
    backgroundColor: ['#52057B', '#892CDC', '#BC6FF1'],
    hoverOffset: 4
  }]
};
var config = {
  type: 'pie',
  data: data2
};
var pourcentage = new Chart(document.getElementById('pourcentage'), {
  type: 'pie',
  data: data2,
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: function formatter(value, ctx) {
          var datasets = ctx.chart.data.datasets;

          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            var sum = datasets[0].data.reduce(function (a, b) {
              return a + b;
            }, 0);

            var _percentage = Math.round(value / sum * 105) + '%';

            return _percentage;
          } else {
            return percentage;
          }
        },
        color: '#FAFAFA',
        anchor: 'end',
        align: 'start',
        offset: 5,
        font: {
          size: 13,
          family: 'Montserrat'
        }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        position: 'bottom',
        labels: {
          color: "#FAFAFA",
          font: {
            size: 12,
            family: 'Montserrat'
          }
        }
      },
      title: {
        display: true,
        text: 'Missions de la F.N.D.P (%)',
        color: "#FAFAFA",
        font: {
          size: 18,
          family: 'Montserrat',
          weight: 400
        }
      }
    },
    layout: {
      padding: 12
    }
  }
});