var can;  var ctx;

var canWidth;  var canHeight;

var lastTime;  var deltaTime;

var cactus;  var cloud;  var dinosaur;  var ground;  var monster;
var cacti = []; var clouds = []; var monsters = [];

var spd;

var cloudTimer = 0;  var cloudCount = 0; var randomCloudTime = Math.random() * 1000 + 500;

document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	gameloop();
}

function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext('2d');

    // can.addEventListener("onkeydown", doKeyDown, true);
    // can.addEventListener('mousemove', onMouseMove, false);
	document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==32){ // 按 Esc
            dinosaur.jump();
        }
	}
	canHeight = can.height;
	canWidth = can.width;

	cactus = new cactiObj();
	cloud = new cloudObj();
	dinosaur = new dinosaurObj();
	ground = new groundObj();
	monster = new monsterObj();

	dinosaur.init();
    dinosaur.running();

	cloud.init();
	monster.init();
	cactus.init(0);
	ground.init();

	for(var i = 0; i < 3; i ++){
		cacti[i] = new cactiObj();
		cacti[i].init(0);
	}
	for(var i = 0; i < 2; i ++){
		monsters[i] = new monsterObj();
		monsters[i].init();
	}
	for(var i = 0; i < 10; i ++){
		cloud[i] = new cloudObj();
		cloud[i].init();
	}

	spd = 0.06;

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
	cloud.add();
	monster.running();
	dinosaur.draw();
	cacti[0].add();
}

function doKeyDown(e) {
    var keyID = e.keyCode ? e.keyCode : e.which;
    console.log('a');
    if (keyID === 65 || keyID === 32) { // up arrow and W
    	if(dinosaur.state === 1)
        	dinosaur.jump();
        // e.preventDefault();
    }
}

function gameover(){
	spd = 0;
}

function onMouseMove(e){
    console.log('a');
}
