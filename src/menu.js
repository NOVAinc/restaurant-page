import stew from "./assets/hearty-stew.jpg";
import macncheese from "./assets/mac-and-cheese.jpg";
import casserole from "./assets/casserole.jpg";

export default () => {
  let contents = `
  <h1>Our options</h1>
  <div class="menu-entry">
  <img src="${stew}" alt="" class="menu-photo">
  <p>This hearty stew will take you by your hand straight back to your childhood.</p>
</div>
<div class="menu-entry">
  <img src="${macncheese}" alt="" class="menu-photo">
  <p>Our all-time classic mac and cheese special is sure to bring the golden color back to any gray day.</p>
</div>
<div class="menu-entry" >
  <img src="${casserole}" alt="" class="menu-photo">
  <p>This casserole is not for the faint of heart. Because it will squeeze yours as it takes you down memory lane straight to the first time you tasted the special casserole at home</p>
</div>
  `;

  document.getElementById("content").innerHTML = contents;
};
