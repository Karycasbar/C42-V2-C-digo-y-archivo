handleObstacleCollision(index) {
  if (cars[index - 1].collide(obstacles)) {
    

    //Reduciendo la vida del jugador
    if (player.life > 0) {
      player.life -= 185 / 4;
    }

    player.update();
  }
}

//---------------------------------------------
if (this.leftKeyActive) {
  player.positionX += 100;
} else {
  player.positionX -= 100;
}

//-----------------------------------------
//guarda el valor de player.life en la variable currentlife
var currentlife = allPlayers[plr].life;

if (currentlife <= 0) {
  cars[index - 1].changeImage("blast");
  cars[index - 1].scale = 0.3;
}

//-----------------------------------
handleCarACollisionWithCarB(index) {
  if (index === 1) {
    if (cars[index - 1].collide(cars[1])) {
      if (this.leftKeyActive) {
        player.positionX += 100;
      } else {
        player.positionX -= 100;
      }

      //Reduciendo la vida del jugador
      if (player.life > 0) {
        player.life -= 185 / 4;
      }

      player.update();
    }
  }
  if (index === 2) {
    if (cars[index - 1].collide(cars[0])) {
      if (this.leftKeyActive) {
        player.positionX += 100;
      } else {
        player.positionX -= 100;
      }

      //Reduciendo la vida del jugador
      if (player.life > 0) {
        player.life -= 185 / 4;
      }

      player.update();
    }
  }
}

//-------------------------------------------
if (player.life <= 0) {
  this.blast = true;
  this.playerMoving = false;
}

//------------------------------------------
end() {
  console.log("Fin del juego");
}


