import { target } from "./Combinations.js"

export class Game {
    constructor(size, gameBoard, randomCombination) {
        this.size = size
        this.gameBoard = gameBoard
        this.currentCombination = randomCombination
    }

    moves = 0

    render = () => {
        this.gameBoard.innerHTML = ''
        this.currentCombination.map(item => {
            const tile = document.createElement('div')
            if (item === 0) tile.classList.add('tile', 'empty')
            else {
                tile.classList.add('tile')
                tile.innerText = item
                tile.addEventListener('click', () => this.handleOnClick(item))
            }
            this.gameBoard.append(tile)
        })
    }

    handleOnClick = (clickedItem) => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const currentIndexOfClicked = this.currentCombination.indexOf(clickedItem)
        const boardDistance = Math.abs(currentIndexOfClicked - currentIndexOfZero)
        if (boardDistance === 1 || boardDistance === 4) this.swapTiles(currentIndexOfZero, currentIndexOfClicked)
    }

    checkIfSuccess = () => {
        if (this.currentCombination.every((value, index) => value === target[index])) alert(`Koniec gry, ilość ruchów: ${this.moves}`)
    }

    swapTiles = (currentIndexOfZero, indexOfItemToReplace) => {
        [this.currentCombination[currentIndexOfZero], this.currentCombination[indexOfItemToReplace]] =
            [this.currentCombination[indexOfItemToReplace], this.currentCombination[currentIndexOfZero]]
        this.moves++
        this.render()
        this.checkIfSuccess()
    }

    moveUp = () => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const indexOfTileAbove = currentIndexOfZero - this.size
        if (indexOfTileAbove >= 0) this.swapTiles(currentIndexOfZero, indexOfTileAbove)
    }

    moveRight = () => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const indexOfRightTile = currentIndexOfZero + 1
        if (indexOfRightTile % 4 !== 0) this.swapTiles(currentIndexOfZero, indexOfRightTile)
    }

    moveLeft = () => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const indexOfLeftTile = currentIndexOfZero - 1
        if (indexOfLeftTile === -1) return
        if (indexOfLeftTile % 4 !== this.size - 1) this.swapTiles(currentIndexOfZero, indexOfLeftTile)
    }

    moveDown = () => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const indexOfTileBelow = currentIndexOfZero + this.size
        if (indexOfTileBelow < this.size * this.size) this.swapTiles(currentIndexOfZero, indexOfTileBelow)
    }
}