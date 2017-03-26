var dinosaurObj = function () {
	this.x;
	this.y;
	this.width;
	this.height;
	this.state;
	this.count;
	this.dinosaurBody = new Image();
	this.dinosaurEye = [];
	this.dinosaurLeg = [];
	this.scale;
	this.dinosaurTimer;
	this.dinosaurCount;
}

dinosaurObj.prototype.init = function (){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.7;
	this.state = 0;
	this.count = 0;
	this.dinosaurBody.src = "./src/dinosaurBody.png";
	// dinosaurEye[0]表示小恐龙正常的眼睛 dinosaurEye[1]表示小恐龙受伤时的眼睛
	for(var i = 0; i < 2; i++){
		this.dinosaurEye[i] = new Image();
		this.dinosaurEye[i].src = "./src/dinosaurEye" + i + ".png";
	}
	// dinosaurLeg[0]表示小恐龙停下或跳起的腿 dinosaurLeg[1]表示前脚抬起 dinosaurLeg[12]表示后脚抬起
	for(var i = 0; i < 3; i++){
		this.dinosaurLeg[i] = new Image();
		this.dinosaurLeg[i].src = "./src/dinosaurLeg" + i +".png";
	}
	this.scale = 0.2;
	this.width = this.dinosaurBody.width * this.scale;
	this.height = this.dinosaurBody.height * this.scale;
	this.dinosaurTimer = 0;
	this.dinosaurCount = 0;
}

dinosaurObj.prototype.draw = function () {
	ctx.save();

	ctx.restore();
}

dinosaurObj.prototype.running = function () {
	ctx.save();

	this.dinosaurTimer += deltaTime;
	if(this.dinosaurTimer > 100){
		this.dinosaurCount = (this.dinosaurCount + 1) % 2;
		this.dinosaurTimer %= 100;
	}

	var count = this.dinosaurCount + 1;
	ctx.drawImage(this.dinosaurBody, this.x - this.dinosaurBody.width * this.scale * 0.5, this.y - this.dinosaurBody.height * this.scale * 0.5, this.dinosaurBody.width * this.scale, this.dinosaurBody.height * this.scale);
	ctx.drawImage(this.dinosaurEye[0], this.x + 40 * this.scale, this.y - 125 * this.scale, this.dinosaurEye[0].width * this.scale, this.dinosaurEye[0].height * this.scale);
	ctx.drawImage(this.dinosaurLeg[count], this.x - 110 * this.scale, this.y + 167 * this.scale, this.dinosaurLeg[count].width * this.scale, this.dinosaurLeg[count].height * this.scale);
	ctx.restore();
}

dinosaurObj.prototype.jump = function () {
	ctx.save();

	ctx.restore();
}

dinosaurObj.prototype.die = function () {
	ctx.save();

	ctx.restore();
}
























