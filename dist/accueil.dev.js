"use strict";

//influence
var data = [{
  year: 2012,
  count: 0.13
}, {
  year: 2013,
  count: 0.25
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
}, {
  year: 2024,
  count: 0.74
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
            family: 'Montserrat',
            weight: 600
          }
        }
      }
    },
    "responsive": true,
    "maintainAspectRatio": false,
    pointRadius: 6,
    pointBackgroundColor: "#BC6FF1",
    borderWidth: 2,
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
    data: [61, 12, 8],
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
        text: 'Missions 2023-24',
        color: "#FAFAFA",
        font: {
          size: 18,
          family: 'Montserrat',
          weight: 600
        }
      }
    },
    layout: {
      padding: 12
    }
  }
}); // recrues

var mixedChart = new Chart(document.getElementById('recrues'), {
  data: {
    datasets: [{
      type: 'bar',
      label: 'Nouveaux membres',
      data: [12, 8, 28, 8, 2, 0, 14, 1, 11, 20, 19, 34],
      backgroundColor: "#52057B"
    }, {
      type: 'bar',
      label: 'Total de membres',
      data: [12, 20, 41, 27, 34, 20, 23, 17, 25, 36, 52, 79],
      backgroundColor: "#BC6FF1"
    }],
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020']
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#FAFAFA",
          font: {
            size: 14,
            family: 'Montserrat',
            weight: 600
          }
        }
      }
    },
    layout: {
      padding: 5
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
          stepSize: 10,
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
          stepSize: 10,
          beginAtZero: true
        }
      }
    },
    max: 90,
    borderWidth: 2,
    borderColor: "#FAFAFA",
    responsive: true,
    maintainAspectRatio: false
  }
}); //calendar 

var calB = new Calendar({
  id: "#calendar",
  primaryColor: "#BC6FF1",
  headerColor: "#FAFAFA",
  weekdaysColor: "#FAFAFA",
  fontFamilyHeader: 'Montserrat',
  fontFamilyWeekdays: 'Montserrat',
  fontFamilyBody: "Montserrat",
  customWeekdayValues: ["D", "L", "M", "M", "J", "V", "S"],
  eventsData: [{
    id: 1,
    name: "118 ans",
    start: "2024-02-07T06:00:00",
    end: "2024-02-07T20:30:00"
  }, {
    id: 2,
    name: "OP. SINQ.",
    start: "2024-01-14T10:00:00",
    end: "2024-01-19T11:30:00"
  }],
  dateChanged: function dateChanged(currentDate, events) {
    var eventDisplay = document.getElementById("events-display");
    var html = "Rien à la date sélectionnée";
    events.forEach(function (event) {
      var from = new Date(event.start).toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short"
      });
      var to = new Date(event.end).toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short"
      });
      html = "\n        <div class=\"event\">\n          <div class=\"event__name\">".concat(event.name, "</div>\n          <div class=\"event__datestart\">Du: ").concat(from, "</div>\n          <div class=\"event__dateend\">Au: ").concat(to, "</div>\n        </div>\n      ");
    });
    eventDisplay.innerHTML = html;
  }
});