//初步
// setTimeout(() => {$('.images > img:nth-child(1)').css({transform: 'translateX(-100%)'})
// $('.images > img:nth-child(2)').css({transform: 'translateX(-100%)'}) 
// $('.images > img:nth-child(1)').one('transitionend',function(e){$(e.currentTarget).addClass('right').css({transform: 'none'})})  }, 2000);
// setTimeout(() => {$('.images > img:nth-child(2)').css({transform: 'translateX(-200%)'})
// $('.images > img:nth-child(3)').css({transform: 'translateX(-100%)'})   
// $('.images > img:nth-child(2)').one('transitionend',function(e){$(e.currentTarget).addClass('right').css({transform: 'none'})})}, 4000);
// setTimeout(() => {$('.images > img:nth-child(3)').css({transform: 'translateX(-200%)'})
// $('.images > img:nth-child(1)').css({transform: 'translateX(-100%)'})   
// $('.images > img:nth-child(3)').one('transitionend',function(e){$(e.currentTarget).addClass('right').css({transform: 'none'})})}, 6000);

//优化1
// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')
// let n = 1;
// function x(n){
//     if (n > 3) {
//         n = n %3
//         if (n === 0) {
//             n =3
//         }
//     }
//     return n 
// }
// setInterval(() =>{
//     $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
//     .one('transitionend',function(e){
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $(`.images > img:nth-child(${x(n+1)}`)
//     .removeClass('enter').addClass('current')
//     n++
// },2000)

// 优化2
let n
init()
let time = setInterval(() => {
    makeLeave(getImage(n)).one('transitionend', function (e) {
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n + 1))
    n++
}, 2000)

//解决页面切换bug 
document.addEventListener('visibilitychange', function (v) {
    if (document.hidden) {
        window.clearInterval(time)
    } else {
        time = setInterval(() => {
            makeLeave(getImage(n)).one('transitionend', function (e) {
                makeEnter($(e.currentTarget))
            })
            makeCurrent(getImage(n + 1))
            n++
        }, 2000)
    }
})


function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}

function init() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}






// setTimeout(() => {
//     $('.images > img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',function(e){
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
// }, 6000);
