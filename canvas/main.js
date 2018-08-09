window.onload = function () {
    var yyy = document.getElementById('xxx');
    var context = yyy.getContext('2d');
    autosetCanvasSize(yyy)
    listenToMouse(yyy)

    //橡皮擦和画笔的切换。尽量不要用一个按钮做两件事
    var eraserEnabled = false
    eraser.onclick = function () {
        eraserEnabled = true
        actions.className = 'actions x'
    }
    brush.onclick = function () {
        eraserEnabled = false
        actions.className = 'actions'
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
        context.lineTo(x2, y2)       //终点
        context.stroke();
        context.closePath()
        context.lineWidth = 2
    }




}


