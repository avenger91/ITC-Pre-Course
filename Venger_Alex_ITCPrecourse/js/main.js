// card function

const GITHUB_URL = "https://api.github.com/users/avenger91";
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.src = data.avatar_url;
    profileName.innerHTML = data.name;
  });

// footer array []

const codingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"];
const myCode = codingLanguages.slice(0, 2);
const myCodeArray = myCode.join(", ");
let addJava = codingLanguages[2];

document.getElementById("code-text").innerHTML =
  myCodeArray + " and " + addJava;

// submit button using conditional if statements for each element/input;

let firstnameInput = false;
let emailInput = false;
let commentInput = false;
let menuDropInput = false;
const submitButton = document.getElementById("submit-button");
const firstName = document.getElementById("firstname");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const menuDrop = document.getElementById("abtype");

firstName.oninput = function () {
  firstnameInput = true;
  if (emailInput == true && commentInput == true && menuDropInput == true) {
    submitButton.disabled = false;
  }
};
email.oninput = function () {
  emailInput = true;
  if (firstnameInput == true && commentInput == true && menuDropInput == true) {
    submitButton.disabled = false;
  }
};
comments.oninput = function () {
  commentInput = true;
  if (firstnameInput == true && emailInput == true && menuDropInput == true) {
    submitButton.disabled = false;
  }
};
menuDrop.oninput = function () {
  menuDropInput = true;
  if (firstnameInput == true && emailInput == true && commentInput == true) {
    submitButton.disabled = false;
  }
};

submitButton.disabled = true;
