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
        });