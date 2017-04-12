var cloudObj = function () {
	this.x;
	this.y;
	this.pic;
	this.scale;
	this.isAlive;
	this.spd;
}

cloudObj.prototype.init = function (){
	this.x = canWidth;
	this.y = Math.random() * (canHeight * 0.5);
	this.pic = new Image();
	this.pic.src = "./src/cloud.png";
	this.scale = 0.5;
	this.isAlive = true;
	this.spd = Math.random() * 0.02 + 0.01;
}

cloudObj.prototype.add = function(){
	if(this.isAlive){
		if(this.x + this.pic.width > 0)
			this.x -= this.spd * 5 * deltaTime;
		else
			this.isAlive = false;
		ctx.drawImage(this.pic, this.x, this.y, this.pic.width * this.scale, this.pic.height * this.scale);
	}
}