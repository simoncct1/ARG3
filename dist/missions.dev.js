"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("three"));

var _OrbitControls = require("three/examples/jsm/controls/OrbitControls.js");

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader.js");

var _RGBELoader = require("three/examples/jsm/loaders/RGBELoader.js");

var _threeInteractive = require("/node_modules/three.interactive/build/three.interactive.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.getElementById('map').addEventListener('click', function (e) {
  document.getElementById("open").style.display = "none";
  document.getElementById("tutomap").style.display = "none"; // create a scene, that will hold all our elements such as objects, cameras and lights.

  var scene = new THREE.Scene(); // create a camera, which defines where we're looking at

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100); // tell the camera where to look

  camera.position.set(0, 15, 0);
  var elem = document.createElement('div');
  document.getElementById("map").appendChild(elem);
  var renderer = new THREE.WebGLRenderer();
  var container = document.getElementById('mapdisplay');
  var width = container.offsetWidth;
  var height = container.offsetHeight;
  renderer.setSize(width, height); // add the output of the render function to the HTML

  container.appendChild(renderer.domElement);
  var loader = new _GLTFLoader.GLTFLoader();
  var pmremGenerator = new THREE.PMREMGenerator(renderer);
  var map = new THREE.Object3D();
  var flagis;
  var flagind;
  var flagtex;
  var flagarg;
  var flagbe;
  var other;
  loader.load("/assets/mappp.glb", function (gltf) {
    map = gltf.scene;
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    scene.add(gltf.scene); //flags

    var flags = scene.children[4].children;
    var flagsliced = flags.slice(0, 5); //  console.log(flagsliced[1]);
    //  flagsliced[1].children[0].material.emissive = new THREE.Color( 0xbb0000 );
    //  flagsliced[1].children[0].material.emissiveIntensity = 0.01;
    //el dictador

    flagarg = scene.children[4].children[0];
    interactionManager.add(flagarg);
    flagarg.addEventListener('click', function (event) {
      var hdriLoader = new _RGBELoader.RGBELoader();
      hdriLoader.load('assets/arg.hdr', function (texture) {
        var envMap = pmremGenerator.fromEquirectangular(texture).texture;
        texture.dispose();
        scene.environment = envMap;
        scene.background = envMap;
        document.querySelector(".oper").style.opacity = "1";
        document.querySelector(".oper p").innerHTML = "Opération : CHAINSAW";
      });
    }); //boh

    flagtex = scene.children[4].children[1];
    interactionManager.add(flagtex);
    flagtex.addEventListener('click', function (event) {
      var hdriLoader = new _RGBELoader.RGBELoader();
      hdriLoader.load('assets/tex.hdr', function (texture) {
        var envMap = pmremGenerator.fromEquirectangular(texture).texture;
        texture.dispose();
        scene.environment = envMap;
        scene.background = envMap;
        document.querySelector(".oper").style.opacity = "1";
        document.querySelector(".oper p").innerHTML = "Opération : REVIVAL";
      });
    }); //lesnappes situation

    flagbe = scene.children[4].children[2];
    interactionManager.add(flagbe);
    flagbe.addEventListener('click', function (event) {
      var hdriLoader = new _RGBELoader.RGBELoader();
      hdriLoader.load('assets/bel.hdr', function (texture) {
        var envMap = pmremGenerator.fromEquirectangular(texture).texture;
        texture.dispose();
        scene.environment = envMap;
        scene.background = envMap;
        document.querySelector(".oper").style.opacity = "1";
        document.querySelector(".oper p").innerHTML = "Opération : PHREA";
      });
    }); //free palestine

    flagis = scene.children[4].children[3];
    interactionManager.add(flagis);
    flagis.addEventListener('click', function (event) {
      var hdriLoader = new _RGBELoader.RGBELoader();
      hdriLoader.load('assets/pal.hdr', function (texture) {
        var envMap = pmremGenerator.fromEquirectangular(texture).texture;
        texture.dispose();
        scene.environment = envMap;
        scene.background = envMap;
        document.querySelector(".oper").style.opacity = "1";
        document.querySelector(".oper p").innerHTML = "Opération : OLIVIERS";
      });
    }); //flagind

    flagind = scene.children[4].children[4];
    interactionManager.add(flagind);
    flagind.addEventListener('click', function (event) {
      var hdriLoader = new _RGBELoader.RGBELoader();
      hdriLoader.load('assets/ind.hdr', function (texture) {
        var envMap = pmremGenerator.fromEquirectangular(texture).texture;
        texture.dispose();
        scene.environment = envMap;
        scene.background = envMap;
        document.querySelector(".oper").style.opacity = "1";
        document.querySelector(".oper p").innerHTML = " Opération : KOCHI";
      });
    }); //ctt noir

    var others = scene.children[4].children;
    var othersliced = others.slice(5, 26);

    for (var i = 0; i <= 20; i++) {
      interactionManager.add(othersliced[i]);
      othersliced[i].addEventListener('click', function (event) {
        scene.environment = null;
        scene.background = "#OOOOOO";
        document.querySelector(".oper").style.opacity = "0";
        document.querySelector(".oper p").innerHTML = "Opération : KOCHI";
      });
    }
  }, function onError(err) {});
  var light = new THREE.PointLight(0xffffff, 20, 1800);
  light.position.set(0, 10, 0);
  scene.add(light);
  var light4 = new THREE.PointLight(0xBC6FF1, 15, 1800);
  light4.position.set(0, 10, 0);
  scene.add(light4);
  var light2 = new THREE.PointLight(0xBC6FF1, 15, 1800);
  light2.position.set(-20, 10, 0);
  scene.add(light2);
  var light3 = new THREE.PointLight(0xBC6FF1, 15, 1800);
  light3.position.set(20, 10, 0);
  scene.add(light3);
  var interactionManager = new _threeInteractive.InteractionManager(renderer, camera, renderer.domElement);
  var controls = new _OrbitControls.OrbitControls(camera, renderer.domElement);
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
  };
  controls.update();

  function tick() {
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
  }

  tick();
}, {
  once: true
}); // stats

var ctx = document.getElementById("statspersos");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Missions réussies', 'Missions en cours', 'Missions échouées'],
    datasets: [{
      data: [17, 5, 3],
      backgroundColor: ['#52057B', '#892CDC', '#BC6FF1'],
      borderColor: "none",
      borderWidth: 0
    }]
  },
  options: {
    cutoutPercentage: 40,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255,255,255)',
          position: 'left'
        }
      }
    }
  }
});