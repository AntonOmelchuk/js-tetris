export default class Game {
  score = 0
  lines = 0
  level = 0
  playfield = new Array(19).fill(0).map(col => col = new Array(9).fill(0))
  activePiece = {
    x: 0,
    y: 0,
    blocks: []
  }
}