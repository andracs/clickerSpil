var antalGulerod = 1;
var antalPlantemaskiner = 0;
var antalFrøposer = 10;
var antalFrøPerFrøpose = 100;
var antalLøseFrø = 0;
var prisGulerod = 0.01;
var prisFrøposer = 1;
var prisPlantemaskine = 50;
var pengepung = 300;

// Denne event sker, når siden er indlæst i browseren
window.addEventListener('DOMContentLoaded', (event) => {

  let prisWorker = new Worker("javascripts/prisgeneratorWorker.js");
  
  prisWorker.onmessage = function (event) {
    prisWorker.postMessage(antalGulerod);
    // console.log(event.data);
    // {maskine: 0.09192342812086998, gulerod: 0.000960210464954321, pose: 10, solgt: 0.41939787146795116}
    antalGulerod = antalGulerod - Math.round(event.data.solgt);
    prisPlantemaskine =  Math.round(event.data.maskine)
    pengepung = pengepung + Math.round(event.data.solgt) * event.data.gulerod;
    document.getElementById("antalGulerod").innerHTML = antalGulerod;
    document.getElementById("antalFrøposer").innerHTML = antalFrøposer;
    document.getElementById("pengepung").innerHTML = pengepung;
    document.getElementById("prisMaskine").innerHTML = prisPlantemaskine;
  };

});

document.getElementById("guleRodsKnap").addEventListener("click", () => {
  document.getElementById("antalGulerod").innerHTML = ++antalGulerod;
});

document.getElementById("gemCookie").addEventListener("click", () => {
  let cookieTekst = "antalGulerod=" + antalGulerod;
  document.cookie = cookieTekst;
});

document.getElementById("readCookie").addEventListener("click", () => {
  let cookieCount = document.cookie
    .split("; ")
    .find((row) => row.startsWith("antalGulerod="))
    .split("=")[1];
  document.getElementById("antalGulerod").innerHTML = parseInt(cookieCount);
  antalGulerod = parseInt(cookieCount);
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.getElementById("addPlanteMaskine").addEventListener("click", () => {
  if (prisPlantemaskine<pengepung)
  {
    pengepung = pengepung - prisPlantemaskine;
    let heartbeatWorker = new Worker("javascripts/heartbeatWorker.js");
  document.getElementById("antalPlantemaskiner").innerHTML = ++antalPlantemaskiner;
  heartbeatWorker.onmessage = function (event) {
    antalGulerod = antalGulerod + 1;
    document.getElementById("antalGulerod").innerHTML = antalGulerod; // event.data;
  };
}
});

document.getElementById("gemiDatabase").addEventListener("click", async () => {
  
  let gameObj = {};
  gameObj.name = document.getElementById("name").value;
  gameObj.gulerod = antalGulerod;
  gameObj.cash = pengepung;
  gameObj.maskiner = antalPlantemaskiner;
  gameObj.poser = antalFrøposer;
  console.log(gameObj);
  let url = "/saveGame";
  let response = await postData(url, gameObj);
  console.log("Response --> " + JSON.stringify(response));
  var currentDate = new Date();
  var saveTime =
    "Last Sync: " +
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  document.getElementById("gemt").innerHTML = "Gemt " + saveTime;
});

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log("Data --> " + JSON.stringify(data));
  return response.json(); // parses JSON response into native JavaScript objects
}

