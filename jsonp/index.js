<title>daqian</title>
<h5>账户余额<span id="amount">&&&a&&&</span></span></h5>
<button id="button">打钱</button>
<script>
  button.addEventListener('click',(e)=>{
    let script = document.createElement('script')
    script.src = '/pay'
    document.body.appendChild(script)
    script.onload = function(e){
      e.currentTarget.remove()
    }
  })
</script>



