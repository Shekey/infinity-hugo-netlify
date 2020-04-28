// JS Goes here - ES6 supported

/* global emailjs */

// import "./scss/main.scss";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

const testForm = document.querySelector('form[name="test"]');
console.log(testForm);
emailjs.init("user_c75ZQ5mUcKmKtLlmZeub4");


// function showSuccess() {
//   testForm.classList.add("is-hidden");
// }

// function showError(err) {
//   // eslint-disable-next-line no-console
//   console.log(err);
//   testForm.classList.add("is-hidden");
// }

// function sendNetlifyRequest(actionUrl) {
//   const formData = new FormData(testForm);
//   fetch(actionUrl, {
//     method: "post",
//     headers: {
//       Accept: "application/x-www-form-urlencoded;charset=UTF-8",
//       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//     },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then((response) => {
//       if (response.ok) {
//         showSuccess();
//       } else {
//         showError();
//       }
//     })
//     .catch((err) => {
//       showError(err);
//     });
// }

if (testForm) {
  testForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const actionUrl = testForm.getAttribute("action");
    // sendNetlifyRequest(actionUrl);
    let stringConcat = "{ ";
    var data = new FormData(testForm);
    for (const [name, value] of data) {
      stringConcat += `"${name}" : "${value}",`;
    }
    let paramsJson = stringConcat.slice(0, -1);
    paramsJson += "}";
    const JSONParams =  JSON.parse(paramsJson);
    console.log(JSONParams);
    emailjs.send("gmail", "template_oCYmOotE",  JSONParams)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        console.log("FAILED...", error);
      });
  });
}
