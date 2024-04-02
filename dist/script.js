// responsive nav side bar
const navLinks = document.querySelector('#navLinks')
const slider = document.querySelector('#sideBar')

// event function to add class and make it visible on click it or hide it
let sliderEvent =  () => {
    if (navLinks.classList.contains('hode')) {
        navLinks.classList.remove('hode')
        navLinks.style.display = 'block'
        document.querySelector('#bar').style.display = 'none'
        document.querySelector('#cross').style.display = 'block'
    } else {
        navLinks.classList.add('hode')
        navLinks.style.display = 'none'
        document.querySelector('#bar').style.display = 'block'
        document.querySelector('#cross').style.display = 'none'
    }
}
// add event listner for click on bar
slider.addEventListener('click', sliderEvent)

// remove event listner when user click on bar and cross for better performance
slider.addEventListener('click', () => {
    removeEventListener('click', sliderEvent)
})

// sticky nav bar
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrolledOl = document.querySelector('#scrolledOl');
    let scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      header.classList.add('scrolled');
      scrolledOl.classList.add('scrolled');
      slider.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      scrolledOl.classList.remove('scrolled');
      slider.classList.remove('scrolled');
    }
  });

  
  // typing text 
  let typeParent = document.querySelector('#typing-text2');
  let typingText = "specializing in Frontend Web Development.";
  let index = 0;


  function typing() {
    const interval = setInterval(() => {
        if (index < typingText.length) {
            typeParent.textContent += typingText[index];
            index++;
        } else {
            index = 0;
            typeParent.textContent = '';
            clearInterval(interval);
            setTimeout(typing, 60);
        }
    }, 60);
}

typing();

// card copy and add animation
const cardsData = [
    {
        image: './assets/ux-788002_1920.jpg',
        heading: 'Web <br> Designing',
        descrpition: 'Creative Web Design, Custom Web Design, Fully Responsive Design, User Interface, Website redesign. <br> <br> A lot more...',
        iconImage: './assets/app.png'
    },
    {
        image: './assets/application dev.jpg',
        heading: 'Web <br> Development',
        descrpition: 'Build interactive and user-focused front-end interfaces, ensuring a seamless user experience. <br> <br> A lot more...',
        iconImage: './assets/front-end.png'
    },
    {
        image: './assets/headway-jfR5wu2hMI0-unsplash.jpg',
        heading: 'Web <br> Application',
        descrpition: 'Web Api, External Api, Maintenance and Support, Custom Frontend Web Applications. <br> <br> A lot more...',
        iconImage: './assets/application-settings.png'
    }
];

const cardContainer = document.querySelector('#cardCopy')
const cardTemplate = document.querySelector('#cardtemp')

cardsData.forEach((item) => {
    const cloneCard = cardTemplate.cloneNode(true);
    // add animation, details function
    fillData(cloneCard, item)
    cardContainer.appendChild(cloneCard)
})

function fillData(cloneCard, item) {

    // fill card details
    let icon = cloneCard.querySelector('.icon1-bg')
    let descrpition = cloneCard.querySelector('.hide-text')
    let card_img = cloneCard.querySelector('.card-img')
    let title = cloneCard.querySelector('#card1-text')
    let iconContainer = cloneCard.querySelector('.icon1-bg-container')

    icon.src = item.iconImage
    card_img.src = item.image
    title.innerHTML = item.heading
    descrpition.innerHTML = item.descrpition

    
    // Add animation
    cloneCard.addEventListener('mouseenter', () => {
        iconContainer.style.background = '#1d1d1d';
        iconContainer.classList.remove('bg-pink-600')
        descrpition.style.transition = 'all 0.5s ease-in-out';
        descrpition.style.transform = 'translateY(0px)';
        card_img.style.display = 'none';
        cloneCard.style.background = 'white';
        cloneCard.style.color = 'black';
    })


    cloneCard.addEventListener('mouseleave', () => {
    iconContainer.style.background = ''
    iconContainer.classList.add('bg-pink-600')
    descrpition.style.transition = 'all 0.3s ease-in-out'
    descrpition.style.transform = 'translateY(200px)';
    card_img.style.display = 'block'
    cloneCard.style.color = 'white'
    cloneCard.style.background = 'none'
})
}

