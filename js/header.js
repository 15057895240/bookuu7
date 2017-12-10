(()=>{
    $.ajax({
        url:"data/header.html",
        success(data){
            $("header").html(data);
            $(".myBookuu").parent().mouseenter(()=>$(".myBookuu").show());
            $(".myBookuu").parent().mouseleave(()=>$(".myBookuu").hide());
            $(".top2 .classify").mouseenter(()=>$(".classify .absolute").show());
            $(".top2 .classify").mouseleave(()=>$(".classify .absolute").hide());
            $(".classify .absolute").on("mouseenter",".classifyList",function(){
                 let i=$(this).index();
                 //console.log(i);
                 $(this).children("b").css({
                    backgroundPosition:`-50px ${-50*i}px`,
                   
                 });
                 $(this).children("a").css({
                     color:"#000"
                 });
                 $(this).css({
                    opacity:1,
                    backgroundColor:"#fff"
                 });
                 $(this).children("ul").show();
             })
             $(".classify .absolute").on("mouseleave",".classifyList",function(){
                let i=$(this).index();
                //console.log(i);
                $(this).children("b").css({
                   backgroundPosition:`0 ${-50*i}px`,
                  
                });
                $(this).children("a").css({
                    color:"#fff"
                });
                $(this).css({
                   opacity:0.8,
                   backgroundColor:"#464646"
                });
                $(this).children("ul").hide();
            })
            let $listBox=$(".listBox");
            ///////////插入数据，本来是从数据库请求的
            $.ajax({
                url:"data/list.html",
                success(data){
                    $listBox.html(data);
                }
            })
            /////滚动到一定程度固定搜索框/先用dom实现
            // window.addEventListener("scroll",function(){
                
            //     let scrollTop=
            //       document.documentElement.scrollTop
            //       ||document.body.scrollTop;
            //       //console.log(scrollTop)
            //     let toFiexdBox=document.getElementsByClassName("top1")[0].parentNode;
            //     //console.log(toFiexdBox);
            //     //如果scrollTop>=384
            //     if(scrollTop>=384)
            //       //让header-top变为fixed定位，固定在文档显示区顶部
            //       toFiexdBox.className="fixed";           
            //     else//否则
            //       //让header-top变回原定位方式
            //       toFiexdBox.className="";
            // });

            $(window).on('scroll', function(){
                let _scroll = $(window).scrollTop();
                if(_scroll >= 200 ){
                    $('.top1').parent().addClass('fixed');
                }else{
                    $('.top1').parent().removeClass('fixed');
                }
            });
    
            /////
        }
    });
})()