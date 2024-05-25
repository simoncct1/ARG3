"use strict";

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
function postFormDataAsJson(_ref) {
  var url, formData, plainFormData, formDataJsonString, fetchOptions, response, errorMessage;
  return regeneratorRuntime.async(function postFormDataAsJson$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _ref.url, formData = _ref.formData;
          plainFormData = Object.fromEntries(formData.entries());
          formDataJsonString = JSON.stringify(plainFormData);
          fetchOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: formDataJsonString
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(url, fetchOptions));

        case 6:
          response = _context.sent;

          if (response.ok) {
            _context.next = 14;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(response.text());

        case 10:
          errorMessage = _context.sent;
          throw new Error(errorMessage);

        case 14:
          window.location.replace('index.html');

        case 15:
          return _context.abrupt("return", response.json());

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * 
 *
 * 
 *
 * @param {SubmitEvent} event
 */


function handleFormSubmit(event) {
  var form, url, formData, responseData, token;
  return regeneratorRuntime.async(function handleFormSubmit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          form = event.currentTarget;
          url = form.action;
          _context2.prev = 3;
          formData = new FormData(form);
          _context2.next = 7;
          return regeneratorRuntime.awrap(postFormDataAsJson({
            url: url,
            formData: formData
          }));

        case 7:
          responseData = _context2.sent;
          console.log(responseData);
          token = responseData.access_token;
          localStorage.setItem("accessToken", token);
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          document.getElementById('messageokok').style.color = 'red';
          document.getElementById('messageokok').innerHTML = 'Veuillez ré-essayer';

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 13]]);
}

var exampleForm = document.getElementById("login-form");
exampleForm.addEventListener("submit", handleFormSubmit);