// project cards loop

const projectCards1 = [
    {
        img: './assets/template 10.png',
        heading: "PW Skills Clone",
        techStack: 'HTML, CSS',
        liveLink: 'https://pw-tailwind-site.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Pw-Skills-clone-tailwind.git'
    },
    {
        img: './assets/template 8.png',
        heading: "Hospital Website Landing Page",
        techStack: 'HTML, CSS',
        liveLink: 'https://hospital-landing-page-custom-css.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Hospital-website-custom-css.git'
    },
    {
        img: './assets/template 7.png',
        heading: "One Card Clone",
        techStack: 'HTML, CSS',
        liveLink: 'https://fantastic-pika-ec2658.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/One-card-Clone-Ui.git'
    },
    {
        img: './assets/template 6.png',
        heading: "Food delivery UI",
        techStack: 'HTML, CSS',
        liveLink: 'https://aquamarine-gumdrop-0c4607.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/food-delivery-UI.git'
    },
]

let hC_container = document.querySelector('.html-css-card-container');
let hC_card = document.querySelector('.html-css-card');

projectCards1.forEach((item) => {
    let hcClone = hC_card.cloneNode(true);
    fillCards(hcClone, item);
    hC_container.appendChild(hcClone);
})

function fillCards(hcClone, item) {
    let hc_cardImg = hcClone.querySelector('.hc-cardImg');
    let hC_heading = hcClone.querySelector('.hc-heading');
    let hc_techStack = hcClone.querySelector('.hc-techStack');
    let hc_liveLink = hcClone.querySelector('.hc-card-liveLink');
    let hc_github = hcClone.querySelector('.hc-card-github');
    
    hc_cardImg.src = item.img;
    hC_heading.textContent = item.heading;
    hc_techStack.textContent = item.techStack;
    hc_liveLink.href = item.liveLink;
    hc_github.href = item.githubLink;
}

// Html tailwind projects
const projectCard2 = [
    {
        img: './assets/template 1.png',
        heading: "NFT Landing Page",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'https://melodic-torte-52d55c.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/NFT-landing-page-Tailwind.git'
    },
    {
        img: './assets/template 2.png',
        heading: "E-bike Landing Page",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'https://eclectic-phoenix-1cc063.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Ebike-website-tailwind.git'
    },
    {
        img: './assets/template 3.png',
        heading: "Pixal lab UI",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'https://peppy-liger-3c0af0.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Pixlab-website-Tailwind.git'
    },
    {
        img: './assets/template 4.png',
        heading: "Linkedin Clone",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'https://linkedin-tailwind-site.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Linkedin-clone-tailwind.git'
    },
    {
        img: './assets/template 5.png',
        heading: "NetFlix Clone",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'Unavaliable',
        githubLink:'https://github.com/abhaysam2888/Netflix-clone-tailwind.git'
    },
    {
        img: './assets/template 9.png',
        heading: "Trust Co. UI",
        techStack: 'HTML, Tailwind CSS',
        liveLink: 'https://trustco-tailwind.netlify.app/',
        githubLink:'https://github.com/abhaysam2888/Trustco.-website-tailwind.git'
    },
]

let ht_container = document.querySelector('.html-tailwind-card-container');
let ht_card = document.querySelector('.html-tailwind-card')
projectCard2.forEach((item) => {
    let htClone = ht_card.cloneNode(true);
    htClone.classList.add('swiper-slide')
    fillHtData(item, htClone)
    ht_container.appendChild(htClone);
})

function fillHtData(item, htClone) {
    let ht_cardImg = htClone.querySelector('.ht-cardImg');
    let ht_heading = htClone.querySelector('.ht-heading');
    let ht_techStack = htClone.querySelector('.ht-techStack');
    let ht_liveLink = htClone.querySelector('.ht-card-liveLink');
    let ht_github = htClone.querySelector('.ht-card-github');

    ht_cardImg.src = item.img
    ht_heading.textContent = item.heading;
    ht_techStack.textContent = item.techStack;
    ht_liveLink.href = item.liveLink;
    ht_github.href = item.githubLink;
}

// initilize swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween:20,
    autoplay:{
      delay: 2500,
    },
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      700:{
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });