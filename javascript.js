var c = document.getElementById('canvas').getContext('2d');
var x = 0;
var y = 0;
var c = document.getElementById('canvas').getContext("2d");
var size = 20;
var down = false;

//
function getMouse(event) {
	x = event.clientX;
	y = event.clientY;
}

//
setInterval(function() {
	if (down) {
		c.fillRect(Math.floor((x / size)) * size, Math.floor((y / size)) * size, size, size);
	}
},1);