import Game from './src/game.js'
import View from './src/view.js'
import Controller from './src/controller.js'

const root = document.getElementById('root')

const game = new Game()
const view = new View(root, 480, 640, 20, 10)
const controller = new Controller(game, view)

console.log(controller)
