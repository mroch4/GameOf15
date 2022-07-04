import { Game } from "./Game.js"

const gameBoard = document.getElementById('game-board')
const gameSize = 4

const game = new Game(gameBoard, gameSize)
window.onload = game.render()

window.addEventListener('keydown', e => {
    e.preventDefault()
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
