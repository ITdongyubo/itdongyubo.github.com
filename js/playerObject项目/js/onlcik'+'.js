window.onload=function(){
	var oBtn=document.getElementById('jian');
	var oxBox=document.getElementById('d_Xbox');
	oBtn.onclick=function(){
		if(oBtn.innerHTML=='-'){
			oBtn.innerHTML='+';
			startMove(oxBox,{'height':'0'},{'easing':'ease-out'});
		}else if(oBtn.innerHTML=='+'){
			oBtn.innerHTML='-';
			startMove(oxBox,{'height':'334'},{'easing':'ease-in'});
		}
	};
	
	
	
	
	
	
		var iNow=0;
	$('#lol span').click(function(){
		$('#lol span').css('background','#303030');
		$(this).css('background','#1e1e1e');
		$('#d_Xbox div').css('display','none');
		$('#d_Xbox div').eq($(this).index()).css('display','block');
	});
	function next(){
		$('#lol span').css('background','#303030');
		$('#lol span').eq(iNow).css('background','#1e1e1e');
		$('#d_Xbox div').css('display','none');
		$('#d_Xbox div').eq(iNow).css('display','block')
		iNow++
		if(iNow>1){iNow=0}
		
	};
	var timer=setInterval(next,1000);
	$('#d_ne').mouseenter(function(){
		clearInterval(timer);
	});
	$('#d_ne').mouseleave(function(){
		timer=setInterval(next,1000);
	});
	$('#d_num li').click(function(){
		$('#d_num li').css('color','#b9e3e1');
		$(this).css('color','#fe6700');
	});

	
	
};