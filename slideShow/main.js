$('bt1').on('click',function(){
    $(images).css({transform: 'translateX(0px)'})
})
$('bt2').on('click',function(){
    $(images).css({transform: 'translateX(-500px)'})
})
$('bt3').on('click',function(){
    console.log("111")
    $(images).css({transform: 'translateX(-1000px)'})
})
