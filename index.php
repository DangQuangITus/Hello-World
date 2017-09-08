<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php echo "xin chào moi nguoi.";?>
	<?php 
	define('sinhvien', 'nguyendangquang');
	echo sinhvien;
	?>
	<br>
	<?php 
	$a = '123';
	$b = 123;
	$c = $a + $b;
	echo "gia tri c la: " ; echo $c;
	echo "<br>";
	if(is_int($c))
		echo "c la kieu int";
	else
		echo "c khong la kieu int";
	echo "<br>";
	$aa = array('a','b','c' );
	$bb = array('1','2','3' );
	print_r(array_combine($aa, $bb));
	$haystackarray = array('hello', 'nobody', 'freetuts.net');

// Kết quả là true
	var_dump(in_array('freetuts.net', $haystackarray));
	echo "<br";
	// Danh sách các năm
	$nam = array(
		1990,
		1991,
		1992,
		1993,
		1994,
		1995
		);

//Dùng foreach xuất ra các năm trong $nam
	foreach ($nam as $chimuc => $giatri){
		echo "<br>";
		//echo $chimuc . ' => ' . $giatri;
		echo $giatri;
	}
	$sinhvien = array(
		'SV001' => 'Nguyễn Văn A',
		'SV002' => 'Nguyễn Văn B',
		'SV003' => 'Nguyễn Văn C',
		'SV004' => 'Nguyễn Văn D',
		'SV005' => 'Nguyễn Văn E'
		);
	foreach ($sinhvien as $key => $value) {
		# code...
		echo "<br>";
		echo $key. '=>' .$value;
	}
	echo "<br>";
	for($i = 0;$i<10;$i++){
		echo $i;
		echo "<br>";
		if($i==8)
			break;
		
	}
	//$c = $a + $b;
	echo $c;
	echo "<br>";
	goto ketthuc;
	echo $b;
	ketthuc:
	// ham kiem tra
	function kiem_tra()
	{
    // bien tinh
		static $a = 0;
		$a++;
		echo $a;
	}
	
	kiem_tra();
	kiem_tra();
	?>
</body>
</html>
