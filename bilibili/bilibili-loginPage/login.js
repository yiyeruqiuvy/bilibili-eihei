var loginFt=document.querySelector(".loginFt");
loginFt.onclick=function(){
            var username=document.querySelector(".username");
            var password=document.querySelector(".password");
            var xhr = new XMLHttpRequest();
            xhr.open("post","http://yjp.x2.natapp.link/bilibili/user/login.do",true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                 if (xhr.readyState === 4 && xhr.status ===200){                             
                     var scriptxhr=JSON.parse(xhr.responseText);                 
                     console.log(scriptxhr);
                     // if (scriptxhr.msg=="登陆成功") {
                     //    alert("登录成功");                     
                     // } 
                     // else if(scriptxhr.msg=="密码错误") {
                     //    alert("密码错误");
                     // }
                     if (scriptxhr.status==0) {
                        alert("登录成功");                     
                     } 
                     else if(scriptxhr.status==1) {
                        alert("密码错误");
                     }                              
                }
               }
             xhr.send("username="+username.value+"&password="+password.value);
}


