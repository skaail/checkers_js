const piece = document.querySelector('.piece')
const squares = document.querySelectorAll('.square')

piece.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let beingDragged

function dragStart(e){
    beingDragged = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    e.target.append(beingDragged)
}

