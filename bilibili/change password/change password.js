var cPFsFs=document.querySelector("#cPFsFs");
cPFsFs.onclick=function(){
            var passwordOld=document.querySelector(".passwordOld");
            var passNew=document.querySelector(".passNew");
            var xhr = new XMLHttpRequest();
            xhr.open("post","http://yjp.x2.natapp.link/bilibili/user/login.do",true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                 if (xhr.readyState === 4 && xhr.status ===200){                             
                     var scriptxhr=JSON.parse(xhr.responseText);                 
                     console.log(scriptxhr);
                     if (scriptxhr.status==0) {
                        alert("密码更新成功");                     
                     } 
                     else if(scriptxhr.status==1) {
                        alert("旧密码错误");
                     }             
                    
                }
               }
            xhr.send("passwordOld="+passwordOld.value+"&passNew="+passNew.value);
}

