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
setInterval(getDate, 50000); //LOGOS

document.querySelector(".logout").addEventListener('click', function (e) {
  window.location.replace('/index.html');
}); // document.querySelector(".veille").addEventListener('click', function(e){
//     document.getElementById("accueil").classList.toggle('veille');
//     document.getElementById("profil").classList.toggle('veille');
//     document.getElementById("missions").classList.toggle('veille');
//     this.classList.toggle('veilleok');
// })
// document.querySelector(".helper").addEventListener('click', function(e){
//     document.getElementById("code").classList.toggle('active');
//     this.classList.toggle('veilleok');
// })

var error = [{
  "message": "899eb968fc8967ad",
  "indice": "Cherchez le mauvais chiffre"
}, {
  "message": "880ccb4bf132d864",
  "indice": "Il y en a un peu trop"
}, {
  "message": "a4ccdb52740e857f",
  "indice": "Les ? membres du conseil"
}, {
  "message": "c92acdcae786d1dc",
  "indice": "Fibonacci"
}, {
  "message": "bf4f0ee0286608d8",
  "indice": "Multiplication du turnover"
}, {
  //sol1
  "message": "6bb631489e466b8",
  "indice": "65482"
}, {
  "message": "14cd5b2694560516",
  "indice": "Réléchir à ses actes"
}, {
  "message": "24e65da8daf01423",
  "indice": "Et à leurs conséquences"
}, {
  "message": "b49f8b2d85299d5",
  "indice": "Regarder les sanctions"
}, {
  //sol2
  "message": "3d36b0605d04a5915",
  "indice": "ADEHF"
}, {
  "message": "8fe29a5760a42f8da",
  "indice": "Clearview"
}, {
  "message": "0d4ce4eba017b76",
  "indice": "Caméra"
}, {
  "message": "740dfc6da94a0fab",
  "indice": "Bien observer son environnement"
}, {
  //sol3
  "message": "8fe29a5760a42f8da",
  "indice": "3KOA2"
}, {
  "message": "000f883f56423d11",
  "indice": "Où?"
}, {
  "message": "38cdfa01267b4aa5",
  "indice": "Shanghai"
}, {
  "message": "8f1a5265ae802a65",
  "indice": "Gratte-ciel"
}, {
  //solfin
  "message": "fdd0000c5ed009c7",
  "indice": "JINMAO"
}]; // const form = document.getElementById('myForm');
// form.addEventListener('submit', function(event) {
// event.preventDefault();
// const indice = document.getElementById('indicet');
// const input = document.getElementById('error').value;
// for (let elem of error) {
//     if(elem.message == input){
//        indice.innerHTML += 'Indice : ' + elem.indice;
//     }
// }
// console.log(indice.innerHTML)
// if(indice.innerHTML == ''){
//     indice.innerHTML += 'Code inconnu'
// }
// document.getElementById("indice").classList.toggle('active');
// });
//NEWS

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
      }, i * 20000);
    };
  };

  titles.forEach(delayLoop(display, 1000));
})["catch"](function (error) {// Handle errors here
});