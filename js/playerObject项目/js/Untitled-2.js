'use strict'
function tuDou(n){
	return (n+1)<10?'0'+(n+1):''+(n+1);
}
window.onload=function(){
;(function(){
		var oUl=document.getElementById('d_ul');
		var aLi=oUl.getElementsByTagName('li');
		var oS=oUl.getElementsByTagName('span');
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.background='url(img/'+tuDou(i)+'.png) no-repeat #312f30 15px 4px';
			aLi[i].index=i;
			aLi[i].onmouseenter=function(){
				oS[this.index].style.display='block'
				this.style.background='url(img/'+tuDou(this.index)+'.png) no-repeat #0a0a0a 15px 4px'
			};
			aLi[i].onmouseleave=function(){
				oS[this.index].style.display='none';
				this.style.background='url(img/'+tuDou(this.index)+'.png) no-repeat #312f30 15px 4px'
			};
		}
})();
};