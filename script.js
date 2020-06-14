import Game from './src/game.js'

const game = new Game()

window.addEventListener('keydown', e => game.move(e.key))

window.game = game
