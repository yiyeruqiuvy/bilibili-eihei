登录注册

登录接口 http://yjp.x2.natapp.link/bilibili/user/login.do

参数username password

{"status":0,"msg":"登陆成功","data":{"id":1,"username":"admin","password":"","email":"admin@qq.com","phone":"18300000000","role":0,"createTime":1519375807000,"updateTime":1519740781000}}

{"status":1,"msg":"密码错误"}

{"status":1,"msg":"用户名不存在"}
 


注销接口http://yjp.x2.natapp.link/bilibili/user/logout.do

参数 无

{"status":0}



注册接口http://yjp.x2.natapp.link/bilibili/user/register.do

参数 username password phone email

{"status":0,"msg":"注册成功"}

{"status":1,"msg":"用户名已存在"}

改密码接口 http://yjp.x2.natapp.link/bilibili/user/reset_password.do

参数 passwordOld passNew   要先登录

{"status":0,"msg":"密码更新成功"}

{"status":1,"msg":"旧密码错误"}

