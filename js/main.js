var can;  var ctx;

var canWidth;  var canHeight;

var lastTime;  var deltaTime;

var cacti;  var dinosaur;  var ground;  var monster;
var clouds; var monsters = [];

var spd;

var cloudTimer = 0;  var cloudCount = 0; var randomCloudTime = Math.random() * 500 + 3000;
var cactiTimer = 0;  var cactiCount = 0; var randomCactiTime = Math.random() * 1000 + 2000;


document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	gameloop();
}

function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext('2d');

	canHeight = can.height;
	canWidth = can.width;

	cacti = new Array();
	dinosaur = new dinosaurObj();
	ground = new groundObj();
	monster = new monsterObj();
	clouds = new Array();
	dinosaur.init();
    dinosaur.running();

	monster.init();
	ground.init();

	for(var i = 0; i < 2; i ++){
		monsters[i] = new monsterObj();
		monsters[i].init();
	}

	spd = 0.08;

	document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode === 32 && dinosaur.state === 1){ // 按 Esc
            dinosaur.jump();
        }
	}

}

function gameloop(){
	// setInterval, setTimeout

	// 当前绘制完成之后，去根据机器的性能来确定间隔多长时间来绘制下一帧
	// 智能计算
	// frame per second FPS, 会导致帧之间的间隔不固定
	requestAnimFrame(gameloop);
	//返回从1970.1.1到现在的毫秒数
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40)
		deltaTime = 40;
	// console.log(deltaTime);这里暂停将鼠标滚轮往上就ok哦
	// 利用时间差来调整运动速度
	ctx.clearRect(0, 0, canWidth, canHeight);
	ground.draw();
	cloudCheck();
	monster.running();
	cactiCheck();
	dinosaur.draw();
	collisionCheck();
}

function gameover(){
	spd = 0;
}

function onMouseMove(e){
    console.log('a');
}




