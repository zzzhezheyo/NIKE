require(["./requirejs.config"], () => {
	require(["jquery", "item", "url", "header","footer"], ($, item, url) => {
		item.init(url.baseUrlRap+"/list");
	})
})