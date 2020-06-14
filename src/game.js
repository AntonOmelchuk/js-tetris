export default class Game {
  score = 0
  lines = 0
  level = 0
  playfield = new Array(20).fill(0).map(col => col = new Array(10).fill(0))
  activePiece = {
    x: 0,
    y: 0,
    blocks: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ]
  }

  move(direction) {
    switch(direction) {
      case 'ArrowRight':
        this.activePiece.x + 1 !== 10 && this.isPieceOutBoundaries(9) && (this.activePiece.x += 1)
        this.lockPiece()
        break
      case 'ArrowLeft':
        this.activePiece.x - 1 !== -1 && this.isPieceOutBoundaries(0) && (this.activePiece.x -= 1)
        this.lockPiece()
        break
      case 'ArrowDown':
        this.activePiece.y + 1 !== 20 && this.isPieceOutBoundaries(undefined, 19) && (this.activePiece.y += 1)
        this.lockPiece()
        break
    }
  }

  isPieceOutBoundaries(pieceX = undefined, pieceY = undefined) {
    const playfield = this.playfield

    if(pieceX) {
      for(let y = 0; y < playfield.length; y++) {
        for(let x = 0; x < playfield[y].length; x++) {
          if(playfield[y][pieceX] === 1) {
            return false
          }
        }
      }
    }
    if(pieceY) {
      for(let y = 0; y < playfield.length; y++) {
        for(let x = 0; x < playfield[y].length; x++) {
          if(playfield[pieceY][x] === 1) {
            return false
          }
        }
      }
    }
    return true
  }

  clearPlayfield() {
    const playfield = this.playfield
    for(let y = 0; y < playfield.length; y++) {
      for(let x = 0; x < playfield[y].length; x++) {
        playfield[y][x] = 0
      }
    }
  }

  lockPiece() {
    const { x: pieceX, y: pieceY, blocks } = this.activePiece

    this.clearPlayfield()

    for(let y = 0; y < blocks.length; y++) {
      for(let x = 0; x < blocks[y].length; x++) {
        if(blocks[y][x])
        this.playfield[pieceY + y][pieceX + x] = blocks[y][x]
      }
    }
  }
}