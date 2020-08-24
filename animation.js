function spaceForward() {
  let varPosition = 0;
  let spacePosition = document.getElementById("space");
  let fxnId = setInterval(spaceMove, 1);
  function spaceMove() {
    varPosition += 0.06;
    spacePosition.style.backgroundPositionY = varPosition + "px";

  }
}

function spaceZoom() {
  let varScale = 1;
  let earthScale = 1;
  let earthTranslate = 0;
  let earthRotate = 0;
  let moonScale = 1;
  let moonTranslate = 0;
  let moonRotate = 0;
  let saturnScale = 1;
  let saturnTranslate = 0;
  let spaceZoom = document.getElementById("space");
  let earthZoom = document.getElementById("earth");
  let moonZoom = document.getElementById("moon");
  let saturnZoom = document.getElementById("saturn");

  let fxnId = setInterval(spaceShift, 100);
  function spaceShift() {
    varScale += 0.0039;
    earthScale += 0.02;
    earthTranslate -= 0.2;
    earthRotate += 2.5;
    moonScale += 0.02;
    moonTranslate -= 0.01;
    moonRotate -= 6;
    saturnScale += 0.05;
    saturnTranslate += 5;
    spaceZoom.style.transform = "scale(" + varScale + ")";
    earthZoom.style.transform = "scale(" + earthScale + ") translate(" + earthTranslate + "px)" + "rotate(" + earthRotate + "deg)";
    moonZoom.style.transform = "scale(" + moonScale + ") translate(" + moonTranslate + "px)" + "rotate(" + moonRotate + "deg)";
    saturnZoom.style.transform = "scale(" + saturnScale + ")" + "translate(" + saturnTranslate + "px" + ")";
  }
}

// function ufoTravel() {
//   let ufoPositionX = 0.00001;
//   let ufoPositionY = 0.00001;
//   let ufoRotate = 0;
//   let fxnId = setInterval(ufoMove, 50){
//     function ufoMove() {
//       if (ufoPositionX > 0){
//         if()
//       }
//     }
// }

// }

// @keyframes ufo {
//   from {
//     transform: translate(6rem) rotate(-30deg);
//   }
//   to {
//     transform: translate(-6rem) rotate(30deg);
//   }
// }

