define(["jquery","cookie"], () => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.nav();
				this.star();
			})
		}
		nav(){
			var titleTop = $('.inner').offset().top;
			// var arr=[];
			if($.cookie("username")){
				var arr = $.cookie("username");
				$("#user").html("欢迎您！"+arr+" ");
				// $("#out").html("tuichu");
				// $("#out").on("click",function(e){
				// 	e=e||event;
				// 	var target = e.target || e.srcElement;
				// 	console.log("texxt");
				// 	$.cookie("username","",{expires=-1,'path':'/'});
				// })
			}else{
				var arr = [];
			}
    		// var arr=$.cookie("username")?($.cookie("username")):[];
    		// console.log(arr);
    		// $("#user").html("欢迎您！"+arr);
		    $(document).on('scroll',function(){
		      if($(document).scrollTop() > titleTop){
		         $('.inner').css({
		             "position":"fixed",
		             "top":0
		     })
		    }else{
		 
		       $('.inner').css({
		           "position":"relative",
		           "top":0
		       })
		    }
		  })
		}

		star(){
			$("#ho1").hover(function(){
				$(".second").css("display","block");
			},function(){
				$(".second").css("display","none");
			})
			$("#ho2").hover(function(){
				$(".second").css("display","block");
			},function(){
				$(".second").css("display","none");
			})
		}

		
	}
	return new Header();
})