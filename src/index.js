import "./index.scss";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";
const main = document.querySelector("main");
const buttonsWrapper = main.querySelector("section");
const buttonSun = buttonsWrapper.querySelector(`[data-id="sun"]`);
const buttonRain = buttonsWrapper.querySelector(`[data-id="rain"]`);
const buttonWinter = buttonsWrapper.querySelector(`[data-id="winter"]`);
const sunIcon = buttonSun.querySelector(".card-icon-sun");
const rainIcon = buttonRain.querySelector(".card-icon-rain");
const winterIcon = buttonWinter.querySelector(".card-icon-winter");
let sunPlay = false;
let rainPlay = false;
let winterPlay = false;
let audioSun = new Audio(summerSound);
let audioRain = new Audio(rainSound);
let audioWinter = new Audio(winterSound);
buttonSun.addEventListener("click", (e) => {
  e.preventDefault();
  if (!sunPlay) {
    audioRain.pause();
    audioWinter.pause();
    audioSun.play();
    rainIcon.className = "button card-icon card-icon-rain rain";
    winterIcon.className = "button card-icon card-icon-winter winter";
    sunIcon.className = "button card-icon card-icon-sun pause";
    main.className = "background-sun";
    sunPlay = true;
    winterPlay = false;
    rainPlay = false;
  } else {
    sunPlay = false;
    audioSun.pause();
    sunIcon.className = "button card-icon card-icon-sun sun";
  }
});

buttonRain.addEventListener("click", (e) => {
  e.preventDefault();
  if (!rainPlay) {
    audioWinter.pause();
    audioSun.pause();
    audioRain.play();
    rainIcon.className = "button card-icon card-icon-rain pause";
    winterIcon.className = "button card-icon card-icon-winter winter";
    sunIcon.className = "button card-icon card-icon-sun sun";
    main.className = "background-rain";
    rainPlay = true;
    sunPlay = false;
    winterPlay = false;
  } else {
    audioRain.pause();
    rainPlay = false;
    rainIcon.className = "button card-icon card-icon-rain rain";
  }
});

buttonWinter.addEventListener("click", (e) => {
  e.preventDefault();
  if (!winterPlay) {
    audioSun.pause();
    audioRain.pause();
    audioWinter.play();
    winterIcon.className = "button card-icon card-icon-rain pause";
    rainIcon.className = "button card-icon card-icon-rain rain";
    sunIcon.className = "button card-icon card-icon-sun sun";
    main.className = "background-winter";
    winterPlay = true;
    sunPlay = false;
    rainPlay = false;
  } else {
    audioWinter.pause();
    winterPlay = false;
    winterIcon.className = "button card-icon card-icon-rain rain";
  }
});
