function HUD(screenWidth) {
    this.x = 0;
    this.y = 0;
    this.screenWidth = screenWidth;
}

HUD.prototype.draw = function (ctx, speed, fuel, score, lifes, highScore) {
    ctx.fillRect(1, 1, this.screenWidth-2, 40);
    ctx.font = "29px Arial";
    ctx.fillStyle = "Aquamarine";
    ctx.fillText("Energy: ", 0, 30);
    ctx.fillText("Score: " + score, 550, 30);
    ctx.fillText("High Score: " + highScore, 750, 30);
    ctx.fillText("Lifes: " + lifes, 430, 30);
    ctx.strokeStyle = "Aquamarine";
    if (fuel > 70)
        ctx.fillStyle = "green";
    if (fuel > 30 && fuel < 70)
        ctx.fillStyle = "yellow";
    if (fuel < 30)
        ctx.fillStyle = "red";
    ctx.fillRect(120, 5, fuel, 30);
    ctx.strokeRect(120, 5, 100 , 30);

}

HUD.prototype.drawMenu = function(ctx, w, h, highScore){
    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Space Shooter",10+w/2, h/2);
    ctx.font = "29px Arial";
    ctx.fillText("High Score: " + highScore, 750, 30);
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Press SPACE to play",w/2, 60+h/2);


}