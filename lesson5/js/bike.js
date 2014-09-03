window.onload = function(){
	var bike = document.getElementById("bike");
	bike.addEventListener("click", pedal, false);
}

function pedal(){
	var frontwheel, backwheel, bike, viela;

	bike = document.getElementById("bike");
	viela = document.getElementById("viela");
	backwheel = document.getElementById("backwheel");
	frontwheel = document.getElementById("frontwheel");

	bike.classList.toggle("move");

	viela.classList.toggle("spin");
	backwheel.classList.toggle("spin");
	frontwheel.classList.toggle("spin");
}