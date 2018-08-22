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
        var index = $(x.currentTarget).index()
        var p = index * -500
        $('.images').css({transform: 'translateX('+p+'px)'})
        n = index
        activeButton(buttonAll.eq(p))
    })
}
var n = 0;
var size = buttonAll.length
playSlide(n%size)

var timeId = setTime()

$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})

$('.window').on('mouseleave',function(){
    timeId = setTime()
})

function activeButton($button){
    $button.addClass('red').siblings('.red').removeClass('red')
}
function playSlide(index){
    buttonAll.eq(index).trigger('click')
}
function setTime(){
        return setInterval(() =>{
        n += 1
        buttonAll.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red')
    },2000)
}

