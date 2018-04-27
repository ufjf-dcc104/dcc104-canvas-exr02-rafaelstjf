function Enemy(w1, h1) {
    this.x = Math.random() *(w1-80)+ 40;
    this.y =0;
    this.x0 = this.x;
    this.y0 = this.y;
    this.w = 40;
    this.h = 40;
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
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = this.strokeColor;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo((this.w / 2) + this.x, this.y+ this.h);
    ctx.lineTo(this.w + this.x, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //hitbox
    if (debug == true) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
    ctx.translate(this.x, this.y); //center in the middle of the Enemy
    ctx.restore();
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
    if (target.x + target.w < this.x) return false;
    if (target.x > this.x + this.w) return false;
    if (target.y + target.h < this.y) return false;
    if (target.y > this.y + this.h) return false;
    return true;

}