(()=>{
    $(".floor .toggle").on("click","a",function(){    
        //console.log($(this).html());
        let i=$(this).index();
        let j=$(".toggle").index(this.parentNode);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(`.floor:eq(${j}) .content:eq(${i})`).addClass("index");
        $(`.floor:eq(${j}) .content:not(:eq(${i}))`).removeClass("index");
    });
	$(".floor .content").on("mouseenter","div.model",function(){
		//console.log(this);
		$(this).css({
			boxShadow :`0 0 1px 1px #666`,
			zIndex:4
		})
		$(this).children(":first").css("transform","scale(1.1)")
	})
		$(".floor .content").on("mouseleave","div.model",function(){
		//console.log(this);
		$(this).css({
			boxShadow :``,
			zIndex:""
		})
		$(this).children(":first").css("transform",'')
	})
})()