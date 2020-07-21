$(document).ready(function(){
	var arr = [".KazRobo",".TOM",".Oi",".KPO"];
	for(var i = 1;i<=3;i++){
		$(arr[i]).hide();
	}
	var num;
	var px1;
	var px2;
	$(".butt1").on("click",function(){
		var enem = $(this).text();
		if (enem == "<"){
			num = 3;
			px1 = "500px";
			px2 = "-800px";
		}
		else{
			num = 1;
			px1 = "-800px";
			px2 = "500px";
		}
		console.log(arr);
		$(arr[num]).css({
			"left":px1,
			"opacity":"0.0"
		});
		$(arr[0]).animate({
			"left":px2,
			"opacity":"0.0"
			},1000,function(){
				$(arr[0]).hide();
				$(arr[num]).show();
				$(arr[num]).animate({
				"left":"0px",
				"opacity":"1"
			},1500);
			if (enem == "<"){
			arr.unshift(arr[3]);
			arr.pop();
			}
			else{
			arr.push(arr[0]);
			arr.shift();
			}
		});
		
		console.log(arr);
		
	});
	/**/

		/*$(".profil > TOM").animate({
			"margin-left":"500px",
			"opacity":"1"
		},2000)*/
});
