$('.visual input').keyup(function(){
    let inputVal = $(this).val().length
    
    console.log( inputVal )

    if(inputVal > 0){$('.visual input').css({color:'#ffd400'})

 } else {
    $('.visual input').css({color:''});
 }
 
})

 let defaultFont = parseInt($('html').css('fontSize'))
$('.visual h2').click(function(){
    defaultFont++

    $('html').css({fontSize:defaultFont})

    console.log(defaultFont)    

})

$('.visual span').click(function(){
    defaultFont--
    $('html').css({fontSize:defaultFont})

})

// 특정값을 검색하면 메뉴색을 바꿔라
var currenturl = window.location.href; /* <도메인검색 변수 */
console.log(currenturl)
if (currenturl.indexOf('abcd') > -1){
    $('').eq(0).find('a').css({color:red})
}

