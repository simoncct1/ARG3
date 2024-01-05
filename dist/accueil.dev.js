"use strict";

(function _callee() {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = [{
            year: 2010,
            count: 0.2
          }, {
            year: 2011,
            count: 0.25
          }, {
            year: 2012,
            count: 0.23
          }, {
            year: 2013,
            count: 0.3
          }, {
            year: 2014,
            count: 0.36
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
            count: 0.67
          }, {
            year: 2023,
            count: 0.64
          }];
          new Chart(document.getElementById('acquisitions'), {
            type: 'line',
            options: {
              "responsive": true,
              "maintainAspectRatio": false,
              layout: {
                padding: 20
              }
            },
            data: {
              labels: data.map(function (row) {
                return row.year;
              }),
              datasets: [{
                backgroundColor: "#52057B",
                borderColor: "#892CDC",
                label: 'Niveau d\'influence',
                data: data.map(function (row) {
                  return row.count;
                })
              }]
            }
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
})();