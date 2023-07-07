const gameboard = document.querySelector('#gameboard')

const black = '<div class="piece" id="white"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></div'
const white = '<div class="piece" id="black"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg></div>'

const startPieces = ['',white,'',white,'',white,'',white,
                     white,'',white,'',white,'',white,'',
                     '',white,'',white,'',white,'',white,
                     '','','','','','','','',
                     '','','','','','','','',
                     black,'',black,'',black,'',black,'',
                     '',black,'',black,'',black,'',black,
                     black,'',black,'',black,'',black,'',
                    ]


function createBoard(){
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)

        const row = Math.floor((63 - i) / 8) + 1
        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ?  "tile_branca" : "tile_preta")
        }else{
            square.classList.add(i % 2 === 0 ?  "tile_preta" : "tile_branca")
        }

        gameboard.append(square)
    })
}

createBoard()
