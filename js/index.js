(()=>{
    $(".floor .toggle").on("click","a",function(){    
        //console.log($(this).html());
        let i=$(this).index();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(`.floor .content:eq(${i})`).addClass("index");
        $(`.floor .content:not(:eq(${i}))`).removeClass("index");
    });

})()