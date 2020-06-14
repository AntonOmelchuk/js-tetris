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
        this.activePiece.x + 1 !== 10 && (this.activePiece.x += 1)
        break
      case 'ArrowLeft':
        this.activePiece.x - 1 !== -1 && (this.activePiece.x -= 1)
        break
      case 'ArrowDown':
        this.activePiece.y + 1 !== 20 && (this.activePiece.y += 1)
        break
    }
  }

  lockPiece() {
    const { x: pieceX, y: pieceY, blocks } = this.activePiece

    for(let y = 0; y < blocks.length; y++) {
      for(let x = 0; x < blocks[y].length; x++) {
        this.playfield[pieceY + y][pieceX + x] = blocks[y][x]
      }
    }
  }
}