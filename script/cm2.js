$('.menu_bar li').mouseenter(function(){
    $(this).children().addClass('on')
return false

})

$('.menu_bar li').mouseleave(function(){
    $(this).children().removeClass('on')
return false

})




$('.ex .btn').click(function(){
    
    let figureH = $('.ex figure').height()
    
    if (figureH =='400'){
        $('.ex figure').height('auto') 
        $('.ex li').html('접어놓기').css({bottom: '0'})
        
    }   else {
        $('.ex figure').css({height: '400px'});
        $('.ex li').html('상세보기').css({color:'#000' , bottom: '-15%'})
    }
   

})

// //오늘날짜 찍기
// const currentDate = new Date();

// let year = currentDate.getFullYear();
// let month = currentDate.getMonth();
// let date = currentDate.getDate();

// $('.qna span').text(year +'-' +month+ '-'+ date)

$('.price li ul').mouseenter(function(){
    $(this).css({'border-bottom': '3px solid #FFD400'})
 
})
$('.price li ul').mouseleave(function(){
    $(this).css({'border-bottom': '0px solid #FFD400'})
 
})



$('.review .option p').click(function(){
    $(this).css({'font-weight': '600' , color: '#000'})
    
    $(this).siblings().css({'font-weight': '400' , color: '#666'})

})