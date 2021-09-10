/** @format */

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXphY3AiLCJhIjoiY2twdXVvbzRkMGU4OTJ2bXpxcG5pdmNnMCJ9.Eq2bVPGLkPOY_Wo27t-k4A";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/izacp/ckrirwo8w5qyu18panffnfq0a",
  center: [-74.5, 40],
});

var marker1 = new mapboxgl.Marker();

getLoc();

async function getLoc() {
  marker1.remove();
  let url = "https://api.wheretheiss.at/v1/satellites/25544";
  let response = await fetch(url);
  let jsonResponse = await response.json();

  let lat = jsonResponse.latitude;
  let lon = jsonResponse.longitude;
  console.log(lat, lon);
  marker1.setLngLat([lon, lat]).addTo(map);
}

setInterval(getLoc, 2000);
