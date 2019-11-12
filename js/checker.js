function collisionCheck(){
	for(var i = 0; i < cacti.length; i++){
        var l = calLength( cacti[i].x + cacti[i].cactiImage.width * cacti[i].scale * 0.5, cacti[i].y - cacti[i].cactiImage.height * cacti[i].scale * 0.5
        	, dinosaur.x + dinosaur.dinosaurBody.width * dinosaur.scale * 0.5, dinosaur.y - dinosaur.dinosaurBody.height * dinosaur.scale * 0.5);
		switch(cacti[i].index) {
			case 0: case 1: case 3: case 4:
				if(l < 1500)
					dinosaur.die(i);
				break;
			case 2:
				if(l < 2500)
					dinosaur.die(i);
				break;
			case 5:
				if(l < 3000)
					dinosaur.die(i);
				break;

		}
	}
}

function cloudCheck(){
	//随机生成云朵
	cloudTimer += deltaTime;
	if(cloudTimer > randomCloudTime){
		var newCloud = new cloudObj();
		newCloud.init();
		clouds.push(newCloud);
		cloudTimer = 0;
		randomCloudTime = Math.random() * 500 + 3000;
	}

	//将出画布的云朵去掉
	for(var i = 0; i < clouds.length; i++){
		if(!clouds[i].alive)
			clouds.remove(i);
	}

	//绘制所有存在的云朵
	for(var i = 0; i < clouds.length; i++){
		clouds[i].draw();
	}
}

function cactiCheck(){
	//随机生成云朵
	cactiTimer += deltaTime;
	if(cactiTimer > randomCactiTime){
		var newCacti = new cactiObj();
		newCacti.init();
		cacti.push(newCacti);
		cactiTimer = 0;
		randomCactiTime = Math.random() * 1000 + 2000;
	}

	//将出画布的云朵去掉
	for(var i = 0; i < cacti.length; i++){
		if(!cacti[i].alive)
			cacti.remove(i);
	}

	//绘制所有存在的云朵
	for(var i = 0; i < cacti.length; i++){
		cacti[i].draw();
	}
}