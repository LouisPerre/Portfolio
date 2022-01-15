const burgerMenu = document.querySelector('.burgerMenu')
const choice = document.querySelector('.list')
console.log(window.location.pathname)

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('open')
    choice.classList.toggle('open')
})


window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

if (!window.location.pathname.includes("project.html")&& !window.location.pathname.includes("competence.html")) {
    let compteur = 1
    let button = document.querySelectorAll('.next');
    let changeImg = document.querySelector('.image');
    const img = ['img/AudioAPP.PNG', 'img/AnimeAPP.PNG', 'img/SuperSimon.PNG'];
    button = Array.apply(null, button)
    button.forEach(but => {
        but.addEventListener('click', () => {
            if (but.classList.contains('rightArr')) {
                changeImg.style.backgroundImage = "url('" + img[compteur] + "')";
                compteur += 1;
                if (compteur == 3) {
                    compteur = 0
                }
            } else if (but.classList.contains('leftArr')) {
                changeImg.style.backgroundImage = "url('" + img[compteur] + "')";
                compteur -= 1;
                if (compteur == -1) {
                    compteur = 2
                }
            }
        })
    })

}
  


if (window.location.pathname.includes("/project.html")) {
    var swiper = new Swiper(".swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });

}

if (window.location.pathname.includes("/competence.html")) {
    var swiper2 = new Swiper(".swiper2", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });

}

let snowflakes_count = 200;

// let base_css = ``; // Put your custom base css here

if (typeof total !== 'undefined'){
    snowflakes_count = total;
}


// This function allows you to turn on and off the snow

// Creating snowflakes
function spawn_snow(snow_density = 200) {
    snow_density -= 1;

    for (let x = 0; x < snow_density; x++) {
        let board = document.createElement('div');
        board.className = "snowflake";

        document.getElementById('snow').appendChild(board);
    }
}

// Append style for each snowflake to the head
function add_css(rule) {
    let css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}



// Math
function random_int(value = 100){
    return Math.floor(Math.random() * value) + 1;
}

function random_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create style for snowflake
function spawnSnowCSS(snow_density = 200){
    let snowflake_name = "snowflake";
    let rule = ``;
    if (typeof base_css !== 'undefined'){
        rule = base_css;
    }
    
    for(let i = 1; i < snow_density; i++){
        let random_x = Math.random() * 100; // vw
        let random_offset = random_range(-100000, 100000) * 0.0001; // vw;
        let random_x_end = random_x + random_offset;
        let random_x_end_yoyo = random_x + (random_offset / 2);
        let random_yoyo_time = random_range(30000, 80000) / 100000;
        let random_yoyo_y = random_yoyo_time * 100; // vh
        let random_scale = Math.random();
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = Math.random();

        rule += `
        .${snowflake_name}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
    }

    add_css(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function() {
    spawnSnowCSS(snowflakes_count);
    spawn_snow(snowflakes_count);
};

// TODO add progress bar for slower clients

