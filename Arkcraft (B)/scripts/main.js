import { World, Commands, BlockLocation } from "mojang-minecraft";
import { hasTag } from "./lib/tags.js";
import { numberBetween } from "./lib/numbers.js";
import { getDimension } from "./lib/utils.js";




let rideable_dinos = [
  "arkcraft:female_rex",
  "arkcraft:female_spino",
  "arkcraft:female_yutyrannus",
  "arkcraft:male_rex",
  "arkcraft:male_spino",
  "arkcraft:male_yutyrannus",
  "arkcraft:female_baryonyx",
  "arkcraft:male_baryonyx",
"arkcraft:ankylosaurus",
"arkcraft:argentavis",
"arkcraft:baryonyx",
"arkcraft:belcbob",
"arkcraft:carnotaurus",
"arkcraft:daeodon",
"arkcraft:deinonychus",
"arkcraft:diplocaulus",
"arkcraft:doedicurus",
"arkcraft:irritator",
"arkcraft:lambeosaurus",
"arkcraft:llukalkan",
"arkcraft:lymantria",
"arkcraft:macrauchenia",
"arkcraft:magmasaur",
"arkcraft:majungasaurus",
"arkcraft:mamut",
"arkcraft:nanuqsaurus",
"arkcraft:ouranosaurus",
"arkcraft:parasaurolophus",
"arkcraft:phiomia",
"arkcraft:pulmonoscorpius",
"arkcraft:quetzal",
"glace:reaper",
"arkcraft:skorpiovenator",
"arkcraft:teratophoneus",
"arkcraft:thorny_dragon",
"arkcraft:velonasaur",
"arkcraft:velonasaur_r" 
];

let healthVariants = [
  'dinohp_0',  'dinohp_1',  'dinohp_2',
  'dinohp_3',  'dinohp_4',  'dinohp_5',
  'dinohp_6',  'dinohp_7',  'dinohp_8',
  'dinohp_9',  'dinohp_10', 'dinohp_11',
  'dinohp_12', 'dinohp_13', 'dinohp_14',
  'dinohp_15', 'dinohp_16', 'dinohp_17',
  'dinohp_18', 'dinohp_19', 'dinohp_20',
  'dinohp_21', 'dinohp_22', 'dinohp_23',
  'dinohp_24', 'dinohp_25', "dinohp_clear"
];

World.events.tick.subscribe(() => {
  let players = World.getPlayers();
  
  for (let i in players) {
    let p = players[i];
    let pLocation_ = [p.location.x,p.location.y,p.location.z].map(Math.floor);
    let pLocation = new BlockLocation(...pLocation_);
    
    if (hasTag(p, "is_mounting")) {
      let dino = World.getDimension("overworld").getEntitiesAtBlockLocation(pLocation.offset(0, -2, 0)).find(it => rideable_dinos.includes(it.id));
      let currentDinoHp = dino ? dino.getComponent("health").current : undefined;
      let defaultDinoHp = dino ? dino.getComponent("health").value : 0;
      let partition = defaultDinoHp / 26;
      let iconVariant = !currentDinoHp ? 26 : numberBetween(currentDinoHp, defaultDinoHp, (defaultDinoHp - partition)) ? 0 : numberBetween(currentDinoHp, (defaultDinoHp - partition), (defaultDinoHp - partition * 2)) ? 1 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 2), (defaultDinoHp - partition * 3)) ? 2 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 3), (defaultDinoHp - partition * 4)) ? 3 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 4), (defaultDinoHp - partition * 5)) ? 4 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 5), (defaultDinoHp - partition * 6)) ? 5 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 6), (defaultDinoHp - partition * 7)) ? 6 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 7), (defaultDinoHp - partition * 8)) ? 7 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 8), (defaultDinoHp - partition * 9)) ? 8 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 9), (defaultDinoHp - partition * 10)) ? 9 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 10), (defaultDinoHp - partition * 11)) ? 10 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 11), (defaultDinoHp - partition * 12)) ? 11 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 12), (defaultDinoHp - partition * 13)) ? 12 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 13), (defaultDinoHp - partition * 14)) ? 13 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 14), (defaultDinoHp - partition * 15)) ? 14 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 15), (defaultDinoHp - partition * 16)) ? 15 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 16), (defaultDinoHp - partition * 17)) ? 16 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 17), (defaultDinoHp - partition * 18)) ? 17 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 18), (defaultDinoHp - partition * 19)) ? 18 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 19), (defaultDinoHp - partition * 20)) ? 19 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 20), (defaultDinoHp - partition * 21)) ? 20 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 21), (defaultDinoHp - partition * 22)) ? 21 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 22), (defaultDinoHp - partition * 23)) ? 22 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 23), (defaultDinoHp - partition * 24)) ? 23 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 24), (defaultDinoHp - partition * 25)) ? 24 : numberBetween(currentDinoHp, (defaultDinoHp - partition * 25), (defaultDinoHp - partition * 26)) ? 25 : 26;
      
      Commands.run(`title @a[name = "${p.name}"] actionbar ${healthVariants[iconVariant]}`, getDimension(p));
    
    }
  }
});

let arkcraft_prefix = '+'

World.events.beforeChat.subscribe((arkcraft) => {
  
  let msg = arkcraft.message;

  if (msg.startsWith(arkcraft_prefix + "list")) {
    arkcraft.cancel = true
    Commands.run(`tellraw @a[name="${arkcraft.sender.nameTag}"] {"rawtext":[{"text":"§6-UNTAMABLE-\n\n§3ACHATINA, AINIKTOZOON, AMMONITES, DUNKLEOSTEUS, ELASMOTHERIUM, HELICOPRION, MAWSONIA, MEGA RAPTOR, OVISARIES, PIKAIA, QILINYU, THORNY DEMON, TRILOBITE, WATER BUG, WEEJA, TANYRICHTHYS\n\n§6-SPECIAL TAME-\n\n§3BULBDOG (Fungi), DEINONYCHUS (Egg), MAGMASAURUS (Egg), MAJUNGASAURUS (His own flesh), VELONASAUR R (Giving Syringe R to Compy), REAPER (Pregnancy), COMPY (Meat), DODO (Any herbivorous food), LYSTROSAURUS (Any herbivorous food), MACRAUCHENIA (Vanilla Horse taming method)\n\n§6-ARTHROPOD KIBBLE-\n\n§3SKORPIOVENATOR, ALVAREZSAURUS, LYMANTRIA (also herb kibble), PULMONOSCORPIUS, THORNY DRAGON\n\n§6-ACUATIC KIBBLE\n\n§3LAMBEOSAURUS (also herb kibble), BARYONIX, IRRITATOR, SPINOSAUR, TAPEJARA, DIPLOCAULUS, DIMETRODON, QUETZAL\n\n§6-HERBIVORE KIBBLE-\n\n§3PEGOMASTAX, MAMMOTH, OURANOSAURUS, PARASAUR, PHIOMIA, SCUTOSAURUS, ANKYLOSAURUS, DAEODON (also meat kibble), DOEDICURUS\n\n§6-CARNIVORE KIBBLE-\n\n§3ARCHEOPTERYX, ARGENTAVIS, BELCBOB, CARNOTAUR, DIREWOLF, LLUKALKAN, MICRO RAPTOR, NANQSAURUS, TERATOPHONEUS, VELOCIRAPTOR, VELONASAUR, YUTYRANNUS, REX."}]}`, World.getDimension("overworld"))
  }
});