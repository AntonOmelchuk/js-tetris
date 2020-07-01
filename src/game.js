export default class Game {
  score = 0
  lines = 0
  level = 0
  playfield = new Array(20).fill().map(col => col = new Array(10).fill(0))
  activePiece = {
    x: 0,
    y: 0,
    get blocks() {
      return this.rotations[this.rotationIndex]
    },
    rotationIndex: 0,
    rotations: [
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ]
  }

  getState() {
    const playfield = [...this.playfield]

    for(let y = 0; y < this.activePiece.blocks.length; y++) {
      for(let x = 0; x < this.activePiece.blocks[y].length; x++) {
        if(this.activePiece.blocks[y][x]) {
          playfield[this.activePiece.y + y][this.activePiece.x + x] = this.activePiece.blocks[y][x]
        }
      }
    }

    return playfield
  }

  move(direction) {
    switch(direction) {
      case 'ArrowRight':
        console.log('move right')
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

  rotatePiece() {
    this.activePiece.rotationIndex = this.activePiece.rotationIndex < 3 ? this.activePiece.rotationIndex + 1 : 0

    if(this.checkPiecePosition()) {
      this.activePiece.rotationIndex = this.activePiece.rotationIndex > 0 ? this.activePiece.rotationIndex - 1 : 3
    }

    return this.activePiece.blocks
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