const body = document.querySelector("body")
const container = document.querySelector("#container")
const gridSize = document.querySelector(".gridSize")
const clear = document.querySelector(".clear")


gridSize.addEventListener("click",function(){
    let size = prompt("Enter desired grid size (Maximum of 100)")

    if (size != null){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
    }

    for (let i = 0; i < size; ++i){
        let rowDiv = document.createElement("div")
        rowDiv.classList.add("row")

        for (let j = 0; j < size; ++j){
            let squareDiv = document.createElement("div")
            squareDiv.classList.add("square")

            squareDiv.addEventListener("mouseover", function(){
                squareDiv.style.background = "navy"
            })

        rowDiv.appendChild(squareDiv)
        }

        container.appendChild(rowDiv)

    }
})

clear.addEventListener("click", function(){
    var squares = document.getElementsByClassName("square")
    for (var i = 0; i < squares.length; ++i){
        squares[i].style.background = "lightslategray"
    }
})

