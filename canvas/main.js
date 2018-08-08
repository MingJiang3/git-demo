window.onload = function () {
    var yyy = document.getElementById('xxx');
    pageSize()
    window.onresize = function(){
        pageSize()
    }
    function pageSize (){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        yyy.width = pageWidth
        yyy.height = pageHeight
    }

    var context = yyy.getContext('2d');
    var using = false
    var lastPoint = {x:undefined,y:undefined}

    yyy.onmousedown = function (aaa) {
        var x = aaa.clientX
        var y = aaa.clientY
        if(eraserEnabled){
            using = true
            context.clearRect(x-5,y-5,10,10)
        }else{
            using = true
            lastPoint = {'x':x,'y':y}
        }
    }
    yyy.onmousemove = function (aaa) {
        var x = aaa.clientX
        var y = aaa.clientY
        if(eraserEnabled){
            if(using){
                context.clearRect(x-5,y-5,10,10)
            }
        }else{
            if(using){
                var newPoint = {'x':x,'y':y}
                // drawCircle(x, y, 1)
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                lastPoint = newPoint
            }
        }
    }
    yyy.onmouseup = function (aaa) {
        using = false
    }
    function drawCircle(x, y, radius) {
        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill()
    }
    function drawLine(x1,y1,x2,y2){
        context.beginPath();
        context.moveTo(x1,y1)       //起点
        context.lineTo(x2,y2)       //终点
        context.stroke();
        context.closePath()
        context.lineWidth = 2
    }

    var eraserEnabled = false
    eraser.onclick = function(){
        console.log('aaaaa')
        eraserEnabled = !eraserEnabled

    }
}


