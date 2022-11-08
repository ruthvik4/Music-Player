var k = document.querySelectorAll(".drum").length;
for (var i = 0; i < k; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //this.style.color = "white"; // after click the button becomes white
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);

    });

}

function makesound(key) {
    switch (key) {
        case "w":
            var a = new Audio("musicc/Baby.mp3");
            a.play();
            break;
        case "a":
            var audio = new Audio("musicc / Baby.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("musicc/ Baby.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("musicc / Baby.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("musicc / Baby.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("musicc / Baby.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}