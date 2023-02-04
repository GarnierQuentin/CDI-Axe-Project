const dark_theme = document.querySelector('#dark_theme')
const white_theme = document.querySelector('#white_theme')

const bouton = document.querySelector(".bouton")
const connection = document.querySelector(".connection")

if(!localStorage.getItem("actual_theme")){
    let theme = localStorage.setItem("actual_theme", "black")
}
else{
    theme = localStorage.getItem("actual_theme")
}


const settings = document.querySelector('#settings')

if(typeof theme != "undefined"){
    if(theme === "white"){
        settings.style.backgroundColor = "whitesmoke"
        bouton.style.backgroundColor = "grey"
        connection.style.backgroundColor = "grey"
    }
}

white_theme.addEventListener('click', () => {
    settings.style.backgroundColor = "whitesmoke"
    settings.style.transition = "all 1s"
    localStorage.setItem("actual_theme", "white")
    bouton.style.backgroundColor = "grey"
    connection.style.backgroundColor = "grey"
})

dark_theme.addEventListener('click', () => {
    settings.style.backgroundColor = "grey"
    localStorage.setItem("actual_theme", "black")
    bouton.style.backgroundColor = "whitesmoke"
    connection.style.backgroundColor = "whitesmoke"
})