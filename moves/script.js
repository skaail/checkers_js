const gameboard = document.querySelector('#gameboard')

function createBoard(){
    for(let rows = 0; rows < 8; rows++){
        for(let cols = 0; cols < 8; cols++){
            let tile = document.createElement('div')

            if(rows % 2 === 0){
                if(cols % 2 === 0){
                    tile.classList.add('white')
                }else{
                    tile.classList.add('black')
                }
            }else{
                if(cols % 2 === 0){
                    tile.classList.add('black')
                }else{
                    tile.classList.add('white')
                }
            }

            tile.classList.add('tiles')
            tile.setAttribute('row', rows)
            tile.setAttribute('col', cols)
            gameboard.append(tile)
        }
    }
}

createBoard()

const tiles = document.querySelectorAll('#gameboard .tiles')

tiles.forEach((tile) => {
    tile.addEventListener('click', click)
})

function click(e){
    getMoves(e.target)
}

function getMoves(tile_act){
    tile_act.classList.add('active')

    tiles.forEach((tile) => {
        let row = parseInt(tile.getAttribute('row'))
        let col = parseInt(tile.getAttribute('col'))

        if(row == parseInt(tile_act.getAttribute('row')) + 1 && col == parseInt(tile_act.getAttribute('col')) + 1 || row == parseInt(tile_act.getAttribute('row')) - 1 && col == parseInt(tile_act.getAttribute('col')) - 1){
            tile.classList.add('active')
        }
    })
}