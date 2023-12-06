var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var icon = this.querySelector(".custom-icon");
    if (panel.style.display === "block") {
        panel.style.display = "none";
        icon.src = "assets/images/icon-plus.svg";
    } else {
        panel.style.display = "block";
        icon.src = "assets/images/icon-minus.svg";
    }
});
}