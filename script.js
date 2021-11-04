const burgerMenu = document.querySelector('.burgerMenu')
const choice = document.querySelector('.list')

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('open')
    choice.classList.toggle('open')
})


if (window.location.pathname == "/Portfolio/project.html") {
    const projectTitle = document.querySelector(".projectTitle")
    const firstP = document.querySelector(".firstP")
    const secondP = document.querySelector(".secondP")
    const thirdP = document.querySelector(".thirdP")
    const forthP = document.querySelector(".forthP")
    const fifthP = document.querySelector(".fifthP")
    const illustration = document.querySelector(".bgi")
    const button = document.querySelector('.square')
    const link = document.querySelector('#linkGit')
    console.log(projectTitle)

    button.addEventListener("click", function() {
        console.log(illustration)
        if (projectTitle.innerHTML == "ANIME APP") {
            projectTitle.innerHTML = "AUDIO APP"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS"
            secondP.innerHTML = "Une page WEB qui lit des musiques en adaptant son background en fonction de la cover."
            thirdP.innerHTML = "Une bibliothèque me permet de récuperer la couleur principale de la pochette de la musique pour ensuite l’injécter dans le background."
            forthP.innerHTML = "La bibliothèque est : “imgcolr-master”."
            link.style.display = "block"
            fifthP.style.display = "block"
            link.href = "https://github.com/LouisPerre/Music-App-Player"
            fifthP.innerHTML = "Lien github : https://github.com/LouisPerre/Music-App-Player"
            illustration.style.backgroundImage = "url('img/AudioAPP.PNG')"
        } else if (projectTitle.innerHTML == "SUPER SIMON") {
            projectTitle.innerHTML = "ANIME APP"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS, JSON"
            secondP.innerHTML = "Une page WEB qui appelle une API pour récuperer une liste d'animé et d'ensuite créer une carte associé"
            thirdP.innerHTML = "Lors de l'appelle à l'API je reçoit un fichier JSON que je dois gerer en JS pour pouvoir travailler avec"
            forthP.innerHTML = "Utilisation de fetch() pour créer une promesse de l'objet de la requete, res.json() pour résoudre la promesse et pouvoir travailler avec l'objet puis map pour créer un tableau javaScript"
            link.style.display = "none"
            fifthP.style.display = "none"
            illustration.style.backgroundImage = "url('img/AnimeAPP.PNG')"
        } else if (projectTitle.innerHTML == "AUDIO APP") {
            projectTitle.innerHTML = "SUPER SIMON"
            firstP.innerHTML = "Languages utilisés: JavaScript, HTML, CSS"
            secondP.innerHTML = "Une page WEB qui lance le jeu 'Simon' grace à des sons et des lumières qui nous permette de jouer"
            thirdP.innerHTML = "Lors du lancement de la partie plusieurs fonction asynchrone se lance et travaille ensemble pour faire évoluer le niveau de difficulté."
            forthP.innerHTML = "Les fonctions dites 'async' servent souvent a contenir une expression await qui interrompt l'éxécution de la fonctgion pour pouvoir résoudre une promesse"
            link.style.display = "block"
            fifthP.style.display = "block"
            link.href = "https://github.com/LouisPerre/Super-Simon"
            fifthP.innerHTML = "Le projet n'est pas fini, voiçi le Lien github : https://github.com/LouisPerre/Super-Simon"
            illustration.style.backgroundImage = "url('img/SuperSimon.PNG')"
        }

    })

}

