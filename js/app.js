var navBar = document.getElementById('navbar');

var home = document.getElementById('home');

var profile = document.getElementById('profile');

var skill1 = document.getElementById('skill-row-1')

var skill2 = document.getElementById('skill-row-2')

var contact = document.getElementById('contact')

window.addEventListener('scroll', () => {
    const windowHeight = window.scrollY;
    
    if(windowHeight > 350){
        navBar.classList.add("active")

        home.style.paddingTop = "60px";
    }
    else{
        navBar.classList.remove("active");
        
        home.style.paddingTop = "0";
    }

    if(windowHeight > 450){
        profile.classList.add("active");
    }

    if(windowHeight > 1000){
        skill1.classList.add("active");
    }

    if(windowHeight > 1300){
        skill2.classList.add("active");
    }

    if(windowHeight > 1900){
        contact.classList.add("active");
    }

    console.log(windowHeight)
})
