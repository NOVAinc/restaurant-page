import restaurant from "./assets/page-background-landing.png";

export default () => {
  let contents = `
  <h1>Captured Flavors</h1>
  <img src=${restaurant} id="restaurant-facade">
  <p>Captured flavors is a mom and pop's restaurant specialized in capturing typical home foods flavors. You will find everything from hearty stews, to mac and cheese and beyond! </p>
  `;

  document.getElementById("content").innerHTML = contents;
};
