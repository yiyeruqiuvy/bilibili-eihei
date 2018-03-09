var headImg=document.querySelector(".headImg");
var personalCenter=document.querySelector(".personalCenter");
headImg.onmouseover=function(){
	personalCenter.style.display="inline";
	personalCenter.style.top="41px";
	headImg.style.width="60px";
	headImg.style.height="60px";
	headImg.style.top="15px";
	
}
headImg.onmouseout=function(){
	personalCenter.style.display="none";
	personalCenter.style.top="41px";
	headImg.style.width="30px";
	headImg.style.height="30px";
	headImg.style.top="";
}
personalCenter.onmouseover=function(){
	personalCenter.style.display="inline";
	personalCenter.style.top="41px";
	headImg.style.width="60px";
	headImg.style.height="60px";
	headImg.style.top="15px";
}
personalCenter.onmouseout=function(){
	personalCenter.style.display="none";
	personalCenter.style.top="41px";
	headImg.style.width="30px";
	headImg.style.height="30px";
	headImg.style.top="";
}
// console.log(personalCenter);	