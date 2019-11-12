var cloudObj = function () {
	this.x;
	this.y;
	this.pic;
	this.scale;
	this.alive;
	this.spd;
}
cloudObj.prototype.init = function (){
	this.x = canWidth;
	this.y = Math.random() * (canHeight * 0.5);
	this.pic = new Image();
	this.pic.src = "./src/cloud.png";
	this.scale = 0.5;
	this.alive = true;
	this.spd = Math.random() * 0.005 + 0.018;
}

cloudObj.prototype.draw = function(){
	if(this.alive){
		if(this.x + this.pic.width > 0 && spd > 0)
			this.x -= this.spd * 5 * deltaTime;
		else if(spd != 0)
			this.alive = false;
		ctx.drawImage(this.pic, this.x, this.y, this.pic.width * this.scale, this.pic.height * this.scale);
	}

	if(this.x + this.pic.width < 0){
		this.alive = false;
	}
}
