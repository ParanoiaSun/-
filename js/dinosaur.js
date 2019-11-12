var dinosaurObj = function () {
	this.x;
	this.y;
	this.width;
	this.height;
	this.state;
	this.dinosaurBody = new Image();
	this.dinosaurEye = [];
	this.dinosaurLeg = [];
	this.scale;
	this.dinosaurTimer;
	this.dinosaurCount;
}

dinosaurObj.prototype.init = function (){
	this.x = canWidth * 0.2;
	this.y = canHeight * 0.7;
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
	// 0 表示刚开始的静止状态 1 表示运动状态 2 表示跳跃上升状态 3 表示跳跃下降状态 4 表示死亡状态
	this.state = 0;
}

dinosaurObj.prototype.draw = function () {
	if(this.state === 0){

	}else if(this.state === 1){
		this.dinosaurTimer += deltaTime;
		if(this.dinosaurTimer > 100){
			this.dinosaurCount = (this.dinosaurCount + 1) % 2;
			this.dinosaurTimer %= 100;
		}

		var count = this.dinosaurCount + 1;
		ctx.drawImage(this.dinosaurBody, this.x - this.dinosaurBody.width * this.scale * 0.5, this.y - this.dinosaurBody.height * this.scale * 0.5, this.dinosaurBody.width * this.scale, this.dinosaurBody.height * this.scale);
		ctx.drawImage(this.dinosaurEye[0], this.x + 40 * this.scale, this.y - 130 * this.scale, this.dinosaurEye[0].width * this.scale, this.dinosaurEye[0].height * this.scale);
		ctx.drawImage(this.dinosaurLeg[count], this.x - 110 * this.scale, this.y + 167 * this.scale, this.dinosaurLeg[count].width * this.scale, this.dinosaurLeg[count].height * this.scale);
	}else if(this.state === 2){
		this.dinosaurTimer += deltaTime;
		if(this.dinosaurTimer > 20){
			this.y -= 5;
			this.dinosaurTimer %= 20;
		}

		ctx.drawImage(this.dinosaurBody, this.x - this.dinosaurBody.width * this.scale * 0.5, this.y - this.dinosaurBody.height * this.scale * 0.5, this.dinosaurBody.width * this.scale, this.dinosaurBody.height * this.scale);
		ctx.drawImage(this.dinosaurEye[0], this.x + 40 * this.scale, this.y - 130 * this.scale, this.dinosaurEye[0].width * this.scale, this.dinosaurEye[0].height * this.scale);
		ctx.drawImage(this.dinosaurLeg[0], this.x - 110 * this.scale, this.y + 167 * this.scale, this.dinosaurLeg[0].width * this.scale, this.dinosaurLeg[0].height * this.scale);

        if(this.y <= canHeight * 0.2){
            this.state = 3;
        }
	}else if(this.state === 3){
        this.dinosaurTimer += deltaTime;
        if(this.dinosaurTimer > 20){
            this.y += 5;
            this.dinosaurTimer %= 20;
        }

        ctx.drawImage(this.dinosaurBody, this.x - this.dinosaurBody.width * this.scale * 0.5, this.y - this.dinosaurBody.height * this.scale * 0.5, this.dinosaurBody.width * this.scale, this.dinosaurBody.height * this.scale);
        ctx.drawImage(this.dinosaurEye[0], this.x + 40 * this.scale, this.y - 130 * this.scale, this.dinosaurEye[0].width * this.scale, this.dinosaurEye[0].height * this.scale);
        ctx.drawImage(this.dinosaurLeg[0], this.x - 110 * this.scale, this.y + 167 * this.scale, this.dinosaurLeg[0].width * this.scale, this.dinosaurLeg[0].height * this.scale);

        if(this.y >= canHeight * 0.7){
            this.state = 1;
        }
	}else if(this.state === 4){
		ctx.drawImage(this.dinosaurBody, this.x - this.dinosaurBody.width * this.scale * 0.5, this.y - this.dinosaurBody.height * this.scale * 0.5, this.dinosaurBody.width * this.scale, this.dinosaurBody.height * this.scale);
    	ctx.drawImage(this.dinosaurEye[1], this.x + 40 * this.scale, this.y - 130 * this.scale, this.dinosaurEye[1].width * this.scale, this.dinosaurEye[1].height * this.scale);
    	ctx.drawImage(this.dinosaurLeg[0], this.x - 110 * this.scale, this.y + 167 * this.scale, this.dinosaurLeg[0].width * this.scale, this.dinosaurLeg[0].height * this.scale);
	}
}

dinosaurObj.prototype.running = function () {
	this.state = 1;
}

dinosaurObj.prototype.jump = function () {
	this.state = 2; 
}

dinosaurObj.prototype.die = function () {
	this.state = 4; 
	gameover();
}
























