import { initial } from "./Combinations.js";
import { Game } from "./Game.js"

const GAME_SIZE = 4
const gameBoard = document.getElementById('game-board')
const randomCombination = initial[Math.floor(Math.random() * initial.length)];

const game = new Game(GAME_SIZE, gameBoard, randomCombination)

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
