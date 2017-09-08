function change(){
	var x = document.getElementById('change');
	var type = x.type;
	var addText ="day la text them vao";
	var current=x.innerHTML;
	if(type == "button"){
		x.type="text";
	}
	else{
		x.type="button";
	}
}
function change2(){
	var x = document.getElementById('result');
	
	var addText =" day la text them vao";
	var current=x.innerHTML;
	x.innerHTML = current + addText;

}
function set_cont(){
	document.getElementById('result').innerHTML="<h1>day la the da change</h1>";
}

function validated(){
	var name = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var mess=document.getElementById('mess');

	if(name == "" || pass == ""){
		mess.innerHTML = "ban chua dien du thong tin!"
		mess.style.color="red";

	}
	else{
		mess.innerHTML="ban da dki thanh cong!!";
		mess.style.color="blue";
	}

}

// ham strattime de tao dong ho online
function startTime(){
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();

	h = check(h);
	m = check(m);
	s = check(s);

	document.getElementById('timer').innerHTML = h + ':' +m+':'+s;
	var t = setTimeout(function(){
		startTime();
	},500);
}

function check(x){
	if(x < 10){
		x = '0' + x;
	}
	return x;
}

function lammoi(){
	window.location.reload();
};
function toiAnime(){
	window.location.href = "http://animetvn.com/";
}
