import map from "./assets/map.jpg";

export default () => {
  let contents = `
  <h1>Find us</h1>
  <img src=${map} id="map">
  <p>Just one block away from the train station </p>
  <p>Open Mon through Fri from 9am to 5pm </p>
  `;

  document.getElementById("content").innerHTML = contents;
};
