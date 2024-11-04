
const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector('.volume-slider input');

const keysCheck = document.querySelector('.keys-check input');

let mapedKeys = [];

let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickKey = document.querySelector(`[data-key="${key}"]`);
    clickKey.classList.add('active');
    setTimeout(() => {
        clickKey.classList.remove('active')
    }, 150);
};

pianoKeys.forEach((key) => {
    // console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
    
});

document.addEventListener("keydown",
    (e) => {

        if(mapedKeys.includes(e.key)){
            playTune(e.key);
        }
        // console.log(e.key);
    });

const handleVolume = (e) => {
    audio.volume = e.target.value;
    console.log(e.target.value);
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
};

volumeSlider.addEventListener('input', handleVolume);

keysCheck.addEventListener("click", showHideKeys);