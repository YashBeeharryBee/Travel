/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    window.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)


/*=============== PROFILE ENHANCE ===============*/
const profileImg = document.querySelector(".explore__profile");
const overlay = document.createElement("div");
overlay.classList.add("image-overlay");
document.body.appendChild(overlay);

profileImg.addEventListener("click", () => {
    profileImg.classList.toggle("enlarged");
    overlay.style.display = profileImg.classList.contains("enlarged") ? "block" : "none";
});

// Close the image when clicking outside
overlay.addEventListener("click", () => {
    profileImg.classList.remove("enlarged");
    overlay.style.display = "none";
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');
    if (scrollUpElement) {
        window.scrollY >= 350 
            ? scrollUpElement.classList.add('show-scroll') 
            : scrollUpElement.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
