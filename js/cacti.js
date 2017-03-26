var cactiObj = function () {
	this.x;
	this.y;
	this.cactiImage = [];
}

cactiObj.prototype.init = function (){
	this.x = 0;
	this.y = 0;
	for(var i = 0; i < 5 ; i++){
		this.cactiImage[i] = new Image();
		this.cactiImage[i].src = "./src/cacti" + i + ".png";
	}
}

cactiObj.prototype.running = function(){
	ctx.save();

	ctx.restore();
}