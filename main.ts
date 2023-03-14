scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
	
})
tiles.setCurrentTilemap(tilemap`level1`)
let Mario = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . f . . . . 2 f f f 2 2 . . . . 
    . f . . . . . f . f . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    2 2 2 1 1 2 2 2 2 2 1 1 2 2 . . 
    2 2 1 f f 1 2 2 2 1 f f 1 2 2 . 
    2 1 f . . f 1 2 1 f . . f 1 2 2 
    2 1 f . . f 1 2 1 f . . f 1 2 2 
    . . . f f . . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Mario, tiles.getTileLocation(0, 13))
scene.cameraFollowSprite(Mario)
controller.moveSprite(Mario)
info.setLife(5)
