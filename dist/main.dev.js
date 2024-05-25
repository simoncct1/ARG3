"use strict";

// document.querySelector(".urgent").addEventListener('click' , function(e){
//     document.getElementById("accesurgent").style.display ='block'
// })
document.querySelector("title").innerHTML = "Accueil";
document.getElementById('profil').style.display = 'none';
document.getElementById('missions').style.display = 'none'; // document.querySelector(".Accueil").classList.add('isOn');

document.getElementById("Accueil").addEventListener('click', function (e) {
  document.querySelector("title").innerHTML = this.innerHTML; // this.style.color = "#BC6FF1"
  // document.getElementById("Profil").style.color = "#FAFAFA";
  // document.getElementById("Mission").style.color = "#FAFAFA";

  document.getElementById('accueil').style.display = 'grid';
  document.getElementById('profil').style.display = 'none';
  document.getElementById('missions').style.display = 'none';
});
document.getElementById("Profil").addEventListener('click', function (e) {
  document.querySelector("title").innerHTML = this.innerHTML; // this.style.color = "#BC6FF1"
  // document.getElementById("Accueil").style.color = "#FAFAFA";
  // document.getElementById("Mission").style.color = "#FAFAFA";

  document.getElementById('accueil').style.display = 'none';
  document.getElementById('profil').style.display = 'grid';
  document.getElementById('missions').style.display = 'none';
});
document.getElementById("Missions").addEventListener('click', function (e) {
  document.querySelector("title").innerHTML = this.innerHTML; // this.style.color = "#BC6FF1"
  // document.getElementById("Profil").style.color = "#FAFAFA";
  // document.getElementById("Accueil").style.color = "#FAFAFA";

  document.getElementById('accueil').style.display = 'none';
  document.getElementById('profil').style.display = 'none';
  document.getElementById('missions').style.display = 'grid';
});