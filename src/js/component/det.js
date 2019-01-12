define(["jquery", "template"], ($, template) => {
	function Item(){

	}

	Item.prototype.init = function(url){
		//先load到页面上，得到url，然后去请求数据,渲染结构，
		
		//load
		new Promise((resolve, reject) => {
			console.log(url);
			$(".list-item").load("/html/component/details.html", () => {
				resolve();
			})
		}).then(() => {
			$.ajax({
				url: url,
				type: "get",
				success: function(res){
					console.log(res);
					if(res.res_code === 1){
						let list = res.res_body.data;
						//通过模板引擎渲染结构
						let html = template("detail-template", {list: res.res_body.data});
						
						$(".list-item ul").html(html);


					}
				}
			})
		})
		
		
	}

	return new Item();
})