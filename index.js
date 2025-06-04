let boxes = document.getElementById("boxes")
let play = document.querySelector("#play")

for(i = 0; i < 9 ; i++){
    let box = document.createElement("div")
    box.className = "box"
    box.id = "box" +  (i + 1)
    boxes.appendChild(box)

}

let number = 0

for(i = 0; i < 9; i++){

number++
let boxId = document.querySelector("#box" + number)
console.log(boxId)

}


play.addEventListener("click", function(){

let box = document.querySelector("#box" + i)
box.style.backgroundColor = "grey"

})