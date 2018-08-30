let $buttons = $('.bt')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
makeFakeImage()
$slides.css({ transform: 'translateX(-920px)' })
bindEvents()




let timer = setInterval(function(){
    goToSlide(current+1)
  },4000)
  $('.window').on('mouseenter', function(){
    window.clearInterval(timer)
  }).on('mouseleave', function(){
    timer = setInterval(function(){
      goToSlide(current+1)
    },4000)
  })

function bindEvents() {
    $('.bts').on('click', 'div', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}
function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        //最后一张到第一张
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 920}px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` }).show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        //第一张到最后一张
        $slides.css({ transform: `translateX(0px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` }).show()
            })
    } else {
        $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` })
    }
    current = index
}
function makeFakeImage() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    // console.log($lastCopy[0].outerHTML)
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}


