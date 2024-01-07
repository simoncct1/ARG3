"use strict";

//datetime
function getDate() {
  var today = new Date();
  var date = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
  var time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2);
  var dateTime = date + ' ' + time;
  document.getElementById('datetime').innerHTML = date + " : " + time;
  console.log(dateTime);
}

getDate();
setInterval(getDate, 60000); //LOGOS

document.querySelector(".veille").addEventListener('click', function (e) {
  document.getElementById("main").classList.toggle('veille');
  this.classList.toggle('veilleok');
}); //NEWS

var titles = [];
var output = document.querySelector("#news");

var display = function display(s) {
  return output.innerHTML = '<span style="color:#BC6FF1">Actualité : </span>' + s;
};

axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=jzelOxun4r6TDK56JVOGDAKFbLZ0AE6p').then(function (response) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = response.data.results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;
      titles.push(elem.title);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var delayLoop = function delayLoop(fn, delay) {
    return function (title, i) {
      setTimeout(function () {
        display(title);
      }, i * 10000);
    };
  };

  titles.forEach(delayLoop(display, 1000));
})["catch"](function (error) {// Handle errors here
});