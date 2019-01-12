//业务逻辑
 require(["./requirejs.config"], () => {
 	//引入index需要依赖的模块
 	require(["jquery", "header","footer","cookie"], () => {
 		 $(function(){
		// 	$(".create").load("/html/cart.html");

		 	var myCart = $.cookie('cart');
		 	let str = '',
		 		arr,
		 		price,
		 		num,
		 		n=0;
		 	if($.cookie("cart")){
		 		arr = JSON.parse($.cookie("cart"));
		 		console.log(arr);
		 	}
		 	for(var value of arr){
		 		str+='<tr>'+
					  '<td><input type="checkbox" class="check"/></td>'+
					  '<td><span class="size">'+ value.size +'</span></td>'+
					  '<td><span class="title">'+value.title+'</span></td>'+
					  '<td><span class="price">'+value.price+'</span></td>'+
					  '<td>'+
						  	'<a href="javascript:;" class="prev">-</a><span class="num">'+
						  	value.num+
						  	'</span><a href="javascript:;" class="next">+</a>'+
					  '</td>'+
					  '<td><span class="preDom">'+value.price*value.num+'</span></td>'+
					  '<td>'+
		            	'<a href="javascript:;" class="delBtn">删除</a>'+
		             '</td>'+
		             
	       		  '</tr>'
		 	}
		 	$("tbody").html(str);

		 	//单个商品价格
		 	function detailPrice(num,price){
		 		return num*price;
		 	}

		 	$("table").on("click",function(e){
		 		var e=e||window.event,
		 			target = e.target||e.srcElement,
		 			sizeDom,titleDom,priceDom,cA,cAnum,numDom,spriceDom,preDom,
		 			sum;
		 		var target = e.target || e.srcElement;
				//找到当前tr
				var tr = target.parentNode.parentNode;	
		 		//获取元素
		 		sizeDom = $(target).parents('tr').find('.size');
		 		// console.log(sizeDom);
		 		titleDom = $(target).parents('tr').find('.title');
		 		numDom = $(target).parents('tr').find('.num');
		 		priceDom = $(target).parents('tr').find('.price');
		 		preDom = $(target).parents('tr').find('.preDom');
		 		spriceDom = $("b",$("tfoot",box)[0])[0];
		 		cA = $(target).parents('tr').find('.check');
		 		cAnum = $("tbody .check");
		 		spriceDom.innerHTML=0;
		 		num = numDom.html();
		 		price = priceDom.html();
		 		// if(priceDom.html()) price = priceDom.html()	
		 		//增加
		 		if(target.className =="next"){
		 			num++;
		 			numDom.html(num);
		 			sum = detailPrice(num,price);
		 			preDom.html(sum);
		 			// sum = num*price;
		 			// spriceDom.innerHTML=sum;
		 			// console.log(spriceDom.innerHTML)
		 		}
		 		//减少
		 		if(target.className =="prev"){
		 			num--;
		 			num = num<=1? 1 :num;
		 			numDom.html(num);
		 			sum = detailPrice(num,price);
		 			preDom.html(sum);
		 			// console.log(sum);
		 			// spriceDom.innerHTML=sum;
		 			// console.log(spriceDom.innerHTML)
		 		}
		 		//单选
		 		if(target.className =="check"){
		 			// sum = detailPrice(num,price);
		 			// console.log(sum);
		 			// spriceDom.innerHTML=sum;
		 			var trNum = $("tbody tr").length;
		 			target.checked?n++:n--;
		 			// console.log(spriceDom.innerHTML)
		 		}
		 		//删除
		 		if(target.className =="delBtn"){
		 			if(confirm("您真的不买了吗？")){
		 				
		 				tr.parentNode.removeChild(tr);
		 				
		 			}
		 		}
		 		// console.log(sum);
		 		regain();

		 	})

		 	//重新获取
		 	function regain(){
		 		let allSum=0;
		 		let newArr=[];
		 		let trNum=$("tbody tr");
		 		let id;

		 		for(let i=0;i<trNum.length;i++){
		 			if($(trNum[i]).find(".check").prop('checked')){
		 				allSum += Number($(trNum[i]).find(".preDom").html());
		 				console.log(allSum);
		 			}
		 			// console.log($(trNum[i]).find(".size").html());
		 			let obj={
		 				size: $(trNum[i]).find(".size").html(),
		 				title: $(trNum[i]).find(".title").html(),
		 				price: $(trNum[i]).find(".price").html(),
		 				num: $(trNum[i]).find(".num").html()
		 				// preDom: $(trNum[i]).find(".priceDom").html();
		 			};
		 			newArr.push(obj);
		 			console.log(obj);
		 		}
		 		$("#money").html(allSum);
		 		$.cookie("cart",JSON.stringify(newArr),{path:'/'});
		 	}

		 	//end
 		 })
 	})

 })
