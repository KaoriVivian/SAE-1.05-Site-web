window.addEventListener("DOMContentLoaded",function(){
    //Buttons
    const btnAvant = document.getElementById("avant");
    const btnPendant = document.getElementById("pendant");
    const btnApres = document.getElementById("apres");

    //Articles
    const articleAvant = document.getElementById("avantArticle");
    const articlePendant = document.getElementById("pendantArticle");
    const articleApres = document.getElementById("apresArticle");

    btnAvant.addEventListener('click',function(){
        btnAvant.classList.add("btnSelected");
        btnPendant.classList.remove("btnSelected");
        btnApres.classList.remove("btnSelected");

        console.log("avant");
        ShowArticle('block', 'none', 'none');
    })
    btnPendant.addEventListener('click',function(){
        btnAvant.classList.remove("btnSelected");
        btnPendant.classList.add("btnSelected");
        btnApres.classList.remove("btnSelected");
        console.log("pendant");
        ShowArticle('none', 'block', 'none');
    })
    btnApres.addEventListener('click',function(){
        btnAvant.classList.remove("btnSelected");
        btnPendant.classList.remove("btnSelected");
        btnApres.classList.add("btnSelected");
        console.log("apres");
        ShowArticle('none', 'none', 'block');
    })

    function ShowArticle(avant, pendant, apres)
    {
        articleAvant.style.display = avant;
        articlePendant.style.display = pendant;
        articleApres.style.display = apres;
    }

})