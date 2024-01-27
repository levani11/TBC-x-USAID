const coursesData = [
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg',
        title: 'iOS Development',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg',
        title: 'React',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg',
        title: 'Intro to Python',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg',
        title: 'Advanced Python',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg',
        title: 'Advanced Cybersecurity Course',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg',
        title: 'ToT - Training of Trainers',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg',
        title: 'Blockchain',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg',
        title: 'DevOps',
        isRegisterFinished: true,
    },
    {
        imgUrl: 'https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg',
        title: 'Information Security Governance',
        isRegisterFinished: true,
    },


];



toggleNav = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
}

 toggleMenu = () => {
    document.querySelector('.menu-btn').classList.toggle('active');
    document.getElementById('sideNav').classList.toggle('active');

}


fillCardInfo = () => {
    const card = coursesData.map(item => `
            <div class="card">
                <img src="${item.imgUrl}" class="card__img-top" alt="${item.title}">
                <div class="card__body">
                    <h5 class="card__title">${item.title}</h5>
                    <p class="card__text">${item.isRegisterFinished ? 'რეგისტრაცია დასრულებულია' : ''}</p>
                </div>
                <div class="card__footer">
                    <img src="./resources/icons/arrow.svg" alt="" class="card__icon">
                    <a href="#" class="card__details-link">კურსის დეტალები</a>
                </div>
            </div>
    `).join('');
    document.getElementById('cardContainer').innerHTML = card;
}
fillCardInfo();

handleClick = (me) => {
    me.nextElementSibling.classList.toggle('show');
    me.children[1].classList.toggle('down-arrow-rotated');
}

let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);

slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot--active";

    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}


  

