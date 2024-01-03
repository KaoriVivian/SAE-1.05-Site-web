window.addEventListener('DOMContentLoaded', function () {

    const min_textSize = this.document.getElementById("min_textSize");
    const reset_textSize = this.document.getElementById('reset_textSize');
    const max_textSize = this.document.getElementById('max_textSize');

    const accessMenuButton = this.document.getElementById('accessMenuButton')
    const accessMenu = this.document.getElementById('accessMenu')

    const textColor = this.document.getElementById('textColor');
    const backgoundColor = this.document.getElementById('backgoundColor');

    accessMenuButton.addEventListener('click', function () {
        console.log('click')
        if (accessMenu.style.display === 'none') {
            accessMenu.style.display = 'flex'
        } else {
            accessMenu.style.display = 'none'
        }
    });

    min_textSize.addEventListener('click', function () {
        changeFontSize('min');
    });

    reset_textSize.addEventListener('click', function () {
        changeFontSize('reset');
    });

    max_textSize.addEventListener('click', function () {
        changeFontSize('max');
    });


})

let texts = [".title", ".text"];

function changeFontSize(mode) {
    let TitleDefaultSize = 32;
    let TextsDefaultSize = 16;

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        el.forEach(element => {
            console.log(element);

            let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");

            fontSize = parseFloat(fontSize);

            switch (mode) {
                case 'min':
                    element.style.fontSize = (fontSize - 3) + "px"
                    break;
                case 'max':
                    element.style.fontSize = (fontSize + 3) + "px";
                    break;

                case 'reset':
                    if (element.className === "title") {
                        element.style.fontSize = TitleDefaultSize + "px";
                    } else {
                        element.style.fontSize = TextsDefaultSize + "px";
                    }
                    break;
            }
        })
    })
}

function DyslexieMode(state) {

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        if (state) {
            el.forEach(element => {
                element.style.fontFamily = "Open-Dyslexie";
            })
        } else {
            el.forEach(element => {
                element.style.fontFamily = "Oswald";
            })
        }
    })
}

function ChangeThemeColor(mode) {

    let body = document.querySelector("body")

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        el.forEach(element => {
            if (mode === "Bleu") {
                element.style.color = "#000066";
                body.style.backgroundColor = "#ffb300"
            } else if (mode === "Red") {
                element.style.color = "#660000";
                body.style.backgroundColor = "#ffff00"
            } else {
                element.style.color = "#006602";
                body.style.backgroundColor = "#ffffff"
            }
        })
    })
}

function validateDyslexieMode() {
    if (dyslexiaSlider.checked == 1) {
        DyslexieMode(true);
    } else {
        DyslexieMode(false);
    }
}