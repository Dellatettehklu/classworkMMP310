var submit = document.getElementById("submit");

submit.onclick = function(){

	var info =[];

	var infoElements = document.getElementsByClassName("info");


	for(var i = 0; i < infoElements.length; i++) info.push(infoElements[i].value);

	//var name = document.getElementById("name").value;

	//var date = document.getElementById("date").value;

	//var hour = document.getElementById("hour").value;

	//var minutes = document.getElementById("minutes").value;

	//var seconds = document.getElementById("seconds").value;


	var message = document.getElementById("message");



	if (info[2] < 10) {

	message.innerHTML = info[0] + ", how are you, it's morning!" ;
	}
	else if(info[2] < 20){
		message.innerHTML = info[0] + ", how are you, it's afternon!" ;
	}

	else{

	message.innerHTML =  info[0] + ", how are you, it's evening!";
}

}
