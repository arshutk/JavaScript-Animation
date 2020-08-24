function spaceForward() {
  let varPosition = 0;
  let spacePosition = document.getElementById("space");
  let fxnId = setInterval(spaceMove, 1);
  function spaceMove() {
    varPosition -= 0.05;
    spacePosition.style.backgroundPositionY = varPosition + "px";

  }
}

function spaceZoom() {
  let varScale = 1;
  let earthScale = 1;
  let spaceZoom = document.getElementById("space");
  let earthZoom = document.getElementById("earth");

  let fxnId = setInterval(spaceShift, 100);
  function spaceShift() {
    varScale += 0.0039;
    earthScale += 0.0099;
    spaceZoom.style.transform = "scale(" + varScale + ")";
    earthZoom.style.transform = "scale(" + earthScale + ")";



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

