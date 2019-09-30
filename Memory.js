// var numbers = ["1", "2", "3", "4", "5", "6","1", "2", "3", "4", "5", "6"];


var nb = document.getElementById("nb")
var btn = document.getElementById("bouton")
var mainDiv = document.getElementById("main")

var zone = document.createElement("div")
zone.id = "game"
mainDiv.appendChild(zone)

btn.addEventListener("click", function () {
    zone = document.getElementById("game")
    zone.innerHTML = "";

    var n = nb.value;
    if (n % 2 == 0) {
        var numbers = []

        for (i = 1; i <= n / 2; i++) {
            numbers.push(i);
            numbers.push(i);
        }
        for (i = 0; i < numbers.length; i++) {
            var random_index = Math.floor(Math.random() * (i + 1));
            var temp = numbers[i];
            numbers[i] = numbers[random_index];
            numbers[random_index] = temp;
        }

        for (let i = 0; i < numbers.length; i++) {
            var cellule = document.createElement("section");
            zone.appendChild(cellule);
            cellule.innerHTML = numbers[i];
            cellule.setAttribute("class", "hidden");

            cellule.addEventListener("click", function () {
                this.classList.remove("hidden");
                })

        }
    }
    else {
        alert("Veuillez modifier votre chiffre...");
    }
})
