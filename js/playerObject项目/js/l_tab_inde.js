'use strict'
window.onload = function(){
	if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
		alert('您的浏览器版本过低')
	}

	;(function(){
		var oUl1 =document.getElementById('l_img');
		var aImg = oUl1.getElementsByTagName('li');
		var aA = oUl1.getElementsByTagName('a');
		var oDiv = document.getElementById('l_tab');
		var oTab = oDiv.getElementsByTagName('div')[0];
		var aLi = oDiv.getElementsByTagName('li');
		for(var i = 0;i<aA.length;i++){
			aA[i].onmouseover = function(){
				this.style.color = 'red';
			};
			aA[i].onmouseout = function(){
				this.style.color = '#fff';
			};
		}
		for(var i = 0;i<aLi.length;i++){
			(function(index){
				aLi[i].onmouseenter = function(){
					for(var i = 0;i<aLi.length;i++){
						startMove(aImg[i],{
								opacity:0
							},{
								duration:200
						})
					}
					oTab.style.left= index*aLi[0].offsetWidth+'px'; 
					startMove(aImg[index],{
						opacity:1
					},{
						duration:200
					});
				};
			})(i);
		}	
	})();
	;(function(){
		var oUl = document.getElementById('l_tab_forcus');
		var aLi = oUl.getElementsByTagName('li');
		var aPlay = oUl.getElementsByTagName('span');
		for(var i = 0;i<aLi.length;i++){
			(function(index){
				aLi[i].onmouseenter = function(){
					aPlay[index].style.display = 'block';
				};
				aLi[i].onmouseleave = function(){
					aPlay[index].style.display = 'none';
				};
			})(i);
		}
	})();
	
	
	//xuyu
	$('.y_tv_pic').hover(function(){
		$(this).find('.y_play').css({'display':'block'})
	},function(){
		$(this).find('.y_play').css({'display':'none'});
	})

	//sxt
	
		function sxtList(id)
	{
		var oSbox=document.getElementById(id);
		var aSdiv=oSbox.getElementsByTagName('h6');
		var aSdl=oSbox.getElementsByTagName('dl');
		var aSli=oSbox.getElementsByTagName('li');
		for(var i=0; i<aSli.length; i++)
		{
			(function (index){
				aSli[i].onmouseover=function ()
				{
					for(var i=0; i<aSli.length; i++)
					{
						aSdiv[i].style.display='block';
						aSdl[i].style.display='none';
					}
					aSdiv[index].style.display='none';
					aSdl[index].style.display='block';
				};
			})(i)
			
		}
	}
//点击收缩封装
	function sxtmove(mid1,mid2)
	{
		var oS1=document.getElementById(mid1);
		var oS_block=document.getElementById(mid2);
		var timer=null;
		oS1.onclick=function ()
		{
			if(this.innerHTML=='-')
			{
				oS1.innerHTML='+';			
				startMove(oS_block,{height:0});
				oS_block.style.overflow='hidden';
			}else{
				oS1.innerHTML='-';			
				startMove(oS_block,{height:oS_block.scrollHeight});		
			}				
		};
	}


	//自动播放选项卡封装
	function sxt_tab(id,mid1){
			
			var oSx_box1=document.getElementById(id);
			var oSul=oSx_box1.children[0];
			var s_Time=oSx_box1.children[1];
			var aSx_li=oSul.getElementsByTagName('li');
			var aSx_div=oSx_box1.getElementsByTagName('div');
			var oS1=document.getElementById(mid1);
			var timer=null;
			var iNow=0;
			for(var i=0; i<aSx_li.length; i++)
			{
				(function (index){
					aSx_li[i].onclick=function ()
					{
						iNow=index;
						sxt_act();
					}
				}(i))			
			}
			function sxt_time()
			{
				iNow++;
				if(iNow==aSx_li.length)
				{
					iNow=0;
				}
				sxt_act();
			}
			clearInterval(timer);
			timer=setInterval(function (){
				sxt_time();
			},1000);
			function sxt_act()
			{
				for(var i=0; i<aSx_li.length; i++)
				{
					aSx_li[i].className='';
					aSx_div[i].className='';
				}
				aSx_li[iNow].className='active';
				aSx_div[iNow].className='show';
			}
			oSx_box1.onmouseover=function ()
			{
				clearInterval(timer);
			};
			oSx_box1.onmouseout=function ()
			{
				/*if(s_Time.offsetHeight<=50)
				{
					clearInterval(timer);
				}else{
					timer=setInterval(function (){
						sxt_time();
					},1000);
				}*/
				if(oS1.innerHTML=='+')
				{
					clearInterval;
				}
				if(oS1.innerHTML=='-')
				{
					timer=setInterval(function (){
						sxt_time();
					},1000);
				}
			};
		}
				sxtList('sbox1');
		sxtList('sbox2');
		sxtList('sbox3');
		sxtList('sbox4');
		//自动播放选项卡
		sxt_tab('sxt_box','s_s1');
		sxt_tab('sxt_box1','s_s2');
		sxt_tab('sxt_box3','s_s3');
		sxt_tab('sxt_box4','s_s4');
		sxt_tab('sxt_box5','s_s5');
		//收缩效果
		sxtmove('s_s1','s_block1');
		sxtmove('s_s2','s_block2');
		sxtmove('s_s3','s_block3');
		sxtmove('s_s4','s_block4');
		sxtmove('s_s5','s_block5');

};

