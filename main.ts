scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.starField)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Phil.vy == 0) {
        Phil.vy = -150
    }
})
let Phil: Sprite = null
scene.setBackgroundColor(9)
Phil = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f 8 f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Phil, 100, 0)
tiles.setTilemap(tilemap`level1`)
Phil.ay = 350
scene.cameraFollowSprite(Phil)
