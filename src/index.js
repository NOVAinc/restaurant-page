import "./styles.css";
import bfgImage from "./assets/page-background-landing.jpg";

console.log(typeof bfgImage);

let container = document.getElementById("content");

// Assign on-click behavior to buttons
document.getElementById("company").addEventListener("click", () => {
  let contents = `
  <img src=${bfgImage} id="bfg-bg">
  <p>Battle for Greece</p>
  `;

  container.innerHTML = contents;
});
document.getElementById("projects");
document.getElementById("jobs");
document.getElementById("about");
