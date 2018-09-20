var poradie = [];
var dlzka = 3;
var kontrola_i = -1;
var body = 0;
function nahodnePoradie() {
  for (var i = 0; i < dlzka; i++) {
    var farba = randomNumber(1, 4);
    farba = farba.toString();
    appendItem(poradie, farba);
  }
  console.log(poradie);
}
function blikanie() {
  var i = 0;
  timedLoop(800, function() {
    showElement(poradie[i]);
    setTimeout(function() {
      hideElement(poradie[i]);
      i = i+1;
    }, 500);
    if (i==dlzka-1) {
      stopTimedLoop();
      setTimeout(function() {
        kontrola();
      }, 1000);
    }
  });
}
function kontrola() {
  for (var i = 1; i < 5; i++) {
    showElement(i.toString());
  }
  kontrola_i = 0;
}
function startHry() {
  kontrola_i = -1;
  nahodnePoradie();
  blikanie();
}
function dalsi_level() {
  showElement("label1");
  showElement("pokracovat");
  body = body + dlzka;
  setText("b_cislo", body);
  poradie = [];
  dlzka = dlzka+1;
}
function koniecHry() {
  setText("b_cislo_koniec", body);
  setScreen("koniec");
  poradie = [];
  dlzka = 3;
  body = 0;
  setText("b_cislo", body);
  for (var i = 1; i < 5; i++) {
    hideElement(i.toString());
  }
}
onEvent("start", "click", function(event) {
  setScreen("hra");
  startHry();
});
onEvent("start2", "click", function(event) {
  setScreen("hra");
  startHry();
});
onEvent("pokracovat", "click", function(event) {
  hideElement("pokracovat");
  hideElement("label1");
  for (var i = 1; i < 5; i++) {
    hideElement(i.toString());
  }
  startHry();
});
onEvent("1", "click", function(event) {
  if (1 == poradie[kontrola_i]) {
    kontrola_i = kontrola_i+1;
    if (kontrola_i==dlzka) {
      dalsi_level();
    }
  } else if (kontrola_i!=-1) {
    koniecHry();
  }
});
onEvent("2", "click", function(event) {
  if (2 == poradie[kontrola_i]) {
    kontrola_i = kontrola_i+1;
    if (kontrola_i==dlzka) {
      dalsi_level();
    }
  } else if (kontrola_i!=-1) {
    koniecHry();
  }
});
onEvent("3", "click", function(event) {
  if (3 == poradie[kontrola_i]) {
    kontrola_i = kontrola_i+1;
    if (kontrola_i==dlzka) {
      dalsi_level();
    }
  } else if (kontrola_i!=-1) {
    koniecHry();
  }
});
onEvent("4", "click", function(event) {
  if (4 == poradie[kontrola_i]) {
    kontrola_i = kontrola_i+1;
    if (kontrola_i==dlzka) {
      dalsi_level();
    }
  } else if ((kontrola_i != -1)) {
    koniecHry();
  }
});
