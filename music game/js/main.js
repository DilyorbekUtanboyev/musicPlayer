const audio = document.querySelector("audio")
const mainImg = document.querySelector(".mainImg")
const next = document.querySelector(".next")
const back = document.querySelector(".back")
const playbtn = document.querySelector(".playbtn")
const main_img = document.querySelector(".main_img")
const fullTime = document.querySelector(".fullTime")
const current_Time = document.querySelector(".current_Time")
const line = document.querySelector(".line")
const lineBox = document.querySelector(".lineBox")
const repeat = document.querySelector(".repeat")
const text = document.querySelector(".text")

const songs = ["Lovely", "I_Can_Fly", "SAHARA", "доча", "гонг-конг", "Jah Khalib - Лейла", "November", "Noch", "Skyfall", "Xcho", "I Wanna Be Yours", "Caling you", "Bu Olis 18 yoshimda"]


var index = 0
var isPlaying = false

const Loading = () => {
    audio.setAttribute("src", `../media/${songs[index]}.mp3`);
    mainImg.setAttribute("src", `../imgs_author/${songs[index]}.jpg`)


}
Loading();

next.addEventListener("click", () => {
    if (index < 12) {
        index += 1
        main_img.classList.add("active")


    } else {
        index = 0
        main_img.classList.add("active")


    }

    Loading();
    playmusic();

})

back.addEventListener("click", () => {
    if (index != 0) {
        index -= 1
        playmusic();
        main_img.classList.add("active")


    } else {
        index = 12
        playmusic();
        main_img.classList.add("active")


    }

    Loading();
    playmusic();
})

playbtn.addEventListener("click", () => {

    if (isPlaying == false) {
        playmusic();
        main_img.classList.add("active")
    } else {
        pausemusic();
        main_img.classList.remove("active")


    }
});

const playmusic = () => {
    isPlaying = true;
    audio.play();
    playbtn.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`
}
const pausemusic = () => {
    isPlaying = false;
    audio.pause();
    playbtn.innerHTML = `<i class="fa-regular fa-circle-play"></i>`

}


const progress = () => {
    console.log(audio.duration);
    fullTime.textContent = change(audio.duration);
    current_Time.textContent = change(audio.currentTime);

    line.style.width = `${(audio.currentTime) * 100 / (audio.duration)}%`


}
audio.addEventListener("timeupdate", progress)

change = (a) => {
    var min = Math.floor(a / 60) < 10 ? "0" + Math.floor(a / 60) : Math.floor(a / 60)
    var sec = Math.floor(a % 60) < 10 ? "0" + Math.floor(a % 60) : Math.floor(a % 60)

    return `${min > 0 ? min : "00"}:${sec > 0 ? sec : "00"}`
}

lineBox.addEventListener("click", (e) => {
    const widthEl = lineBox.clientWidth
    const clickWidth = e.offsetX
    audio.currentTime = (clickWidth * audio.duration) / widthEl;

    isPlaying = true;
    audio.play();
    playbtn.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`
})

audio.addEventListener("ended", () => {
    if (index < 12) {
        index += 1
        main_img.classList.add("active")


    } else {
        index = 0
        main_img.classList.add("active")


    }

    Loading();
    playmusic();

})


repeat.addEventListener("click", () => {
    Loading();
    playmusic();
})
