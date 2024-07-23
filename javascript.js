function color() {
    var colors = ["red", "green", "blue", "yellow", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.querySelector(".color-text span").style.color = randomColor;
    document.querySelector(".color-text span").innerText = randomColor.charAt(0).toUpperCase() + randomColor.slice(1);
    }