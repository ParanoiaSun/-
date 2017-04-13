var cactiObj = function () {
	this.cactiImage;
	this.x;
	this.y;
	this.alive;
	this.scale;
}
cactiObj.prototype.typeNum = 6;
cactiObj.prototype.init = function (i){
	this.cactiImage = new Image();
	this.scale = 0.8;
	this.y = canHeight * 0.82;

	this.x = canWidth;
	this.cactiImage = new Image();
	this.cactiImage.src = "./src/cacti" + Math.floor(Math.random() * this.typeNum) + ".png";
	this.alive = true;
}

cactiObj.prototype.draw = function(){
	if(this.alive){
		if(this.x + this.cactiImage.width > 0)
			this.x -= spd * 5 * deltaTime;
		else
			this.alive = false;
		ctx.drawImage(this.cactiImage, this.x, this.y - this.cactiImage.height * this.scale, this.cactiImage.width * this.scale, this.cactiImage.height * this.scale);
	}

	if(this.x - this.cactiImage.width < 0)
		this.alive = false;
}