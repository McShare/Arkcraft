import { world, MinecraftEffectTypes } from "mojang-minecraft";

world.events.tick.subscribe(evd => {
    if (evd.currentTick % 100 === 0) {
        for (const entity of world.getDimension('overworld').getEntities()) {
            const ids = ['arkcraft', 'ark'];
            for (const dinosid of ids) {
                if (entity.typeId.includes(dinosid)) {
                    entity.addEffect(MinecraftEffectTypes.regeneration, 200, 0, false);
                }
            }
        }
    }
    if (evd.currentTick % 3 === 0) {
        for (const player of world.getPlayers()) {
            player.runCommand(`function desierto`) 
            const inv = player.getComponent('inventory').container;
            const item = inv.getItem(player.selectedSlot);

            if (item.typeId == 'arkcraft:backpack') {
                player.addEffect(MinecraftEffectTypes.slowFalling, 10, 0, false);
            }
        }
    }
});