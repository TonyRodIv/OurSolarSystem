window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('change', window.scrollY > 1);
  });

let writeCard = document.getElementById('gridCards');

const cardContent = [
    {
        name: 'Mercury',
        image: './assets/minPic/mercury.png',
        description:'',
    },
    {
        name: 'Venus',
        image: './assets/minPic/venus.png',
        description:'',
    },
    {
        name: 'Earth',
        image: './assets/minPic/earth.png',
        description:'',
    },
    {
        name: 'Mars',
        image: './assets/minPic/mars.png',
        description:'',
    },
    {
        name: 'Jupiter',
        image: './assets/minPic/jupiter.png',
        description:'',
    },
    {
        name: 'Saturn',
        image: './assets/minPic/saturn.png',
        description:'',
    },
    {
        name: 'Uranus',
        image: './assets/minPic/uranus.png',
        description:'',
    },
    {
        name: 'Neptune',
        image: './assets/minPic/neptune.png',
        description:'',
    },
]
    for(i=0;i<cardContent.length;i++){
        let html = `
        <div class="card">
        <p>${cardContent[i].name}</p>
        <img src="${cardContent[i].image}" class="cardImg">
        </div>
        `
        writeCard.innerHTML += html
    }