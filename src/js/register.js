//注册的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer"], () => {
		$(function(){
			/*$(".create").load("/html/register.html");*/
			
			$("#regBtn").on("click",function(e){
				e.preventDefault();
				var wname = $("#username").val();
				var wpwd = $("#password").val();
				var wrePwd = $("#password2").val();
				var wtel = $("#tel").val();
				console.log(wname);

				//正则验证
				var reg =/\w/;
				var reg1 =/^.{6,}$/;
				var reg2 = /^1\d{10}/;
				console.log("text");
				var flag = true;
				//验证用户名	
				if(reg.test(wname)&&!wname==""){
					console.log("text");
				}else{
					alert("请输入正确的用户名");
				}
				//验证密码不能少于6位的字符
				if(reg1.test(wpwd)&&!wpwd==""){
					
				}else{
					alert("请输入正确的密码");
					flag = false;
				}
				//再次验证密码
				if(wpwd===wrePwd&&!wrePwd==""){
					
				} else{
					alert("请两次输入的密码一致");
					flag = false;
				}
				//验证以1开头11位的手机号码
				if(reg2.test(wtel)&&!wtel==""){
		
				}else{
					alert("请输入正确的手机号码");
					flag = false;
				}
				console.log("text");

				if(flag===false){
					alert("注册失败");
				}else{
					$.ajax({
						url: "http://localhost/api/v1/register.php",
						type: "post",
						data: {
							name: wname,
							tel: wtel,
							password: wpwd
						},
						success: function(res){
							console.log("t666");
							if(res.res_code ===1){
								alert("注册成功，马上去登录");
								location.href = "/html/login.html";
							}else if(res.res_code === 0){
								alert("用户名已存在,请重新注册");
							}
						},
						dataType: "json"
					})	
				}

				
				return false;
			})
		})

	})

})