var submit = document.getElementById("submit");

submit.onclick = function(){

	var name = document.getElementById("name").value;

	var date = document.getElementById("date").value;

	var hour = document.getElementById("hour").value;

	var minutes = document.getElementById("minutes").value;

	var seconds = document.getElementById("seconds").value;


	var message = document.getElementById("message");



	if (hour < 10) {

	message.innerHTML = name + ", how are you, it's morning!" ;
	}
	else if(hour < 20){
		message.innerHTML = name + ", how are you, it's afternon!" ;
	}

	else{

	message.innerHTML =  name + ", how are you, it's evening!";
}

}
