window.onload = function () {
    // document.body.ontouchstart = function(screenRoll){
    //     screenRoll.preventDefault()
    // }
    var yyy = document.getElementById('xxx');
    var context = yyy.getContext('2d');
    autosetCanvasSize(yyy)
    listenToMouse(yyy)

    //橡皮擦和画笔的切换。尽量不要用一个按钮做两件事
    var eraserEnabled = false
    pen.onclick = function(){
        eraserEnabled = false
        pen.classList.add('active')
        eraser.classList.remove('active')
    }
    eraser.onclick = function(){
        eraserEnabled = true
        eraser.classList.add('active')
        pen.classList.remove('active')
    }
    //颜色
    black.onclick = function(){
        context.fillStyle = 'black'
        context.strokeStyle = 'black'
        black.classList.add('active')
        green.classList.remove('active')
        blue.classList.remove('active')
        red.classList.remove('active')
        yellow.classList.remove('active')
    }
    red.onclick = function(){
        context.fillStyle = 'red'
        context.strokeStyle = 'red'
        red.classList.add('active')
        green.classList.remove('active')
        blue.classList.remove('active')
        black.classList.remove('active')
        yellow.classList.remove('active')
    }
    green.onclick = function(){
        context.fillStyle = 'green'
        context.strokeStyle = 'green'
        green.classList.add('active')
        red.classList.remove('active')
        blue.classList.remove('active')
        black.classList.remove('active')
        yellow.classList.remove('active')
    }
    blue.onclick = function(){
        context.fillStyle = 'blue'
        context.strokeStyle = 'blue'
        blue.classList.add('active')
        green.classList.remove('active')
        red.classList.remove('active')
        black.classList.remove('active')
        yellow.classList.remove('active')
    }
    yellow.onclick = function(){
        context.fillStyle = 'yellow'
        context.strokeStyle = 'yellow'
        yellow.classList.add('active')
        green.classList.remove('active')
        red.classList.remove('active')
        black.classList.remove('active')
        blue.classList.remove('active')
    }
    //画笔粗细
    var lineWidth
    thin.onclick = function(){
        lineWidth = 3
    }
    thick.onclick = function(){
        lineWidth = 7
    }
    //清空
    clear.onclick = function(){
        context.clearRect(0,0,yyy.width,yyy.height);
    }
    //保存
    download.onclick = function(){
        var url = yyy.toDataURL("image/pgn")
        var a = document.createElement('a')
        document.body.appendChild(a)
        a.href = url
        a.download = '我的画画'
        a.target = '_blank'
        a.click()
    }
    /* *************** */
    function autosetCanvasSize(canvas) {
        setCanvasSize()
        window.onresize = function () {
            setCanvasSize()
        }
        function setCanvasSize() {
            var pageWidth = document.documentElement.clientWidth
            var pageHeight = document.documentElement.clientHeight
            yyy.width = pageWidth
            yyy.height = pageHeight
        }
    }
    var using = false
    var lastPoint = { x: undefined, y: undefined }
    function listenToMouse(canvas) {
        if (document.body.ontouchstart !== undefined) {     //特性检测
            //触屏
            canvas.ontouchstart = function (aaa) {
                var x = aaa.touches[0].clientX      //获取手机端xy坐标
                var y = aaa.touches[0].clientY
                using = true
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    lastPoint = { 'x': x, 'y': y }
                }
            }
            canvas.ontouchmove = function (aaa) {
                var x = aaa.touches[0].clientX
                var y = aaa.touches[0].clientY
                if (!using) { return }
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newPoint = { 'x': x, 'y': y }
                    // drawCircle(x, y, 1)
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                    lastPoint = newPoint
                }
            }
            canvas.ontouchend = function () {
                using = false
            }
        } else {
            //非触屏
            canvas.onmousedown = function (aaa) {
                var x = aaa.clientX
                var y = aaa.clientY
                using = true
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    lastPoint = { 'x': x, 'y': y }
                }
            }
            canvas.onmousemove = function (aaa) {
                var x = aaa.clientX
                var y = aaa.clientY

                if (!using) { return }
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newPoint = { 'x': x, 'y': y }
                    // drawCircle(x, y, 1)
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                    lastPoint = newPoint        //前后两个点连接后，结束时的点作为起始点，循环
                }
            }
            canvas.onmouseup = function (aaa) {
                using = false
            }
        }
    }
    function drawCircle(x, y, radius) {
        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill()
    }
    function drawLine(x1, y1, x2, y2) {         //用线把前后两个点链接起来
        context.beginPath();
        context.moveTo(x1, y1)       //起点
        context.lineWidth = lineWidth
        context.lineTo(x2, y2)       //终点
        context.stroke();
        context.closePath()
    }
}


