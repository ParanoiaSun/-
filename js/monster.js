var monsterObj = function () {
	this.x;
	this.y;
	this.monsterImage = [];
	this.monsterTimer;
	this.monsterCount;
	this.scale;
}

monsterObj.prototype.init = function (){
	this.x = canWidth * 0.7;
	this.y = canHeight * 0.4;
	for(var i = 0; i < 2; i++){
		this.monsterImage[i] = new Image();
		this.monsterImage[i].src = "./src/monster" + i + ".png";
	}
	this.monsterTimer = 0;
	this.monsterCount = 0;
	this.scale = 0.5;
}

monsterObj.prototype.running = function(){
	ctx.save();
	this.monsterTimer += deltaTime;
	if(this.monsterTimer > 150){
		this.monsterCount = (this.monsterCount + 1) % 2;
		this.monsterTimer %= 150;
	}

	var count = this.monsterCount;
	ctx.drawImage(this.monsterImage[count], this.x, this.y);
	ctx.restore();
}