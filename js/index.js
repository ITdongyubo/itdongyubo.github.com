'use strict'
document.addEventListener('DOMContentLoaded',function(){
	var oUl1 = document.getElementById('option');
	var aLi1 = oUl1.getElementsByTagName('li');
	var aA1 = oUl1.getElementsByTagName('a'); 
	var oHr = document.getElementById('hd_r');
	var oHl = document.getElementById('hd_l');
	var oWe = document.getElementById('We');
	var oHed = document.getElementById('hed');
    var oInfor = oHl.getElementsByTagName('div')[0];
	var t = 0;
	var c = 0;
	var iNow = 0;
	var timer = null;
	var oH = document.documentElement.clientHeight+'px';
	var oW = document.documentElement.clientWidth+'px';
	oInfor.style.height = oH;
	oHl.style.height = oHr.offsetHeight+'px';
	//左边导航
	for(var i=0;i<aLi1.length;i++){
		aLi1[i].onmouseenter=function(){
			this.className='on';
		};
		aLi1[i].onmouseleave=function(){
			this.className='';
		};
	}
	for(var i=0;i<aA1.length;i++){
		aA1[i].style.background='url(img/'+i+'.png) no-repeat 30px 16px';
		aA1[i].index=i;
		aA1[i].onclick=function(){
			clearInterval(timer);
			scrollRun(this.index);
		};
	}
	function scrollRun(i){
		var T = document.documentElement.scrollTop||document.body.scrollTop;
		timer=setInterval(function(){
			if(T < 700*i && i >iNow){
				T+=17.5;
				window.scrollTo(0,T);
			}else if(T>700*i && i<iNow){
				T-=17.5;
				window.scroll(0,T)
			} else{
				window.scrollTo(0,i*700);
				iNow=i;
				clearInterval(timer);
			}
		},5);
	}
	//兼容火狐绑定取消滚动
	if(navigator.userAgent.indexOf('Firefox')!=-1){
		oHl.addEventListener('DOMMouseScroll',function(ev){
			var oEvent = ev||event;
			oEvent.preventDefault&&oEvent.preventDefault();
		},false);
		oHr.addEventListener('DOMMouseScroll',function(ev){
			var oEvent = ev||event;
			clearInterval(timer);
		},false);
	}else{
		oHl.onmousewheel = function(){
			return false;
		};
		oHr.onmousewheel = function(){
			clearInterval(timer);;
		};
	}
	//右边
	var oIm = oWe.getElementsByTagName('img')[0];
	oWe.style.height = oH;
	oIm.style.height = oH;
	//css布局
	var oUlc = document.getElementById('Css-ul');
	var aLic = oUlc.getElementsByTagName('li');
	var oPc = document.getElementById('prev');
	var oNc = document.getElementById('next');
	var aClass = [];
	for(var i=0;i<aLic.length;i++){
		aClass.push(aLic[i].className);
		aLic[i].onclick=function(){
			if(this.className=='l1'||this.className=='l2'){
				aClass.push(aClass.shift());
				for(var i=0;i<aLic.length;i++){
					aLic[i].className=aClass[i];
				}
				return false;
			}else if(this.className=='r1'||this.className=='r2'){
				aClass.unshift(aClass.pop());
				for(var i=0;i<aLic.length;i++){
					aLic[i].className=aClass[i];
				}
				return false;
			}
		};
	}
	oPc.onclick=function(){
		aClass.unshift(aClass.pop());
		for(var i=0;i<aLic.length;i++){
			aLic[i].className=aClass[i];
		}
	};
	oNc.onclick=function(){
		aClass.push(aClass.shift());
			for(var i=0;i<aLic.length;i++){
				aLic[i].className=aClass[i];
			}
	};
	//JS布局
	function a2d(n){
		return n*180/Math.PI;
	}
	function scrollY(){
		return document.documentElement.scrollTop||document.body.scrollTop;
	}
	function hoverDir(obj,ev){
		var sT = scrollY();
		var w = obj.offsetWidth;
		var h = obj.offsetHeight;
		var x = obj.offsetLeft+w/2-ev.pageX;
		var y = obj.offsetTop+h/2-ev.pageY;
		return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
	}
	function through(obj){
		var oS = obj.children[1];
		obj.onmouseover=function(ev){
			var oEvent = ev||event;
			var oForm = oEvent.formElement||oEvent.relatedTarget;
			if(this.contains(oForm))return;
			var dir = hoverDir(this,oEvent);
			switch(dir){
				case 0:
					//右
					oS.style.left = '270px';
					oS.style.top = 0;
					break;
				case 1:
					//下
					oS.style.left = 0;
					oS.style.top = '280px';
					break;
				case 2:
					//左
					oS.style.left = '-270px';
					oS.style.top = 0;
					break;
				case 3:
					//上
					oS.style.left = 0;
					oS.style.top = '-280px';
					break;
			}
			startMove(oS,{top:0,left:0});
		};
		obj.onmouseout=function(ev){
			var oEvent = ev||event;
			var oTo = oEvent.toElement||oEvent.relatedTarget;
			if(this.contains(oTo))return;
			var dir = hoverDir(this,oEvent);
			switch(dir){
				case 0:
					//右
					startMove(oS,{left:270,top:0});
					break;
				case 1:
					//下
					startMove(oS,{left:0,top:280});
					break;
				case 2:
					//左
					startMove(oS,{left:-270,top:0});
					break;
				case 3:
					//上
					startMove(oS,{left:0,top:-280});
					break;
			}
		};
	}
	var oUl = document.getElementById('ul');
	var aLi = oUl.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		through(aLi[i]);
	}
	//H5
	var oBtn = document.getElementById('btn1');
	var oUH = document.getElementById('H-U')
	var aLi = oUH.children;
	//布局转换
	var aPos = [];
	for(var i=0;i<aLi.length;i++){
		aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
	}
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.left = aPos[i].left+'px';
		aLi[i].style.top = aPos[i].top+'px';
		aLi[i].style.position = 'absolute';
		aLi[i].style.margin = 0;
		aLi[i].onmouseover=function(){
			this.style.WebkitTransition = '1s all ease';
			this.style.MozTransition = '1s all ease';
			this.style.msTransition = '1s all ease';
			this.style.transition = '1s all ease';
			this.style.WebkitTransform = 'scale(1.2) rotate(-15deg)';
			this.style.MozTransform = 'scale(1.2) rotate(-15deg)';
			this.style.msTransform = 'scale(1.2) rotate(-15deg)';
			this.style.transform = 'scale(1.2) rotate(-15deg)';
		};
		aLi[i].onmouseout=function(){
			this.style.WebkitTransition = '1s all ease';
			this.style.MozTransition = '1s all ease';
			this.style.msTransition = '1s all ease';
			this.style.transition = '1s all ease';
			this.style.WebkitTransform = 'scale(1) rotate(0deg)';
			this.style.MozTransform = 'scale(1) rotate(0deg)';
			this.style.msTransform = 'scale(1) rotate(0deg)';
			this.style.transform = 'scale(1) rotate(0deg)';
		};
	}
	var bOk = false;
	oBtn.onclick=function(){
		if(bOk)return;
		bOk = true;
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.WebkitTransition = '';
			aLi[i].style.MozTransition = '';
			aLi[i].style.msTransition = '';
			aLi[i].style.transition = '';
			(function(index){
				setTimeout(function(){
					startMove(aLi[index],{left:350,top:0,width:0,height:0,opacity:0},{complete:function(){
						if(index==aLi.length-1){
							//放出来
							for(var i=aLi.length-1;i>=0;i--){
								(function(index){
									setTimeout(function(){
										startMove(aLi[index],{left:aPos[index].left,top:aPos[index].top,width:200,height:200,opacity:1},{complete:function(){
											if(index==0){
												bOk = false;
											}
										}});
									},(aLi.length-i)*100);
								})(i);
							}
							
							
							
						}
					}});
					
				},i*100);
			})(i);
		}
	};
	//点歌台
	var aMp3 = ['Bruno Mars - Liquor Store Blues','Sting - Shape of My Heart (《这个杀手不太冷》电影片尾曲)','Toni Braxton - Fairy Tale','夜的钢琴曲','雨的印记'];
	var oMc = document.getElementById('MC');
	var oMc1 = document.getElementById('MC1');
	var oA = new Audio();
	var iNow2 = 0;
	tab();
	function tab(){
		oA.src='mp3/'+aMp3[iNow2]+'.mp3';
		oA.play();
	}
	oA.onended=function(){
		iNow2++;
		if(iNow==aMp3.length)iNow=0;
		tab();
	}
	var bOk = true;
	oMc.onclick=function(){
		if(bOk)
			oA.volume = 0;
		else
			oA.volume = 1;
		bOk = !bOk;
	};
	oMc1.onclick=function(){
		iNow2++;
		if(iNow==aMp3.length)iNow=0;
		tab();
	};
},false)