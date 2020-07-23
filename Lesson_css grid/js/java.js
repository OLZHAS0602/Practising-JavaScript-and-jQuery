function valid(){
	var name1 = "olzhas";
	var pass1 = "123456";
	var enem1 = document.getElementById("name");
	var enem2 = document.getElementById("ifName");
	var enem3 = document.getElementById("pass");
	var enem4 = document.getElementById("ifPass");
	var enem_reg = document.getElementsByClassName("reg");
	var name = enem1.value;
	var pass = enem3.value;
	if(name == name1&&pass == pass1){
		enem2.innerHTML = "";
		enem4.innerHTML = "";
		enem_reg[0].innerHTML = "Вы вошли <br> Добро пожаловать <br>" + name;
		enem_reg[0].style.alignItems = "center";
		enem_reg[0].style.justifyItems = "center";
		enem_reg[0].style.gridTemplateRows = "auto";
		enem_reg[0].style.display = "grid";
	}
	else if(name != name1&&pass == pass1){
		enem2.innerHTML = "Неверное имя пользователя";
		enem4.innerHTML = "";
	}
	else if(pass != pass1&&name == name1){
		enem4.innerHTML = "Неверный пароль";
		enem2.innerHTML = "";
	}
	else{
		enem2.innerHTML = "Неверное имя пользователя";
		enem4.innerHTML = "Неверный пароль";
	}
}
var h = 0;
function tovar(value){
	var enem = document.getElementsByClassName("pict1");
	var bool = false;
	var i = 2;
	var j = 1;
	var bool = (h>=1); 
	console.log(bool);
	if(value == "<"){
		h++;
		if (bool == true){
			i = Number(enem[0].style.zIndex);
			j = Number(enem[1].style.zIndex);
		}
		enem[i-1].style.zIndex = 2;
		enem[j-1].style.zIndex = 1;
	}
	else if(value == ">"){
		h++;
		if (bool == true){
			i = Number(enem[0].style.zIndex);
			j = Number(enem[1].style.zIndex);
		}
		enem[i-1].style.zIndex = 2;
		enem[j-1].style.zIndex = 1;
	}
}
function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function ss(value){
	String(getRandomInt(10))
	var enem = document.getElementsByClassName("s");
	enem[Number(value)].style.color = "rgb(" + String(getRandomInt(256)) + "," + String(getRandomInt(256)) + "," + String(getRandomInt(256)) + ")";
}
function ss1(value){
	var enem = document.getElementsByClassName("s");
	enem[Number(value)].style.color = "black"
}