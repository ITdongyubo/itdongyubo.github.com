'use strict'
window.onload = function(){
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
	//dong
		;(function(){
			var oUl=document.getElementById('d_ul');
			var aLi=oUl.getElementsByTagName('li');
			var oS=oUl.getElementsByTagName('span');
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.background='url(images/'+tuDou(i)+'.png) no-repeat #312f30 15px 4px';
				aLi[i].index=i;
				aLi[i].onmouseenter=function(){
					oS[this.index].style.display='block'
					this.style.background='url(images/'+tuDou(this.index)+'.png) no-repeat #0a0a0a 15px 4px'
				};
				aLi[i].onmouseleave=function(){
					oS[this.index].style.display='none';
					this.style.background='url(images/'+tuDou(this.index)+'.png) no-repeat #312f30 15px 4px'
				};
			}
		function tuDou(n){
			return (n+1)<10?'0'+(n+1):''+(n+1);
		}
	
	})();
	
	//xuyu
	$('.y_tv_pic').hover(function(){
		$(this).find('.y_play').css({'display':'block'})
	},function(){
		$(this).find('.y_play').css({'display':'none'});
	})

	
};

