window.onload = function () {
    var yyy = document.getElementById('xxx');
    var context = yyy.getContext('2d');

    function drawCircle(x, y, radius) {
        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill()
    }
    var painting = false
    yyy.onmousedown = function (aaa) {
        painting = true
        var x = aaa.clientX
        var y = aaa.clientY
        drawCircle(x, y, 1)
    }
    yyy.onmousemove = function (aaa) {
        if(painting){
            var x = aaa.clientX
            var y = aaa.clientY
            drawCircle(x, y, 1)
        }
    }
    yyy.onmouseup = function (aaa) {
        painting = false
    }
    function drawLine(x1,y1,x2,y2){
        
    }

}


