require(["./requirejs.config"], () => {
	require(["jquery", "item", "url", "header","footer"], ($, item, url) => {
		item.init(url.baseUrlRap+"/list");
		$(function(){
			$(".shoe").on("click",function(){
				$(".secondlist").show();
			})
		})
	})
	

})