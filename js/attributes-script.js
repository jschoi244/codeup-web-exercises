let time = 7;
let interval = 1000; // interval time in milliseconds
function updateTimer() {
    switch (time) {
        case 5:
            let pic = document.getElementById("profile-pic")
            pic.src = "/images/50x50.svg";
            break;
        case 3:
            let name = document.getElementById("profile-name")
            name.innerHTML = "Justin Choi";
            break;
        case 1:
            let desc = document.getElementById("profile-desc")
            desc.classList.add("new-class");
            break;
        default:
            break;
    }
    if (time % 2 === 0) {
        document.body.style.backgroundColor = "lightblue"; // Change to your desired background color
    } else {
        document.body.style.backgroundColor = ""; // Reset the background color
    }
    time--;
}

const intervalId = setInterval( () => {
    if (time >= 0) {
        updateTimer();
    }
}, interval);
