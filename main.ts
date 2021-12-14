let matthew0 = false
let rotation = ""
let Matthew: Sprite = null
let currentDir = ""
function animatePlayer () {
    matthew0 = false
    rotation = "down"
    Matthew = sprites.create(assets.image`Delete`, SpriteKind.Player)
}
function playerHasStopped () {
    if (currentDir != "Stop") {
        currentDir = "Stop"
        if (rotation == "right") {
            animation.runImageAnimation(
            Matthew,
            assets.animation`MatthewRight0`,
            200,
            true
            )
        } else if (rotation == "down") {
            animation.runImageAnimation(
            Matthew,
            assets.animation`MatthewDown0`,
            200,
            true
            )
        } else if (rotation == "left") {
            animation.runImageAnimation(
            Matthew,
            assets.animation`MatthewLeft0`,
            200,
            true
            )
        } else if (rotation == "up") {
            animation.runImageAnimation(
            Matthew,
            assets.animation`MatthewUp0`,
            200,
            true
            )
        }
    }
}
function walkDown () {
    if (currentDir != "Down") {
        currentDir = "Down"
        animation.runImageAnimation(
        Matthew,
        assets.animation`MatthewDown`,
        200,
        true
        )
    }
}
function walkUp () {
    if (currentDir != "Up") {
        currentDir = "Up"
        animation.runImageAnimation(
        Matthew,
        assets.animation`MatthewUp`,
        200,
        true
        )
    }
}
function walkRight () {
    if (currentDir != "Right") {
        currentDir = "Right"
        animation.runImageAnimation(
        Matthew,
        assets.animation`MatthewRight`,
        200,
        true
        )
    }
}
function walkLeft () {
    if (currentDir != "Left") {
        currentDir = "Left"
        animation.runImageAnimation(
        Matthew,
        assets.animation`MatthewLeft`,
        200,
        true
        )
    }
}
game.onUpdateInterval(100, function () {
    if (controller.right.isPressed()) {
        walkRight()
        rotation = "right"
    } else if (controller.down.isPressed()) {
        walkDown()
        rotation = "down"
    } else if (controller.left.isPressed()) {
        walkLeft()
        rotation = "left"
    } else if (controller.up.isPressed()) {
        walkUp()
        rotation = "up"
    } else {
        playerHasStopped()
    }
})
