let boxes = document.getElementById("boxes")
let play = document.querySelector("#play")

for(i = 0; i < 9 ; i++){
    let box = document.createElement("div")
    box.className = "box"
    box.id = "box" +  (i + 1)
    boxes.appendChild(box)

}

let box1 = document.querySelector("#box1")
box1.addEventListener("click" , function(){
    console.log("box 1 pressed")
})


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