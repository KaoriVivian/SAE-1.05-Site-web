window.addEventListener('DOMContentLoaded',function(){
    const av = this.document.getElementById("av")
    const pd = this.document.getElementById("pd")
    const ap = this.document.getElementById("ap")



    av.addEventListener('click',function(){
        document.getElementById("avantM").style.display = "inline-block"
        document.getElementById("pendantM").style.display = "none"
        document.getElementById("apresM").style.display = "none"

    })
    pd.addEventListener('click',function(){
        document.getElementById("avantM").style.display = "none"
        document.getElementById("pendantM").style.display = "inline-block"
        document.getElementById("apresM").style.display = "none"

    })
    ap.addEventListener('click',function(){
        document.getElementById("avantM").style.display = "none"
        document.getElementById("pendantM").style.display = "none"
        document.getElementById("apresM").style.display = "inline-block"

    })

})