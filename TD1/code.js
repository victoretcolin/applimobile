function init()
{
	var age = document.getElementById('age');
	age.addEventListener('input', function(e)
	{
		var regexNombre = /\D/;
		if(age.value <= 4 || age.value > 140 || age.value.match(regexNombre))
			age.style.borderColor="red";
		else if (age.value > 4 || age.value <= 140)
			age.style.borderColor="green";
	});

	var nom = document.getElementById('nom');
	var regex = /^[a-zA-Z]+$/;
	nom.addEventListener('input', function(e)
	{
		if(nom.value.match(regex))
			nom.style.borderColor="green";
		else
			nom.style.borderColor="red";

	});

	var prenom = document.getElementById('prenom');
	prenom.addEventListener('input', function(e)
	{
		if(prenom.value.match(regex))
			prenom.style.borderColor="green";
		else
			prenom.style.borderColor="red";

	});

	var regexMdp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
	var mdp = document.getElementById('mdp');
	mdp.addEventListener('input', function(e)
	{
		if(mdp.value.match(regexMdp))
			mdp.style.borderColor="green";
		else
			mdp.style.borderColor="red";
	});

	var field2 = document.getElementById('confirmation');
	field2.addEventListener('input', function(e)
	{
		if(field2.value == document.getElementById('mdp').value)
			field2.style.borderColor="green";
		else
			field2.style.borderColor="red";
	});

	var reset = document.getElementById('resetButton');
	reset.addEventListener('click', function(e) {
		resetFormulaire();
	});
}

function resetFormulaire() {
	var inputs = document.getElementsByTagName("INPUT");
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].type == "text" || inputs[i].type == "password")
			inputs[i].style.borderColor="initial";
	}
}

function isValidForm() {
	var fields = document.getElementsByTagName('INPUT');
	for(var i = 0; i < fields.length; i++) {
		if(fields[i].type == "text" || fields[i].type == "password") {
			if(fields[i].value == "" || fields[i].style.borderColor == "red") {
				document.getElementById('erreur').style.display = "block";
				return false;
			}
		}
	}

	if(document.getElementById('h').checked == false && document.getElementById('f').checked == false) {
		document.getElementById('erreur').style.display = "block";
		return false;
	}

	return true;
}
