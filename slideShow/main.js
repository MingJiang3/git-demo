// $('#bt1').on('click',function(){
//     $('.images').css({transform: 'translateX(0px)'})
// })
// $('#bt2').on('click',function(){
//     $('.images').css({
//         transform: 'translateX(-500px)'
//     })
// })
// $('#bt3').on('click',function(){
//     $('.images').css({transform: 'translateX(-1000px)'})
// })

var buttonAll = $('#buttons > button')
for (let i = 0; i < buttonAll.length; i++) {
    $(buttonAll[i]).on('click',function(x){
        console.log(x)
        var index = $(x.currentTarget).index()
        var n = index * -500
        $('.images').css({transform: 'translate('+n+'px)'})
    })
    
}




