var can;
var ctx;

var canWidth;
var canHeight;

var cacti;
var cloud;
var dinosaur;
var ground;
var monster;

var spd;

document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	gameloop();
}

function init(){
	cacti = new cactiObj();
	cloud = new cloudObj();
	dinosaur = new dinosaurObj();
	ground = new groundObj();
	monster = new monsterObj();

	can = document.getElementById("canvas");
	ctx = can.getContext('2d');

	canHeight = can.height;
	canWidth = can.width;

	dinosaur.init();
}

function gameloop(){
	//setInterval, setTimeout

	//当前绘制完成之后，去根据机器的性能来确定间隔多长时间来绘制下一帧
	//智能计算
	// frame per second FPS, 会导致帧之间的间隔不固定
	requestAnimFrame(gameloop);
	//返回从1970.1.1到现在的毫秒数
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40)
		deltaTime = 40;
	//console.log(deltaTime);这里暂停将鼠标滚轮往上就ok哦
	//利用时间差来调整运动速度
	ctx.clearRect(0, 0, canWidth, canHeight);
	dinosaur.draw();
}
