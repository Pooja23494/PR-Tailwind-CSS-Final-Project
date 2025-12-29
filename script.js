// Header Background color
const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});

// Dropdown Toggle
document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        btn.querySelector("i").classList.toggle("rotate-180");
    });
});

// Deep Dropdown Toggle
document.querySelectorAll(".deep-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        btn.querySelector("i").classList.toggle("rotate-180");
    });
});

// Accordian

const faqBtns = document.querySelectorAll('.faq-btn');

function closeAll() {
    document.querySelectorAll('.faq-content').forEach(content => {
        content.style.maxHeight = null;

        const btn = content.previousElementSibling;
        btn.classList.remove('active');
        btn.querySelector('.icon').classList.remove('rotate-180');
    });
}

faqBtns.forEach((btn, index) => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.icon');

    if (index === 0) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.classList.add('active');
        icon.classList.add('rotate-180');
    }

    btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('active');

        closeAll();

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
            btn.classList.add('active');
            icon.classList.add('rotate-180');
        }
    });
});

// Slider

const slider = document.getElementById("teamSlider");
const prevBtn = document.querySelector(".bi-chevron-left").parentElement;
const nextBtn = document.querySelector(".bi-chevron-right").parentElement;

let isMoving = false;

function cardWidth() {
    return slider.children[0].getBoundingClientRect().width;
}

function nextSlide() {
    if (isMoving) return;
    isMoving = true;

    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${cardWidth()}px)`;

    slider.addEventListener("transitionend", function handler() {
        slider.removeEventListener("transitionend", handler);
        slider.appendChild(slider.children[0]);
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
        isMoving = false;
    });
}

function prevSlide() {
    if (isMoving) return;
    isMoving = true;

    slider.insertBefore(
        slider.children[slider.children.length - 1],
        slider.children[0]
    );

    slider.style.transition = "none";
    slider.style.transform = `translateX(-${cardWidth()}px)`;

    requestAnimationFrame(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = "translateX(0)";
    });

    slider.addEventListener("transitionend", function handler() {
        slider.removeEventListener("transitionend", handler);
        isMoving = false;
    });
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3500);

window.addEventListener("resize", () => {
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
});

// Scroll to Top

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100');
    }
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

