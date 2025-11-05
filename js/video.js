window.addEventListener("load", function () {
    console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", () => {
    let video = document.querySelector(".video");
    // when end of video reached loop back to beginning - default is false
    video.loop = false;

    // play
    document.querySelector("#play").addEventListener("click", function () {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").textContent = `${video.volume * 100}%`;
    });

    // pause
    document.querySelector("#pause").addEventListener("click", () => {
        console.log("Pause Video");
        video.pause();
    });

    // slow down
    document.querySelector("#slower").addEventListener("click", () => {
        console.log("Slow Down");
        console.log(`Current speed is ${video.playbackRate}`);
        video.playbackRate *= 0.9;
        console.log(`New speed is ${video.playbackRate}`);
    });

    // speed up
    document.querySelector("#faster").addEventListener("click", () => {
        console.log("Speed Up");
        console.log(`Current speed is ${video.playbackRate}`);
        video.playbackRate /= 0.9;
        console.log(`New speed is ${video.playbackRate}`);
    })

    // skip ahead
    document.querySelector("#skip").addEventListener("click", () => {
        console.log("Skip Ahead");
        console.log(`The duration is ${video.duration}s`);
        console.log(`Current time is ${video.currentTime}s`);
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }

        console.log(`Current time is ${video.currentTime}s`);
    })

    // mute
    let button = document.querySelector("#mute");
    button.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            button.textContent = "Mute";
            console.log("unmuted");
        } else {
            video.muted = true;
            button.textContent = "Unmute";
            console.log("muted");
        }
    });

    let slider = document.querySelector("#slider");
    let volume = document.querySelector("#volume");
    slider.oninput = () => {
        // volume must be in range [0, 1]
        video.volume = slider.value / 100;
        // want to DISPLAY volumne in range [0, 100]
        console.log(video.volume * 100);
        volume.textContent = `${video.volume * 100}%`;
    };

    let old_school = document.querySelector("#vintage");
    let orig = document.querySelector("#orig");

    old_school.addEventListener("click", () => {
        video.classList.add("oldSchool");
    });

    orig.addEventListener("click", () => {
        video.classList.remove("oldSchool");
    });
});
