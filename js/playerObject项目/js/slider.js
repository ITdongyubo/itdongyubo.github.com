'use strict'
define(function(require,exports,module){
	var mouseWheel=require('mouseWheel');
	exports.slider=function(id1,id2,id3,id4){
		var oSl=document.getElementById(id1);//'con_scroll_l'  滚轮左侧内容窗口
		var oSc=oSl.children[0];
		var oSr=document.getElementById(id2);// 'con_scroll_r'  右侧滚轮
		var oUp=oSr.children[0];
		var oM=oSr.children[1];
		var oD=document.getElementById(id3);//'con_scroll_drop'  滚动条
		var oDown=oSr.children[2];
		var oCon_l_b=document.getElementById(id4);//'con_l_b'   最大的滚轮窗口
		var top=0;
		oSc.style.left=0;
		oSc.style.position='absolute';
		
		function getPos(){
			if(top<0){
				top=0;	
			}else if(top>oM.offsetHeight-oD.offsetHeight){
				top=oM.offsetHeight-oD.offsetHeight;
			}
			oD.style.top=top+'px';
			var scale=top*(oSl.offsetHeight-oSc.offsetHeight)/(oM.offsetHeight-oD.offsetHeight);
			oSc.style.top=scale+'px';
		}
		oD.onmousedown=function(ev){
			var oEvent=ev||event;
			var disY=oEvent.clientY-oD.offsetTop;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				top=oEvent.clientY-disY;
				getPos();
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				oD.releaseCapture&&oD.releaseCapture();
			};
			oD.setCapture&&oD.setCapture();
			return false;
		};
		oUp.onclick=function(){
			top-=10;
			getPos();
		};
		oDown.onclick=function(){
			top+=10;
			getPos();
		};
		oUp.onmousedown=function(){
			clearInterval(oUp.timer);
			oUp.timer=setInterval(function(){
				top-=10;
				getPos();
			},100);	
		}
		oUp.onmouseup=function(){
			clearInterval(oUp.timer);
		};
		oDown.onmousedown=function(){
			clearInterval(oDown.timer);
			oDown.timer=setInterval(function(){
				top+=10;
				getPos();
			},100);	
		}
		oDown.onmouseup=function(){
			clearInterval(oDown.timer);
		};
		
		mouseWheel.mouseWheel(oCon_l_b,function(down){
			if(down){
				top+=10;
			}else{
				top-=10;
			}
			getPos();
		});
	};	
	

});