import { Game } from "./Game.js"
import { initial } from "./Combinations.js"

const gameBoard = document.getElementById('game-board')
const movesPlaceholder = document.getElementById('counter')
let game

const initialize = () => {
    const storageCombination = localStorage.getItem('storageCombination')
    const storageMoves = localStorage.getItem('storageMoves')

    if (storageCombination === null && storageMoves === null) {
        const randomCombination = initial[Math.floor(Math.random() * initial.length)]
        game = new Game(4, gameBoard, movesPlaceholder, randomCombination, 0)
    } else {
        const array = Array.from(storageCombination.split(','))
        const parsedArray = array.map(item => parseInt(item))
        const moves = parseInt(storageMoves)
        game = new Game(4, gameBoard, movesPlaceholder, parsedArray, moves)
    }
    game.render()
}

window.onload = initialize();

window.addEventListener('keydown', e => {
    e.preventDefault();
    switch (e.key) {
        case ('ArrowUp'):
            game.moveDown()
            break
        case ('ArrowLeft'):
            game.moveRight()
            break
        case ('ArrowRight'):
            game.moveLeft()
            break
        case ('ArrowDown'):
            game.moveUp()
            break
        default:
            break
    }
})

document.getElementById('retry').onclick = () => {
    localStorage.clear()
    initialize()
}

document.getElementById('easy').onclick = () => {
    localStorage.clear()
    game = new Game(4, gameBoard, movesPlaceholder, initial[0], 0)
    game.render()
}
