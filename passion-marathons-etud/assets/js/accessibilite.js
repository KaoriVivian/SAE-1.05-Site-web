function changeFontSize(type) {
    let texts = ["#title", "#text"];

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        el.forEach(element => {
            console.log(element);

            let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");

            fontSize = parseFloat(fontSize);

            if (type === "1") {
                element.style.fontSize = (fontSize + 3) + "px";
            } else {
                element.style.fontSize = (fontSize - 3) + "px";
            }
        })
    })
}

function DyslexieMode(type) {
    let texts = ["#title", "#text"];

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        if (type === "true") {
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

function ChangeThemeColor(type) {
    let texts = ["#title", "#text"];
    let body = document.querySelector("body")

    texts.forEach(text => {
        let el = document.querySelectorAll(text);

        el.forEach(element => {
            if (type === "Bleu") {
                element.style.color = "#000066";
                body.style.backgroundColor = "#ffb300"
            } else if (type === "Red") {
                element.style.color = "#660000";
                body.style.backgroundColor = "#ffff00"
            } else {
                element.style.color = "#006602";
                body.style.backgroundColor = "#ffffff"
            }
        })
    })
}