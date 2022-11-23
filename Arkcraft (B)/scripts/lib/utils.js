import { World, Commands, BlockLocation } from "mojang-minecraft";

export function getDimension(player) {
  let location = new BlockLocation(Math.floor(player.location.x), Math.floor(player.location.y), Math.floor(player.location.z));
  
  let dimensions = [
    World.getDimension("overworld"),
    World.getDimension("nether"),
    World.getDimension("the end")
    ];
    
    let entitiesAtPlayerLocation = [
      dimensions[0].getEntitiesAtBlockLocation(location),
      dimensions[1].getEntitiesAtBlockLocation(location),
      dimensions[2].getEntitiesAtBlockLocation(location)
    ];
      
      let dimension;
      
      entitiesAtPlayerLocation.forEach(entities => {
        entities.forEach(entity => {
          if (entity.name == player.name && entity.id == "minecraft:player") {
            
            dimension = dimensions[entitiesAtPlayerLocation.indexOf(entities)];
            
          }
        });
      });
      
      return dimension;
      
}