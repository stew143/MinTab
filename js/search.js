const f = document.getElementById("form");
const q = document.getElementById("query");
const search = "https://www.google.com/;

function submitted(event) {
  event.preventDefault();
  const url = search + q.value + "&ia=web";
  window.open(url, "_self");
}

f.addEventListener("submit", submitted);