if (window.location.pathname == "/Portfolio/competence.html") {
    const projectTitle = document.querySelector(".projectTitle")
    const CompTitle = document.querySelector(".CompTitle")
    const firstP = document.querySelector(".firstP")
    const secondP = document.querySelector(".secondP")
    const thirdP = document.querySelector(".thirdP")
    const illustration1 = document.querySelector(".firstIMG")
    const illustration2 = document.querySelector(".secondIMG")
    const button = document.querySelector('.square')
    console.log(projectTitle)

    button.addEventListener("click", function() {
        console.log(illustration1)
        if (projectTitle.innerHTML == "PYTHON") {
            projectTitle.innerHTML = "GIT"
            CompTitle.innerHTML = "GIT & GITHUB"
            firstP.innerHTML = "Utilisation complète de GIT, que ce soit en ligne de commande ou via GitKraken, pour une intégration sur github ainsi qu’un travail collaboratif complet."
            secondP.innerHTML = "Apprentissage lors d’une semaine de cours complète, durant laquelle nous avons vu les conventions de nommage, la création de branche ainsi que la gestion de conflits."
            thirdP.innerHTML = "Utilisation de git commit, push, clone, pull ainsi que merge"
            illustration1.src = "logo/GitHub-Logo.png"
            illustration2.src = "logo/Git-Logo.png"
            illustration2.style.display = "block"
            //illustration2.style.width = "100%"
            //illustration1.style.width = "100%"

        } else if (projectTitle.innerHTML == "HTML") {
            projectTitle.innerHTML = "CSS"
            CompTitle.innerHTML = "CSS & SCSS"
            firstP.innerHTML = "Apprentissage poussé de CSS avec une compréhension du grid, flex ainsi que des transitions."
            secondP.innerHTML = "Recente formation au SCSS qui comprend l'utilisation des import ainsi que des variables et des conventions de nommages."
            thirdP.innerHTML = "Utilisation des selecteurs en respectant les forces tels que les class, les tags name, etc."
            illustration1.src = "logo/CSS3_logo.png"
            illustration2.src = "logo/Sass_Logo.png"
            //illustration1.style.width = "50%"
            illustration2.style.display = "block"
            //illustration2.style.width = "50%"

        } else if (projectTitle.innerHTML == "CSS") {
            projectTitle.innerHTML = "JS"
            CompTitle.innerHTML = "Java Script"
            firstP.innerHTML = "Le JS est un code très apprécié car il complète le site à l'aide d'animations ou d'effets sur certains éléments HTML"
            secondP.innerHTML = "Je sais comment selectionner un élément, le modifier, en créer de nouveaux."
            thirdP.innerHTML = "Je peux aussi créer des animations basiques pour rendre le site plus beau et plus agréable."
            illustration1.src = "logo/js-logo.png"
            illustration2.style.display = "none"
            //illustration1.style.width = "50%"

        } else if (projectTitle.innerHTML == "GIT") {
            projectTitle.innerHTML = "HTML"
            CompTitle.innerHTML = "HTML 5"
            firstP.innerHTML = "Sur du HTML je dirais que je suis plutot à l'aise."
            secondP.innerHTML = "Je sais comment l'utiliser proprement, en gardant les normes en place sans en avoir peur."
            thirdP.innerHTML = "Je peux faire un code relativement propre qui respectera les normes W3."
            illustration1.src = "logo/HTML5png.png"
            illustration2.style.display = "none"
            //illustration1.style.width = "50%"

        } else if (projectTitle.innerHTML == "PHP") {
            projectTitle.innerHTML = "PYTHON"
            CompTitle.innerHTML = "PYTHON"
            firstP.innerHTML = "Le python est un language que j'aime énormement car je le trouve simple à utiliser et à comprendre"
            secondP.innerHTML = "Je peux utiliser à peut près tout les types d'items pour créer de beau algorithmes pour par exemples résdoudre des équations ou créer des suites chiffres validant l'algorithme de Luhn"
            thirdP.innerHTML = "Le code que je fais peut ne pas paraitre propre mais j'essaye de l'optimiser au mieux"
            illustration1.src = "logo/Python-logo.png"
            illustration2.style.display = "none"
            //illustration1.style.width = "50%"

        } else if (projectTitle.innerHTML == "JS") {
            projectTitle.innerHTML = "GIT"
            CompTitle.innerHTML = "GIT & GITHUB"
            firstP.innerHTML = "Utilisation complète de GIT, que ce soit en ligne de commande ou via GitKraken, pour une intégration sur github ainsi qu’un travail collaboratif complet."
            secondP.innerHTML = "Apprentissage lors d’une semaine de cours complète, durant laquelle nous avons vu les conventions de nommage, la création de branche ainsi que la gestion de conflits."
            thirdP.innerHTML = "Utilisation de git commit, push, clone, pull ainsi que merge"
            illustration1.src = "logo/GitHub-Logo.png"
            illustration2.src = "logo/Git-Logo.png"
            illustration2.style.display = "block"
            //illustration1.style.width = "50%"
            //illustration2.style.width = "50%"

        }

    })

}
