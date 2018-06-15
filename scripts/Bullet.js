function Bullet(){
this.radius = 5;
this.x = 0;
this.y = -1;
this.vx = 0;
this.vy = 0;
this.w = 10;
this.h = 10;
this.ax = 0;
this.ay = 0;
this.sColor = "black";
this.color = "purple";
this.inUse = false;
}
Bullet.prototype.draw = function(ctx){
    /*
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.sColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    */
   ctx.save();
   ctx.translate(this.x, this.y);
   imgController.drawSize(ctx, 2, -this.w/2, -this.h/2, this.w, this.h);
   ctx.restore();
}
Bullet.prototype.move = function(dt){
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}
Bullet.prototype.spawn = function(x, y){
    audioController.play(0);
    this.inUse = true;
    this.x = x;
    this.y = y;
    this.vy = -200;
}
Bullet.prototype.hide = function(){
    this.inUse = false;
    this.y = -1;
    this.vy = 0;
}
Bullet.prototype.boundaries = function (x, y, w, h) {
    if (this.x < x) {
        this.y = -1;
        this.vx = 0;
        this.inUse = false;
    }
    if (this.x + this.w > x + w) {
        this.y = -1;
        this.vx = 0;
        this.inUse = false;
    }
    if (this.y < y) {
        this.y = -1;
        this.vy = 0;
        this.inUse = false;
    }
    if (this.y + this.h > h) {
        this.y = -1;
        this.vy = 0;
        this.inUse = false;
    }
}
Bullet.prototype.collideWith = function (target) {
    if (target.x + target.w2 < this.x - this.w/2) return false;
    if (target.x - target.w2/2 > this.x + this.w/2) return false;
    if (target.y + target.h2 < this.y - this.h/2 ) return false;
    if (target.y - target.h2/2 > this.y + this.h/2) return false;
    return true;

}