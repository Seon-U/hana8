const $frm = document.getElementById("frm");
const $buttons = document.querySelector(".buttons");
const $email = document.getElementById("email");
const $passwd = document.getElementById("passwd");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// process.env.NODE_ENV ===
// if (process.env.NODE_ENV === 'development') {
// if (process.env.NODE_ENV !== "product") {
$email.value = localStorage.getItem("login-email");
// $email.value = "email@email.com";
// $passwd.value = "121212";
// }

$frm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const email = $email.value;
  const passwd = $passwd.value;
  if (!email || !emailRegex.test(email)) {
    alert("Input the email address!");
    $email.select().focus();
    return;
  }

  if (!passwd || passwd.length < 6) {
    alert("Input the password over 6 characters");
    $passwd.select().focus();
    return;
  }

  localStorage.setItem("login-email", email);
  // [...document.getElementsByClassName("buttons")].forEach(
  [...document.getElementsByTagName("input")].forEach(
    (inp) => (inp.style.display = "none")
  );
  $buttons.style.display = "none";
  document.querySelector("#sign-out").style.display = "block";

  const $div = document.createElement("div");
  $div.innerHTML = `<p class="">${email}</p>`;
});

function toggleInputsAndButtons() {
  const displayState = $buttons.style.display === "none" ? "block" : "none";
  [...document.getElementsByTagName("input")].forEach(
    (inp) => (inp.style.display = displayState)
  );
  $buttons.style.display = displayState;
  document.getElementById("sign-out").style.display =
    displayState === "none" ? "block" : "none";
}

const $sign_out = document.getElementById("sign-out");

document.getElementById("btn-logout").addEventListener("click", (e) => {
  e.preventDefault();
  toggleInputsAndButtons();
});
