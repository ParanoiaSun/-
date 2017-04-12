var cactiObj = function () {
	this.cactiImage;
	this.x;
	this.y;
	this.alive;
	this.scale;
}

cactiObj.prototype.init = function (i){
	this.cactiImage = new Image();
	// this.cactiImage.src = "./src/cacti" + i + ".png"; 
	this.cactiImage.src = "./src/cacti1.png";
	this.alive = true;
	this.scale = 0.8;
	console.log(this.cactiImage.width);
	this.x = canWidth;
	this.y = canHeight * 0.82;
}

cactiObj.prototype.add = function(){
	if(this.alive){
		if(this.x + this.cactiImage.width > 0)
			this.x -= spd * 5 * deltaTime;
		else
			this.alive = false;
		ctx.drawImage(this.cactiImage, this.x, this.y - this.cactiImage.height * this.scale, this.cactiImage.width * this.scale, this.cactiImage.height * this.scale);
	}
}