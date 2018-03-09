// personalCenter
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
// comments
var videoComment=document.querySelector(".videoComment");
var videoCommentFtButton=document.querySelector(".videoCommentFtButton");
var videoCommentFtSd=document.querySelector(".videoCommentFtSd");
var newCommentss=new Array();
var i=0;
videoCommentFtButton.addEventListener("click",function(){
	var videoCommentFtInput=document.querySelector(".videoCommentFtInput");
	var newComment=videoCommentFtInput.value;
	newCommentss[i]=newComment;
	 console.log(newCommentss[i]);
	i++;
	// console.log(newComment);
    var newComments=document.createElement("p");
    newComments.innerHTML=newComment;
    newComments.className="videoCommentsStyle";
  	videoCommentFtSd.appendChild(newComments);
},false);

//弹幕 
var box=document.getElementById("box");
var clientH=300;
box.style.height=clientH + "px";
// box.style.width=666 + "px";
function tm() {
    var div=document.createElement("div");
    div.setAttribute('class','smallBox');
    box.appendChild(div);
    div.innerHTML=newCommentss[0];
    div.style.left=Math.floor(Math.random() * 300) + 1000 + "px";
    div.style.top=Math.floor(Math.random() * (clientH - 60)) + "px";
    div.style.backgroundColor="rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + 0.5+ ")";
    div.style.color="rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + 0.9+ ")";
    var l=div.offsetLeft-800;
    var t=div.offsetTop-300;
    var time=null;
    time=setInterval(function() {
        l--;
        if (l < 30) {
            clearInterval(time);
            box.removeChild(div);
        }
        div.style.left=l + 'px';
    }, 10)
}

//这个控制没有用，不晓得为啥子
var j=1;
var commintsButton=document.querySelector(".commintsButton");
commintsButton.onclick=function() {
	if ((j%2)==1) {
		var p=setInterval(tm, 200);
	}
	else if((j%2)==0){
		clearInterval(p);
	}
	console.log(j%2);
	j++;

}


// 弹幕 不清楚为什么不行，难道是没有随时检测left吗，，，
 // function commintMove(){	
 // 	 	var commentMove=document.querySelector(".commentMove");
 // 	for (var i=0; i < newCommentss.length; i++) {
 		
 // 		var newCommentsss=document.createElement("p");
 // 		newCommentsss.innerHTML=newCommentss[i];
 // 		newCommentsss.className="commintStyle";
 // 		// console.log(newCommentsss);
 // 		commentMove.appendChild(newCommentsss);
 // 		// videoCommentFtSd.appendChild(newComments);
 // 		move(-500,newCommentsss);

 // 	}
 	
 // }
 // function move(offset,objectMove){
 //   	  	var newleft=parseInt(objectMove.offsetLeft )+offset;
	//    	objectMove.position="relative";
	//    	tmove();
 //       	function tmove(){
 //           var weiyizongshijian=500;
 //    		   var weiyishijianjiange=50;
 //    		   var v=offset/(weiyizongshijian/weiyishijianjiange);
 //    		   if ((v>0&&parseInt(objectMove.offsetLeft )<newleft)||(v<0&&parseInt(objectMove.offsetLeft )>newleft)){
 //    		   setTimeout(tmove,weiyishijianjiange); 
    		  
 //    		   objectMove.offsetLeft =parseInt(objectMove.offsetLeft )+v+"px";
 //    		   }
	        
 //       }
	// }
