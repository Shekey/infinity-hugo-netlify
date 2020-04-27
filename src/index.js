// JS Goes here - ES6 supported

import "./scss/main.scss";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

const testForm = document.querySelector('form[name="test"]');
console.log(testForm);

function showSuccess() {
  testForm.classList.add("is-hidden");
}

function showError(err) {
  // eslint-disable-next-line no-console
  console.log(err);
  testForm.classList.add("is-hidden");
}

function sendNetlifyRequest(actionUrl) {
  const formData = new FormData(testForm);
  fetch(actionUrl, {
    method: "post",
    headers: {
      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        showSuccess();
      } else {
        showError();
      }
    })
    .catch((err) => {
      showError(err);
    });
}

testForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const actionUrl = testForm.getAttribute("action");
  sendNetlifyRequest(actionUrl);
});

