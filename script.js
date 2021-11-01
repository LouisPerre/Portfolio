const burgerMenu = document.querySelector('.burgerMenu')
const choice = document.querySelector('.list')

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('open')
    choice.classList.toggle('open')
})


if (window.location.pathname == "/project.html") {
    const projectTitle = document.querySelector(".projectTitle")
    const firstP = document.querySelector(".firstP")
    const secondP = document.querySelector(".secondP")
    const thirdP = document.querySelector(".thirdP")
    const forthP = document.querySelector(".forthP")
    const fifthP = document.querySelector(".fifthP")
    const illustration = document.querySelector(".bgi")
    const button = document.querySelector('.square')
    console.log(projectTitle)

    button.addEventListener("click", function() {
        console.log(illustration)
        if (projectTitle.innerHTML == "ANIME APP") {
            projectTitle.innerHTML = "AUDIO APP"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS"
            secondP.innerHTML = "Une page WEB qui lit des musiques en adaptant son background en fonction de la cover."
            thirdP.innerHTML = "Une bibliothèque me permet de récuperer la couleur principale de la pochette de la musique pour ensuite l’injécter dans le background."
            forthP.innerHTML = "La bibliothèque est : “imgcolr-master”."
            fifthP.innerHTML = "Lien github : “”"
            illustration.style.backgroundImage = "url('./AudioAPP.PNG')"
        } else if (projectTitle.innerHTML == "SUPER SIMON") {
            projectTitle.innerHTML = "ANIME APP"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS, JSON"
            secondP.innerHTML = "Une page WEB qui appelle une API pour récuperer une liste d'animé et d'ensuite créer une carte associé"
            thirdP.innerHTML = "Lors de l'appelle à l'API je reçoit un fichier JSON que je dois gerer en JS pour pouvoir travailler avec"
            forthP.innerHTML = "Explication fonction JSON."
            fifthP.innerHTML = "Lien github : “”"
            illustration.style.backgroundImage = "url('./AnimeAPP.PNG')"
        } else if (projectTitle.innerHTML == "AUDIO APP") {
            projectTitle.innerHTML = "SUPER SIMON"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS"
            secondP.innerHTML = "Une page WEB qui lance le jeu 'Simon' grace à des sons et des lumières qui nous permette de jouer"
            thirdP.innerHTML = "Lors du lancement de la partie plusieurs fonction asynchrone se lance et travaille ensemble pour faire évoluer le niveau de difficulté."
            forthP.innerHTML = "Explication asynchrone"
            fifthP.innerHTML = "Le projet n'est pas fini, voiçi le Lien github : “”"
            illustration.style.backgroundImage = "url('./SuperSimon.PNG')"
        }

    })

}
