let boxes = document.getElementById("boxes")
let play = document.querySelector("#play")

for(i = 0; i < 9 ; i++){
    let box = document.createElement("div")
    box.className = "box"
    box.id ="box" +  (i + 1)
    boxes.appendChild(box)
}

play.addEventListener("click", function(){

let box = document.querySelector("box" + i)
box.style.backgroundColor = "grey"

})