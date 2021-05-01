input.onButtonPressed(Button.A, function () {
    if (isStart) {
        Basket.change(LedSpriteProperty.X, -1)
    }
})
function ResetSpritePosition (sprite: game.LedSprite) {
    sprite.set(LedSpriteProperty.Y, 0)
    sprite.set(LedSpriteProperty.X, randint(0, 4))
}
input.onButtonPressed(Button.B, function () {
    if (isStart) {
        Basket.change(LedSpriteProperty.X, 1)
    }
})
function Init () {
    isStart = 0
    IntermissionTime = 450
    // Tips for starting the game
    basic.showIcon(IconNames.Happy)
    basic.pause(1500)
}
function GameLoop () {
    basic.clearScreen()
    game.setLife(5)
    game.setScore(0)
    isStart = 1
    Basket = game.createSprite(2, 4)
    Fruits = game.createSprite(2, 0)
    while (true) {
        basic.pause(IntermissionTime)
        Fruits.change(LedSpriteProperty.Y, 1)
        if (Fruits.isTouching(Basket)) {
            game.addScore(1)
            ResetSpritePosition(Fruits)
            continue;
        }
        if (Fruits.get(LedSpriteProperty.Y) == 4) {
            game.removeLife(1)
            ResetSpritePosition(Fruits)
            continue;
        }
    }
}
let Fruits: game.LedSprite = null
let IntermissionTime = 0
let Basket: game.LedSprite = null
let isStart = 0
Init()
GameLoop()
