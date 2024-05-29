"use strict";

if (!localStorage.getItem("step")) {
  localStorage.setItem("step", 0);
}

step = localStorage.getItem("step");
var currentTab = step; // Current tab is set to be the first tab (0)

showTab(currentTab); // Display the current tab

function showTab(n) {
  for (i = 0; i < parseInt(currentTab); i++) {
    document.getElementsByClassName("step")[i].className += " finish";
  } // This function will display the specified tab of the form ...


  var x = document.getElementsByClassName("tab");
  x[n].style = "display:block"; // ... and fix the Previous/Next buttons:

  document.getElementById("prevBtn").style.display = "none";

  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "VALIDER";
  } else {
    document.getElementById("nextBtn").innerHTML = "SUIVANT";
  } // ... and run a function that displays the correct step indicator:


  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab"); // Exit the function if any field in the current tab is invalid:

  if (n == 1 && !validateForm()) return false; // Hide the current tab:

  x[currentTab].style.display = "none"; // Increase or decrease the current tab by 1:

  currentTab = parseInt(currentTab) + n;
  console.log(currentTab);
  localStorage.setItem("step", currentTab); // if you have reached the end of the form... :

  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  } // Otherwise, display the correct tab:


  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
      y,
      i,
      valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input"); // A loop that checks every input field in the current tab:

  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" || y[i].checkValidity() == false) {
      // add an "invalid" class to the field:
      y[i].className += " invalid"; // and set the current valid status to false:

      valid = false;
    }
  } // If the valid status is true, mark the step as finished and valid:


  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
      x = document.getElementsByClassName("step");
  var y = document.getElementsByClassName("tab");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    y[i].className = y[i].className.replace(" active", "");
  } //... and adds the "active" class to the current step:


  x[n].className += " active";
  y[n].className += " active";
} //


function get(eId) {
  return document.getElementById(eId);
}

;

function verify(eId, eVal) {
  if (eVal != get(eId).value) {
    alert('input must contain "' + eVal + '"!');
    return false;
  } else return true;
}

;

function verifySubmit(eId, eVal) {
  if (verify(eId, eVal)) get(eId).parentNode.submit();
}

; //
//

function lightUp() {
  document.querySelector("#head").style = "background-color: #057b29";
  setTimeout(function () {
    document.querySelector("#head").style = "background-color: #161616";
  }, 1000);
}

document.querySelector(".ndc").addEventListener('click', function () {
  document.getElementById("inp1").setAttribute("value", "11GHJX");
  lightUp();
});
document.querySelector(".ndc2").addEventListener('click', function () {
  document.getElementById("inp1").setAttribute("value", "11GHJX");
  lightUp();
});