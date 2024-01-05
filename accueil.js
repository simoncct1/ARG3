
//influence
  const data = [
    { year: 2012, count: 0.13 },
    { year: 2013, count: 0.25 },
    { year: 2014, count: 0.56 },
    { year: 2015, count: 0.33 },
    { year: 2016, count: 0.35 },
    { year: 2017, count: 0.4 },
    { year: 2018, count: 0.42 },
    { year: 2019, count: 0.45 },
    { year: 2020, count: 0.6 },
    { year: 2021, count: 0.62 },
    { year: 2022, count: 0.78 },
    { year: 2023, count: 0.64 },
    { year: 2024, count: 0.74 },
  ];
  const influence = new Chart(
    document.getElementById('acquisitions'),
    {
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
            size: 12, 
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
      }}
      },
      
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            backgroundColor: "#52057B",
            borderColor: "#FAFAFA",
            label: 'Niveau d\'influence',
            data: data.map(row => row.count),
            fill: true,
          }
        ]
      }
    }
    
  );

influence.tooltip.chart._metasets[0].data[5].$context.raw = 6;
influence.tooltip.chart._metasets[0].data[5].$context.parsed.y = 6;

//missions 
const data2 = {
    labels: [
      'Missions réussies',
      'Missions en cours',
      'Missions échouées'
    ],
    datasets: [{
      label: 'Missions de la F.N.D.P',
      data: [61, 12, 8],
      backgroundColor: [
        '#52057B',
        '#892CDC',
        '#BC6FF1'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'pie',
    data: data2,
  };

  const pourcentage = new Chart(
    document.getElementById('pourcentage'),
    {
    type: 'pie',
    data : data2,
    plugins: [ChartDataLabels],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {

                    let datasets = ctx.chart.data.datasets;
           
                    if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                      let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                      let percentage = Math.round((value / sum) * 105) + '%';
                      return percentage;
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
                enabled: false,
           
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
            text: 'Historique de missions (%)',
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
        },
      },
    }
  );

  // recrues
  const mixedChart = new Chart(document.getElementById('recrues'), {
    data: {
        datasets: [
            {
                type: 'bar',
                label: 'Nouveaux membres',
                data: [12, 8, 28, 8, 2, 0, 14, 1, 11, 20, 19, 34],
                backgroundColor: "#52057B",
            },{
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
                  family: 'Montserrat'
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
                  size: 12, 
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
            }},
        max: 90,
        borderWidth : 2,
        borderColor: "#FAFAFA",
        responsive: true,
        maintainAspectRatio: false}
});