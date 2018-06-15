function Enemy(w1, h1) {
    this.x = Math.random() *(w1-80)+ 40;
    this.y =-100;
    this.x0 = this.x;
    this.y0 = this.y;
    this.w = 42;
    this.h = 42;
    this.w2 = 20;
    this.h2 = 20;
    this.vx = Math.random()*(200 + 200) - 200;
    this.vy = Math.random()*(200 - 100) + 100;
    this.ax = 0;
    this.ay = 0;
    this.cor = "red";
    this.strokeColor = "grey";
    this.imunidade = 0;
    this.lifes = 3;
    this.energy = 100;
    this.score = 0;
}

Enemy.prototype.draw = function (ctx) {
    ctx.save();
    //triangle
    /*ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = this.strokeColor;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo((this.w / 2) + this.x, this.y+ this.h);
    ctx.lineTo(this.w + this.x, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    */
   ctx.translate(this.x, this.y); //center in the middle of the Enemy
    imgController.drawSize(ctx, 1, -this.w/2, -this.h/2, this.w, this.h)
    ctx.restore();

    //hitbox
    if (debug == true) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.x-this.w/4, this.y-this.h/4, this.w2, this.h2);
    }
}

Enemy.prototype.move = function (dt) {

    //this.vx = this.vx + this.ax * dt
    //this.vy = this.vy + this.ay * dt
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;

}

Enemy.prototype.boundaries = function (x, y, w, h) {
    if (this.x < x) {
        this.x = x;
        this.vx = -1*this.vx;
    }
    if (this.x + this.w > x + w) {
        this.x = x + w - this.w;
        this.vx = -1*this.vx;
    }
    if (this.y < y) {
        this.y = y;
    }
    if (this.y > h) {
        this.y = 0;

    }
}
Enemy.prototype.collideWith = function (target) {
    if (target.x + target.w2 < this.x - this.w2/2) return false;
    if (target.x - target.w2/2 > this.x + this.w2) return false;
    if (target.y + target.h2 < this.y - this.h2/2) return false;
    if (target.y -target.h/2> this.y + this.h2) return false;
    return true;

}
Enemy.prototype.resetAxis = function(){
    this.x = this.x0;
    this.y = this.y0;
}