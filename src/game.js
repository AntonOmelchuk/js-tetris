export default class Game {
  score = 0
  lines = 0
  level = 0
  playfield = new Array(20).fill().map(col => col = new Array(10).fill(0))
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
        this.activePiece.x += 1

        if(this.checkPiecePosition()) {
          this.activePiece.x -= 1
          return this.lockPiece()
        } 

        break
      case 'ArrowLeft':
        this.activePiece.x -= 1

        if(this.checkPiecePosition()) {
          this.activePiece.x += 1
          return this.lockPiece()
        } 

        break
      case 'ArrowDown':
        this.activePiece.y += 1

        if(this.checkPiecePosition()) {
          this.activePiece.y -= 1
          return this.lockPiece()
        } 

        break
    }
  }

  checkPiecePosition() {
    const playfield = this.playfield
    const { y: pieceY, x: pieceX, blocks } = this.activePiece

    for(let y = 0; y < blocks.length; y++) {
      for(let x = 0; x < blocks[y].length; x++) {
        if(
            blocks[y][x] && 
            ((playfield[pieceY + y] === undefined || playfield[pieceY][pieceX + x] === undefined) ||
            playfield[pieceY + y][pieceX + x])
          ) {
            return true
          }
          
      }
    }

    return false
  }

  lockPiece() {
    const { y: pieceY, x: pieceX, blocks } = this.activePiece
    for(let y = 0; y < blocks.length; y++) {
      for(let x = 0; x < blocks[y].length; x++) {
        if(blocks[y][x]) {
          this.playfield[pieceY + y][pieceX + x] = blocks[y][x]
        }
      }
    }
  }
}