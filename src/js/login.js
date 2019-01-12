//登录的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "cookie","header","footer"], () => {
		$(function(){
			$("#regBto").on("click",function(e){
				e.preventDefault();
				
				$.ajax({
					url: "http://localhost/api/v1/login.php",
					type: "post",
					data: {
						"username":  $("#username").val(),
						"password":  $("#password").val()
					},
					success: function(res){
						console.log("text");
						if(res.res_code){
							
							//用户名存cookie
							if($("#rememberMe").checked){
								$.cookie("username",res.res_body.username,{path:"/"});
							}else{
								$.cookie("username",res.res_body.username,{path:"/"});
							}
							if(confirm("登录成功，去首页")){
								window.location.href = "/index.html";
							}
						}
					},
					dataType: "json"
					/*console.log($("#username").val());*/
				})
				return false;
			})

		})

	})

})
