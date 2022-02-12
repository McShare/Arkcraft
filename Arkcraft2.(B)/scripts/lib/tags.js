import { World, Commands } from "mojang-minecraft";

export function hasTag(player, tag) {
  let d = World.getDimension("overworld");
  
  try {
    let msg = Commands.run(`tag "${player.name}" list`, d).statusMessage;
    let msgSplited = msg.split(":");
    let playerTags = msgSplited.length > 1 ? msgSplited[1].match(/§a(.*?)§r/)[1].trim().split(",") : [];
    
    return playerTags.find(it => it == tag);
  } catch (e) {}
}