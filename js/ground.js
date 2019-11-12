var groundObj = function () {
	this.y;
	this.stripeY = [];
	this.stripeL = [];
	this.alive = [];
	this.stripeX = [];
}
groundObj.prototype.num = 3;
groundObj.prototype.init = function (){
// #535353 线条颜色
	this.y = canHeight * 0.82;
	for(var i = 0; i < this.num; i++){
		this.stripeY[i] = Math.random() * (canHeight * 0.18) + canHeight * 0.82;
		this.stripeL[i] = Math.random() * (10) + 15;
		this.alive[i] = true;
		this.stripeX[i] = Math.random() * (50) + canWidth;
	}
}

groundObj.prototype.draw = function (){
	ctx.save();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#535353";
	ctx.beginPath();
	ctx.moveTo(canWidth, this.y)
	ctx.lineTo(0, this.y);
	ctx.stroke();
	ctx.restore();

	for(var i = 0; i < this.num; i++){
		ctx.save();
		if(this.alive[i]){
			var startX = this.stripeX[i];
			if(this.stripeX[i] + this.stripeL[i] > 0)
				this.stripeX[i] -= spd * 5 * deltaTime;
			else
				this.alive[i] = false;
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#535353";
			ctx.beginPath();
			ctx.moveTo(this.stripeX[i], this.stripeY[i]);
			ctx.lineTo(this.stripeX[i] + this.stripeL[i], this.stripeY[i]);
			// ctx.stroke();
		}
		ctx.restore();
	}

}