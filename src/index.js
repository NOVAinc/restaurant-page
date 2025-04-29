import "./styles.css";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import loadHome from "./home.js";

console.log(typeof restaurant);

loadHome();

document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("menu").addEventListener("click", loadMenu);
document.getElementById("contact").addEventListener("click", loadContact);
