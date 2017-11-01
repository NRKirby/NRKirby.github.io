document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("title").addEventListener("mouseover", function () {
        document.getElementById("img-circle").style.display = "block"
    })

    document.getElementById("title").addEventListener("mouseout", function () {
        document.getElementById("img-circle").style.display = "none"
    })
});

