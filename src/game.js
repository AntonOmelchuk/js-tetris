export default class Game {
  score = 0
  lines = 0
  level = 0
  playfield = new Array(20).fill(0).map(col => col = new Array(10).fill(0))
  activePiece = {
    x: 0,
    y: 0,
    blocks: []
  }

  move(direction) {
    switch(direction) {
      case 'ArrowRight':
        this.activePiece.x += 1
        break
      case 'ArrowLeft':
        this.activePiece.x -= 1
        break
      case 'ArrowDown':
        this.activePiece.y += 1
        break
    }
  }
}