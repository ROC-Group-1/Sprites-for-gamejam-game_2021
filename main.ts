//This is required because otherwise the variable is undifined
let playerSprite = sprites.create(assets.image`Matthew0`, SpriteKind.Player)

//Use these functions when walking in a certain direction
function walkDown() {
    animation.runImageAnimation(
    playerSprite,
        [img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 6 6 6 6 6 6 2 f . . . 
    . . f 2 6 2 2 2 2 2 2 6 2 f . . 
    . . f 6 2 f f f f f f 2 6 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . . . f f b f e e f b f f . . . 
    . . . f e 1 f e e f 1 e f . . . 
    . . . . f e e e e e e f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f e f 2 2 2 2 2 2 f e f . . 
    . f e b f 2 2 2 2 2 2 f b e f . 
    . f e e f 2 2 2 2 2 2 f e e f . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . . . . f 8 8 f f 8 8 f . . . . 
            `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 6 6 6 6 6 6 2 f . . . 
    . . f 2 6 2 2 2 2 2 2 6 2 f . . 
    . . f 6 2 f f f f f f 2 6 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . . . f f b f e e f b f f . . . 
    . . . f e 1 f e e f 1 e f . . . 
    . . . . f e e e e e e f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f e f 2 2 2 2 2 f e e f . . 
    . f e b f 2 2 2 2 2 f e e f . . 
    . f f f f 2 2 2 2 2 2 f f . . . 
    . . . . f 8 8 8 f f f f . . . . 
    . . . . f 8 8 f . . . . . . . . 
            `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 6 6 6 6 6 6 2 f . . . 
    . . f 2 6 2 2 2 2 2 2 6 2 f . . 
    . . f 6 2 f f f f f f 2 6 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . . . f f b f e e f b f f . . . 
    . . . f e 1 f e e f 1 e f . . . 
    . . . . f e e e e e e f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f e f 2 2 2 2 2 2 f e f . . 
    . f e b f 2 2 2 2 2 2 f b e f . 
    . f e e f 2 2 2 2 2 2 f e e f . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . . . . f 8 8 f f 8 8 f . . . . 
            `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 6 6 6 6 6 6 2 f . . . 
    . . f 2 6 2 2 2 2 2 2 6 2 f . . 
    . . f 6 2 f f f f f f 2 6 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . . . f f b f e e f b f f . . . 
    . . . f e 1 f e e f 1 e f . . . 
    . . . . f e e e e e e f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f e e f 2 2 2 2 2 f e f . . 
    . . f e e f 2 2 2 2 2 f b e f . 
    . . . f f 2 2 2 2 2 2 f f f f . 
    . . . . f f f f 8 8 8 f . . . . 
    . . . . . . . . f 8 8 f . . . . 
        `],
    500,
    true
    )
}
function walkUp() {
    animation.runImageAnimation(
        playerSprite,
        [img`
. . . . . . . f f . . . . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . f 2 6 6 6 6 6 6 2 f . . . 
. . f 2 6 2 2 2 2 2 2 6 2 f . . 
. . f 6 2 2 2 2 2 2 2 2 6 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f f f f f f f f f . . . 
. . . f e e e e e e e e f . . . 
. . . . f e e e e e e f . . . . 
. . . f f f e e e e f f f . . . 
. . f e f 2 2 2 2 2 2 f e f . . 
. f e b f 2 2 2 2 2 2 f b e f . 
. f e e f 2 2 2 2 2 2 f e e f . 
. . f f f 8 8 8 8 8 8 f f f . . 
. . . . f 8 8 f f 8 8 f . . . . 
            `, img`
. . . . . . . f f . . . . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . f 2 6 6 6 6 6 6 2 f . . . 
. . f 2 6 2 2 2 2 2 2 6 2 f . . 
. . f 6 2 2 2 2 2 2 2 2 6 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f f f f f f f f f . . . 
. . . f e e e e e e e e f . . . 
. . . . f e e e e e e f . . . . 
. . . f f f e e e e f . . . . . 
. . f e f 2 2 2 2 2 2 f . . . . 
. . f b f 2 2 2 2 2 f f f f . . 
. . f e f 2 2 2 2 2 f e e f . . 
. . f f f 8 8 8 f f f f f . . . 
. . . . f 8 8 f . . . . . . . . 
            `, img`
. . . . . . . f f . . . . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . f 2 6 6 6 6 6 6 2 f . . . 
. . f 2 6 2 2 2 2 2 2 6 2 f . . 
. . f 6 2 2 2 2 2 2 2 2 6 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f f f f f f f f f . . . 
. . . f e e e e e e e e f . . . 
. . . . f e e e e e e f . . . . 
. . . f f f e e e e f f f . . . 
. . f e f 2 2 2 2 2 2 f e f . . 
. f e b f 2 2 2 2 2 2 f b e f . 
. f e e f 2 2 2 2 2 2 f e e f . 
. . f f f 8 8 8 8 8 8 f f f . . 
. . . . f 8 8 f f 8 8 f . . . . 
            `, img`
. . . . . . . f f . . . . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . f 2 6 6 6 6 6 6 2 f . . . 
. . f 2 6 2 2 2 2 2 2 6 2 f . . 
. . f 6 2 2 2 2 2 2 2 2 6 f . . 
. . f f 2 2 2 2 2 2 2 2 f f . . 
. . . f f f f f f f f f f . . . 
. . . f e e e e e e e e f . . . 
. . . . f e e e e e e f . . . . 
. . . . . f e e e e f f f . . . 
. . . . f 2 2 2 2 2 2 f e f . . 
. . f f f f 2 2 2 2 2 f b f . . 
. . f e e f 2 2 2 2 2 f e f . . 
. . . f f f f f 8 8 8 f f f . . 
. . . . . . . . f 8 8 f . . . . 
        `],
    500,
    true
    )
}