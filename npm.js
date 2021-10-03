const moment = require('moment');
require('moment/locale/ru.js');

const Chart = require('chart.js');
const particles = require('particles.js')

const Typed = require('typed.js');

var typed = new Typed('#typed', {
    strings: ['Распределение положительных качеств Карлсона'],
    typeSpeed: 50,
    
    loop: false,
    cursorChar: '',
    
});

// Получение ссылки на элемент canvas в DOM
const $grafica = document.querySelector("#grafica");
// Tags - участки графика
const tags = ["Щедрость", "Честность", "Благоразумие", "Спокойствие"]
// У нас может быть несколько наборов данных. Давайте начнем с одного
const dataTraffic = {
    data: [5, 5, 3, 87], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
    // Теперь цветов фона должно быть столько, сколько данных, т.е. для данного примера 4.
    backgroundColor: [
        '#4d6adf',
        '#dfc24d',
        '#4ddfc2',
        '#dfa992',
    ], // Цвет фона
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ], // Цвет границы
    borderWidth: 1, // Толщина границ
};
new Chart($grafica, {
    type: 'pie', // Тип графики. Может быть dougnhut  или pie
    data: {
        labels: tags,
        datasets: [
            dataTraffic,
            // Больше данных
        ]
    },
});

// добавление времени
document.getElementById('date').innerHTML = moment().format('Do MMMM YYYY, h:mm:ss a');

// добавление фона с абстракцией
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;