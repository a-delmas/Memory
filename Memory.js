// var numbers = ["1", "2", "3", "4", "5", "6","1", "2", "3", "4", "5", "6"];
n = 16
var numbers = []
for (i = 1; i <= n/2; i++) {
    numbers.push(i);
    numbers.push(i);
}

for (i = 0; i < numbers.length; i++) {
    var random_index = Math.floor(Math.random() * (i + 1));
    var temp = numbers[i];
    numbers[i] = numbers[random_index];
    numbers[random_index] = temp;
}
var zone = document.createElement("div");
document.body.appendChild(zone)

for (let i=0; i < numbers.length; i++) {
    var cellule = document.createElement("section");
    document.getElementsByTagName("div")[0].appendChild(cellule);
    document.getElementsByTagName("section")[i].innerHTML=numbers[i];
    cellule.setAttribute("class", "hidden");
    cellule.addEventListener("click", function() {
        this.classList.remove("hidden");
    })
}


