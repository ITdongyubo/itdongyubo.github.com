'use strict'
define(function(require,exports,module){
	exports.mouseWheel=	function (obj,fn){
		function fnWheel(ev){
			var oEvent=ev||event;
			var down=false;
			if(oEvent.wheelDelta){
				down=oEvent.wheelDelta<0?true:false;
			}else{
				down=oEvent.detail<0?false:true;
			}
			fn(down);
			oEvent.preventDefault&&oEvent.preventDefault();
			return false;
		}
		if(window.navigator.userAgent.indexOf('Firefox')!=-1){
			obj.addEventListener('DOMMouseScroll',fnWheel,false);
		}else{
			obj.onmousewheel=fnWheel;
		}
	}
});
	
