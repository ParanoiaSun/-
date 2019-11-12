window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim; //两者之间的距离
	return aim + delta * ratio;
}

Array.prototype.remove = function(dx) 
{ 
  if(isNaN(dx)||dx>this.length){return false;} 
  this.splice(dx,1); 
} 

function calLength(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
} 