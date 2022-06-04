function validateForm(e) {
  e.preventDefault();
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const country = document.querySelector("#country").value;
  const city = document.querySelector("#city").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;
  const number = document.querySelector("#number").value;

  if (fname == "") {
    alert("Please fill first name.");
    return false;
  }
  if (lname == "") {
    alert("Please fill fast name.");
    return false;
  }
  if (country == "") {
    alert("Please fill country name");
    return false;
  }
  if (city == "") {
    alert("Please fill City name");
    return false;
  }
  if (email == "") {
    alert("Please fill Email");
    return false;
  }
  if (address == "") {
    alert("Please fill address");
    return false;
  }
  if (number == "") {
    alert("Please fill number");
    return false;
  }
  return true;
}

const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", (e) => {
  if (validateForm(e) == true) {
    window.location.href = "/SubmitInquery.html";
  }
});
