var dinosaurObj = function () {
	this.x;
	this.y;
	this.width;
	this.height;
	this.state;
	this.count;
	this.dinosaurBody = new Image();
	this.dinosaurEye = new Image();
	this.dinosaurLeg = [];
	this.scale;
	this.dinosaurTimer;
	this.dinosaurCount;
}

dinosaurObj.prototype.init = function (){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.state = 0;
	this.count = 0;
	this.dinosaurBody.src = "./src/dinosaurBody.png";
	this.dinosaurEye.src = "./src/dinosaurEye0.png";
	for(var i = 0; i < 3; i++){
		this.dinosaurLeg[i] = new Image();
		this.dinosaurLeg[i].src = "./src/dinosaurLeg" + i +".png"

	}
	this.scale = 0;
	this.dinosaurTimer = 0;
	this.dinosaurCount = 0;
}

dinosaurObj.prototype.draw = function () {
	ctx.save();

	this.dinosaurTimer += deltaTime;
	if(this.dinosaurTimer > 100){
		this.dinosaurCount = (this.dinosaurCount + 1) % 2;
		this.dinosaurTimer %= 100;
	}

	var count = this.dinosaurCount + 1;
	ctx.drawImage(this.dinosaurBody, this.x - 39, this.y - 33, 78, 66);
	ctx.drawImage(this.dinosaurEye, this.x - 39 + 47, this.y - 33 + 5, 4, 4);
	ctx.drawImage(this.dinosaurLeg[count], this.x - 39 + 16, this.y - 33 + 66, 38, 18);
	ctx.restore();
}