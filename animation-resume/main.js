var result = `/*
 * Hello  我是李名江
 * 那么多人用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border: 1px solid red;
    padding: 10px;
}
/*我需要代码高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #dd4a68;
}
/*加个3D效果看看*/
#code{
    transform-origin: bottom right 60px;
}
`
var n = 0
var timer = setInterval(()=>{
    n++
    code.innerHTML = result.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0,n)
    if (n >= result.length) {
        window.clearInterval(timer)
        fn2()
        fn3()
    }
},20)

function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function fn3(){
    
}