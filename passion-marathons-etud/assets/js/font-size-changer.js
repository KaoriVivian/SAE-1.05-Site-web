function changeFontSize(type)
{
    let texts = [".title", ".text"];

    texts.forEach(text => {
        
        let el = document.querySelector(text);

        console.log(el);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");

        fontSize = parseFloat(fontSize);

        if(type === "increase")
        {
            el.style.fontSize = (fontSize + 0.313) + "rem";
        }
        else
        {
            el.style.fontSize = (fontSize - 0.313) + "rem";
        }
    })
}