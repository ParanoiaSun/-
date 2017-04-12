var monsterObj = function () {
	this.x;
	this.y;
	this.monsterImage = [];
	this.monsterTimer;
	this.monsterCount;
	this.scale;
	this.isAlive;
}

monsterObj.prototype.init = function (){
	this.x = canWidth;
	this.y = canHeight * 0.4;
	for(var i = 0; i < 2; i++){
		this.monsterImage[i] = new Image();
		this.monsterImage[i].src = "./src/monster" + i + ".png";
	}
	this.monsterTimer = 0;
	this.monsterCount = 0;
	this.scale = 1;
	this.Alive = true;
}

monsterObj.prototype.running = function(){
	this.monsterTimer += deltaTime;
	if(this.monsterTimer > 150){
		this.monsterCount = (this.monsterCount + 1) % 2;
		this.monsterTimer %= 150;
	}

	var count = this.monsterCount;
	if(this.isAlive){
		if(this.x + this.cactiImage.width > 0)
			this.x -= spd * 5 * deltaTime;
		else{
			this.isAlive = false;
			this.x = canWidth;
		}
		ctx.drawImage(this.monsterImage[count], this.x, this.y, this.monsterImage[count] * this.scale, this.monsterImage[count] * this.scale);
	}
}