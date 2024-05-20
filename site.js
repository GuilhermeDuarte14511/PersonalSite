document.addEventListener("DOMContentLoaded", function() {
    const mainTexts = ["0101010101010", "Guilherme Duarte"];
    const subtitleText = "Desenvolvedor .NET Full Stack JR II";
    let index = 0;
    const mainElement = document.getElementById("animated-text");
    const subtitleElement = document.getElementById("subtitle-text");

    function transformMainText() {
        mainElement.textContent = "";
        let currentText = mainTexts[index];
        let charIndex = 0;

        function typeMainChar() {
            if (charIndex < currentText.length) {
                mainElement.textContent += currentText[charIndex];
                charIndex++;
                setTimeout(typeMainChar, 150);
            } else {
                index = (index + 1) % mainTexts.length;
                setTimeout(transformMainText, 5000); // Change main text every 5 seconds
            }
        }

        typeMainChar();
    }

    function transformSubtitleText() {
        subtitleElement.textContent = "";
        let charIndex = 0;
        let currentText = subtitleText;

        function typeSubtitleChar() {
            if (charIndex < currentText.length) {
                subtitleElement.textContent += currentText[charIndex];
                charIndex++;
                setTimeout(typeSubtitleChar, 150);
            }
        }

        typeSubtitleChar();
    }

    transformMainText();
    setTimeout(transformSubtitleText, 5000); // Start transforming the subtitle after 5 seconds

    // Menu Hamburguer
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Fade in animation on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Smooth scrolling for menu links
    const links = document.querySelectorAll('nav .menu a');

    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});
