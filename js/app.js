document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("show-image").addEventListener("mouseover", function () {
        document.getElementById("img-circle").style.display = "block"
    })

    document.getElementById("show-image").addEventListener("mouseout", function () {
        document.getElementById("img-circle").style.display = "none"
    })

    document.getElementById("twitter").addEventListener("mouseover", function () {
        this.src = 'img/twitter-inverted.svg';
    })

    document.getElementById("twitter").addEventListener("mouseout", function () {
        this.src = 'img/twitter.svg';
    })

    document.getElementById("linkedin").addEventListener("mouseover", function () {
        this.src = 'img/linkedin-inverted.svg';
    })

    document.getElementById("linkedin").addEventListener("mouseout", function () {
        this.src = 'img/linkedin.svg';
    })

    function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }

    function getImageSrc() {
        var images = ["Remote.svg", "Remote_blue.svg"]
        return "img\\" + imgRandom(images);
    }
    
    document.getElementById("Remote-logo").src=getImageSrc();
});

