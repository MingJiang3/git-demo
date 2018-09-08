function css(prefix,code,fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n),Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            console.log(1)
            fn && fn.call()
        }
    },10)
}
function markdown(markdowns,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(()=>{
        console.log(2)
        n += 1
        domPaper.innerHTML = markdowns.substring(0,n)
        console.log(3)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdowns.length) {
            window.clearInterval(id)
            console.log(4)
            fn && fn.call()
        }
    },50)
}
function creatPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}
function markdownToHtml(fn){
    console.log(5)
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    console.log(6)
    let mdContainer = document.querySelector('#paper > .content')
    mdContainer.replaceWith(div)
    fn && fn.call()
}


var result1 = `/*
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
    border: 1px solid #aaaaaa;
    padding: 10px;
}
/*代码高亮一点*/
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
    animation: breath 1.5s infinite alternate-reverse;
}

/*开始了，上纸*/

#code-wrapper{
    width: 50%; left: 0; position: fixed; 
    height: 100%;
}
#paper > .content {
    display: block;
}
`
var result2 = `
/* 接下来用marked的库 marked.js
 * 把 Markdown 转成 HTML
 */
`
var md = `
# 自我介绍
我是 李名江
1995 年 1 月出生
毕业于xxx
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`

let result3 = `
/*
*一份简历完成了
*Thanks♪(･ω･)ﾉ
*/
`

css('',result1,creatPaper(()=>{
        markdown(md,()=>{
            css(result1,result2,()=>{
                markdownToHtml(()=>{
                    css(result1+result2,result3,()=>{
                    })
                })
            })
        })
    })
)