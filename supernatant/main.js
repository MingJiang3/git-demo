let one = document.getElementsByClassName('one')[0]
let two = document.getElementsByClassName('two')[0]
one.addEventListener('click', function (e) {
    if ((e.target !== two) && (!two.contains(e.target))) {
        if (two.style.display == 'block') {
            two.style.display = 'none'
        } else {
            two.style.display = 'block'
            listenToDocument()
        }
    }
})
function listenToDocument(){
    document.addEventListener('click', function (e) {
        if (e.target === document.documentElement) {
            two.style.display = 'none'
            document.removeEventListener('click',arguments.callee)
        }
    })
}
