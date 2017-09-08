function copy(){
	alert("da copy thanh cong.");
};

function tong(){
	var x = document.getElementById('n1');
	var y = document.getElementById('n2');
	var z = document.getElementById('ketqua');

	var tong = parseInt(x.value) + parseInt(y.value);

	if(!isNaN(tong))
		z.value = tong;
};

function message(){
	var x = document.getElementsByClassName('show');
	for(var i = 0; i < x.length; i++){
		x[i].onclick = function(){
			alert('chao ban.');
			return false;
		};
	}
}
function inthuoctinh(obj){
	for(x in obj){
		document.writeln(x + '<br>');
	}
};

function xuattt(){
	with(document){
		write(this.ten + ", mssv: " + this.mssv);
	};
	document.write('<br>');
};
function hocsinh(ten,mssv){
	this.ten = ten;
	this.mssv = mssv;
	this.xuattt = xuattt;
};


function MyArr(n){
	this.length = n;
	for(var i = 1;i<n;i++){
		this[i] = i;
	}
	this.outArr = outArr;
	return this;
};

function outArr(){
	with(document){
		write("phan tu mang la: <br> " )
		for(var i = 1; i < this[0]; i++){
			write(this[i] + ', ');
		}
	}
};

function validated(){
	with(document){
		var username = getElementById('username').value;
		var pass = getElementById('password').value;
		var repass=getElementById('re-password').value;
		var age = getElementById('age').value;
	}
	if(username==""){
		alert('ban chua nhap username.');
		return false;
	}
	if(pass==""){
		alert('ban chua nhap password.');
		return false;
	}	
	if(repass==""){
		alert('chua xac nhan password.');
		return false;
	}
	if(repass != pass){
		alert('mat khau nhap lai khong khop.')
		return false;
	}
	if(age <0 || age > 120){
		alert("tuoi khong hop le, xin nhap lai.");
		return false;
	}
	return true;
}
// function TN(){
// 	var x=document.getElementById('input');
// 	document.getElementById('result').innerHTML = x.value;	
// }

// x.addEventListener('keyup',function(){
// 	if(x.value.length > 5){
// 		alert('chiu dai lon hon 5 ki tu.');
// 		return false;
// 	}
// });
// function testEventListener(){
// 	var event=document.getElementById('listener');
// 	event.addEventListener('keyup',function(){
// 		document.getElementById('result').innerHTML = event.value;
// 	});
// }

