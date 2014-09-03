window.onload = function(){
	var elem = document.getElementById("caja");
	elem.addEventListener("click", transition, false);
	var dismiss = document.getElementById("dismiss");
	dismiss.addEventListener("click", dismissTransition, false);
}


function transition(){
	//this.className = this.className == "purple" ? "blue" : "purple";
	this.classList.toggle("translate");
}

function dismissTransition(){
	this.classList.toggle("multi-roll");
}