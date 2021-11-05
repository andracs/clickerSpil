let prisObj = {};
let roundMseconds = 500;
var antalGulerod = 0;

onmessage = function(e) {
  // console.log('Worker: Message received from main script' + e.data);
  antalGulerod = e.data;
}

function timedCount() {
  prisObj.maskine = 50 + (Math.random()*20-10);
  prisObj.gulerod = (Math.cbrt(Math.cbrt(antalGulerod))/10+(Math.random()-0.5)/12)/5;
  prisObj.pose = 10;
  prisObj.solgt = Math.random(antalGulerod);
  postMessage(prisObj);
  setTimeout("timedCount()",roundMseconds);
}

timedCount();
