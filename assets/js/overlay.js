const targetDiv = document.getElementById("overlay");
const btn = document.getElementById("open");
btn.onclick = function () {
    targetDiv.style.transition = "all 0.15s ease-in-out";
    targetDiv.style.opacity = "0";
    setTimeout(function(){ targetDiv.style.display = ("none"); }, 150);
};