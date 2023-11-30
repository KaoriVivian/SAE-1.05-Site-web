window.addEventListener("DOMContentLoaded",function(){
    //Buttons
    const beforeBtn = document.getElementById("before");
    const duringBtn = document.getElementById("during");
    const afterBtn = document.getElementById("after");

    //Articles
    const articleBefore = document.getElementById("avantArticle");
    const articleDuring = document.getElementById("pendantArticle");
    const articleAfter = document.getElementById("apresArticle");

    beforeBtn.addEventListener('click',function(){
        beforeBtn.classList.add("btnSelected");
        duringBtn.classList.remove("btnSelected");
        afterBtn.classList.remove("btnSelected");

        console.log("before");
        ShowArticle('block', 'none', 'none');
    })
    duringBtn.addEventListener('click',function(){
        beforeBtn.classList.remove("btnSelected");
        duringBtn.classList.add("btnSelected");
        afterBtn.classList.remove("btnSelected");
        console.log("during");
        ShowArticle('none', 'block', 'none');
    })
    afterBtn.addEventListener('click',function(){
        beforeBtn.classList.remove("btnSelected");
        duringBtn.classList.remove("btnSelected");
        afterBtn.classList.add("btnSelected");
        console.log("after");
        ShowArticle('none', 'none', 'block');
    })

    function ShowArticle(before, during, after)
    {
        articleBefore.style.display = before;
        articleDuring.style.display = during;
        articleAfter.style.display = after;
    }

})