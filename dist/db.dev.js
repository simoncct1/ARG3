"use strict";

var url = "https://api.conqueststories.be/api/user"; // API URL

var access_token = localStorage.getItem("accessToken");
var pic = localStorage.getItem("pp");
var id;
var badges = new Array();
var method = "GET"; // Request method, change for what's needed

document.getElementById("deco").addEventListener('click', function () {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("id");
});

function replace() {
  if (!access_token) {
    window.location.replace("/index.html");
  }
}

fetch(url, {
  method: method,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    'Authorization': 'Bearer ' + access_token
  }
}).then(function (response) {
  return response.json();
}).then(function (data) {
  if (!pic) {
    document.getElementById("pp").setAttribute('src', 'https://api.conqueststories.be/image/' + data.avatar);
    document.getElementById("pp2").setAttribute('src', 'https://api.conqueststories.be/image/' + data.avatar);
  } else {
    document.getElementById("pp").setAttribute('src', "/assets/fndplogov2.png");
  }

  localStorage.setItem("id", data.id);

  if (data.id) {
    document.getElementById("login-form").style.display = "none";
  }

  if (!data.id) {
    document.getElementById("wrapper").style.display = "none";
  }
})["catch"](function (error) {});