function Player(w1, h1) {
    this.x = w1 / 2;
    this.y = h1 - 45;
    this.x0 = this.x;
    this.y0 = this.y;
    this.w = 42;
    this.h = 42;
    this.w2 = 20;
    this.h2 = 20;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.cor = "grey";
    this.strokeColor = "black";
    this.imunidade = 0;
    this.lifes = 3;
    this.fuel = 100;
    this.score = 0;
}

Player.prototype.draw = function (ctx) {
    //triangle
    /*
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = this.strokeColor;
    ctx.moveTo(this.x, this.y + this.h);
    ctx.lineTo((this.w / 2) + this.x, this.y);
    ctx.lineTo(this.w + this.x, this.y + this.h);
    ctx.lineTo(this.x, this.y + this.h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    */
    //hitbox
    ctx.save();
        ctx.translate(this.x, this.y);
        imgController.drawSize(ctx, 0, -this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();

    if (debug == true) {
        ctx.strokeStyle = "red";
        
        ctx.strokeRect(this.x-this.w/4, this.y-this.h/4, this.w2, this.h2);
    }
}

Player.prototype.move = function (dt) {

    //this.vx = this.vx + this.ax * dt
    //this.vy = this.vy + this.ay * dt
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}

Player.prototype.boundaries = function (x, y, w, h) {
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
        this.vy = 0;
    }
    if (this.y + this.h > h) {
        this.y = h - this.h;
        this.vy = 0;
    }
}
Player.prototype.collideWith = function (target) {

    if (target.x + target.w2 < this.x - this.w2/2) return false;
    if (target.x - target.w2/2 > this.x + this.w2) return false;
    if (target.y + target.h2 < this.y - this.h2/2) return false;
    if (target.y -target.h2/2> this.y + this.h2) return false;
    return true;


}