import Game from './src/game.js'
import View from './src/view.js'

const root = document.getElementById('root')

const game = new Game()
const view = new View(root, 320, 640, 20, 10)

window.addEventListener('keydown', e => game.move(e.key))

window.game = game
window.view = view

view.renderPlayfield(game.playfield)