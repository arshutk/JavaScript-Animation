function spaceForward() {
  let varPosition = 0;
  let spacePosition = document.getElementById("space");
  let fxnId = setInterval(spaceMove, 1);
  function spaceMove() {
    varPosition += 0.2;
    spacePosition.style.backgroundPositionY = varPosition + "px";
  }
}

function spaceZoom() {
  let spaceScale = 1;
  let surfaceTranslate = 0;
  let earthScale = 1;
  let earthTranslate = 0;
  let earthRotate = 0;
  let moonScale = 1;
  let moonTranslate = 0;
  let moonRotate = 0;
  let asteroidScale = 1;
  let asteroidTranslate = 0;
  let asteroidRotate = 0;
  let spaceZoom = document.getElementById("space");
  let surfaceZoom = document.getElementById("surface")
  let earthZoom = document.getElementById("earth");
  let moonZoom = document.getElementById("moon");
  let asteroidZoom = document.getElementById("asteroid");

  let fxnId = setInterval(spaceShift, 100);
  function spaceShift() {
    spaceScale += 0.0039;
    surfaceTranslate += 10;
    earthScale += 0.02;
    earthTranslate -= 0.3;
    earthRotate += 2;
    moonScale += 0.02;
    moonTranslate -= 0.15;
    moonRotate -= 11;
    asteroidScale += 0.05;
    asteroidTranslate += 5;
    asteroidRotate += 3;
    spaceZoom.style.transform = "scale(" + spaceScale + ")";
    surfaceZoom.style.transform = "translate( -50%," + surfaceTranslate + "px)";
    earthZoom.style.transform = "scale(" + earthScale + ") translate(" + earthTranslate + "px)" + "rotate(" + earthRotate + "deg)";
    moonZoom.style.transform = "scale(" + moonScale + ") translate(" + moonTranslate + "px)" + "rotate(" + moonRotate + "deg)";
    asteroidZoom.style.transform = "scale(" + asteroidScale + ")" + "translate(" + asteroidTranslate + "px) rotate(" + asteroidRotate + "deg)";
  }
}

function ufoTravel() {
  let ufoPositionX = 0;
  let speedX = 0;
  const maxPositionMaxX = 50;
  let forward = 0;
  let ufoTranslate = document.getElementById("ufo");
  // let ufoPositionY = 0.00001;
  // let ufoRotate = 0;
  let fxnId = setInterval(ufoMove, 50);
  function ufoMove() {
    // for (let i = 0; i <= 100; i++) {
    //   if (i % 2 == 0) {
    //     ufoPositionX = 50;
    //     ufoTranslate.style.transform = "translate(" + ufoPositionX + ", -50%) rotate(-20deg)";
    //   }
    //   else {
    //     ufoPositionX = -50;
    //     ufoTranslate.style.transform = "translate(" + ufoPositionX + ", -50%) rotate(20deg)";
    //   }
    // }
    // forward++;
    // if (forward < 50) {
    //   forward++;
    //   ufoTranslate.style.transform = "translate(" + forward + "px, -50%) rotate(-30deg)";
    // }
    // else {
    //   forward = -50;
    //   ufoTranslate.style.transform = "translate(" + forward + "px, -50%) rotate(30deg)";
    // }

    // ufoPositionX += speedX;
    // if (ufoPositionX > maxPositionMaxX || ufoPositionX < - maxPositionMaxX) {
    //   speedX -= 1;
    // }
    // ufoTranslate.style.transform = "translate(" + ufoPositionX + "px, -50%)";








  }
}

// }

// @keyframes ufo {
//   from {
//     transform: translate(6rem) rotate(-30deg);
//   }
//   to {
//     transform: translate(-6rem) rotate(30deg);
//   }
// }

