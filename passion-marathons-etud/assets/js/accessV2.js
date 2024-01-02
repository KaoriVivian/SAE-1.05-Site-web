window.addEventListener('DOMContentLoaded', function(){
    let texts = ["#title", "#text"];

    const min_textSize = this.document.getElementById("min_textSize");
    const reset_textSize = this.document.getElementById('reset_textSize');
    const max_textSize = this.document.getElementById('max_textSize');

    const accessMenuButton = this.document.getElementById('accessMenuButton')
    const accessMenu = this.document.getElementById('accessMenu')

    const textColor = this.document.getElementById('textColor');
    const backgoundColor = this.document.getElementById('backgoundColor')

    accessMenuButton.addEventListener('click', function(){
        console.log('click')
        if (accessMenu.style.display === 'none'){
            accessMenu.style.display = 'block'
        }else{
            accessMenu.style.display = 'none'
        }
    })
    

}
)