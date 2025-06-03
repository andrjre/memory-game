let boxes = document.getElementById("boxes")

function makeBox(){

    let box = document.createElement("div")
    box.className = "box"
    boxes.appendChild(box)

}

for(i = 0; i < 9 ; i++){
    makeBox()

    
}

