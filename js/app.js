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
        this.src = 'img/twitter1.svg';
    })

    document.getElementById("linkedin").addEventListener("mouseover", function () {
        this.src = 'img/linkedin-inverted.svg';
    })

    document.getElementById("linkedin").addEventListener("mouseout", function () {
        this.src = 'img/linkedin.svg';
    })
});

