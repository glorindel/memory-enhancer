let poradie = [];
let dlzka = 3;
let kontrola_i = -1;
let body = 0;

function setScreen(id) {
  document.querySelectorAll('.screen').forEach((el)=>{el.style.display="none"});
  document.getElementById(id).style.display="block";
}
function showElement(id){
  document.getElementById(id).style.visibility="visible"
}
function hideElement(id){
  document.getElementById(id).style.visibility="hidden";
}
function setText(id, text){
  document.getElementById(id).textContent=text;
}

function nahodnePoradie() {
  for (var i = 0; i < dlzka; i++) {
    var farba = Math.floor(Math.random()*4+1);
    farba = farba.toString();
    poradie.push('b'+farba);
  }
}
function blikanie() {
  let i = 0;
  let blikam = setInterval(()=>{
    showElement(poradie[i]);
    setTimeout(function() {
      hideElement(poradie[i]);
      i = i+1;
    }, 500);
    if (i==dlzka-1) {
      clearInterval(blikam);
      setTimeout(function() {
        kontrolaScreen();
      }, 1000);
    }
  }, 800);
}
function kontrolaScreen() {
  for (var i = 1; i < 5; i++) {
    showElement('b'+i);
  }
  kontrola_i = 0;
}
function startHry() {
  kontrola_i = -1;
  nahodnePoradie();
  blikanie();
}
function dalsi_level() {
  showElement("label-correct");
  showElement("pokracovat");
  body = body + dlzka;
  setText("score-number-hra", body);
  poradie = [];
  dlzka = dlzka+1;
}
function koniecHry() {
  setText("score-number-koniec", body);
  setScreen("koniec");
  poradie = [];
  dlzka = 3;
  body = 0;
  setText("score-number-hra", body);
  for (var i = 1; i < 5; i++) {
    hideElement('b'+i);
  }
}

document.getElementById("start").addEventListener("click",(e)=>{
  setScreen("hra");
  startHry();
})
document.getElementById("start2").addEventListener("click",(e)=>{
  setScreen("hra");
  startHry();
})
document.getElementById("pokracovat").addEventListener("click",(e)=>{
  hideElement("pokracovat");
  hideElement("label-correct");
  for (var i = 1; i < 5; i++) {
    hideElement('b'+i);
  }
  startHry();
})
document.querySelectorAll("#hra .hra-button").forEach((el)=>{
  el.addEventListener("click", (e)=>{
    if (el.id === poradie[kontrola_i]) {
      kontrola_i = kontrola_i+1;
      if (kontrola_i === dlzka) {
        dalsi_level();
      }
    } else if (kontrola_i != -1) {
      koniecHry();
    }
  });
})