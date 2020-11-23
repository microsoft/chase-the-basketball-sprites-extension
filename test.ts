const allImages = [spacejamspritesSprites.basketballcourt,spacejamspritesSprites.bugs,spacejamspritesSprites.lebron2,spacejamspritesSprites.lola,spacejamspritesSprites.rainbowball,spacejamspritesSprites.silverball,spacejamspritesSprites.orangeball]

const padding = 10;
const speed = 50;
game.onUpdate(function() {
    for (const sprite of sprites.allOfKind(SpriteKind.Player)) {
        if (sprite.vx > 0 && sprite.x >= screen.width - padding) {
            sprite.x = screen.width - padding;
            sprite.vx = 0;
            sprite.vy = speed;
        }
        else if (sprite.vy > 0 && sprite.y >= screen.height - padding) {
            sprite.y = screen.height - padding;
            sprite.vx = -speed;
            sprite.vy = 0;
        }
        else if (sprite.vx < 0 && sprite.x <= padding) {
            sprite.x = padding;
            sprite.vx = 0;
            sprite.vy = -speed;
        }
        else if (sprite.vy < 0 && sprite.bottom <= 0) {
            sprite.destroy();
        }
    }
})

let index = 0;
game.onUpdateInterval(700, function() {
    const asset = sprites.create(allImages[index], SpriteKind.Player);
    asset.x = padding;
    asset.y = padding;
    asset.vx = speed;
    asset.setFlag(SpriteFlag.Ghost, true)
    index = (index + 1) % allImages.length;
})

let line1 = sprites.create(img`0`, SpriteKind.Food)
line1.say("PRESS A TO  ")

let line2 = sprites.create(img`0`, SpriteKind.Food)
line2.say("CHANGE COLOR")
line2.top += 10

let bgColor = 0;
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    scene.setBackgroundColor(bgColor);
    bgColor = (bgColor + 1) % 15
})