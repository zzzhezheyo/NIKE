//登录的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer"], () => {
		$(function(){
			$(".create").load("/html/man.html");
		})
	})

})