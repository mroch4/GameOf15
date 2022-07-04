import startupCombinations from "./Combinations.js"

export class Game {
    constructor(gameBoard, size) {
        this.gameBoard = gameBoard
        this.size = size
    }

    targetCombination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
    currentCombination = startupCombinations[1]
    moves = 0

    render = () => {
        this.gameBoard.innerHTML = ''
        this.currentCombination.map(item => {
            const tile = document.createElement('div')
            if (item === 0) tile.classList.add('tile', 'empty')
            else {
                tile.classList.add('tile')
                tile.innerText = item
            }
            this.gameBoard.append(tile)
        })
    }

    checkIfSuccess = () => {
        if (this.currentCombination.every((value, index) => value === this.targetCombination[index])) alert(`Koniec gry, ilość ruchów: ${this.moves}`)
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
        if (indexOfLeftTile % 4 !== this.size - 1) this.swapTiles(currentIndexOfZero, indexOfLeftTile)
    }

    moveDown = () => {
        const currentIndexOfZero = this.currentCombination.indexOf(0)
        const indexOfTileBelow = currentIndexOfZero + this.size
        if (indexOfTileBelow < this.size * this.size) this.swapTiles(currentIndexOfZero, indexOfTileBelow)
    }
}