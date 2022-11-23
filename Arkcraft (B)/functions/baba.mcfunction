effect @e[type=!arkcraft:achatina, r=1] slowness 20 1 true
effect @e[type=!arkcraft:achatina, r=1] weakness 20 0 true
effect @e[type=!arkcraft:achatina, r=0.5] nausea 20 0 true
fill ~-1 ~-1 ~1 ~1 ~1 ~-1 dirt 0 replace farmland
fill ~-1 ~-1 ~1 ~1 ~1 ~-1 dirt 1 replace farmland
fill ~-1 ~-1 ~1 ~1 ~1 ~-1 dirt 2 replace farmland
event entity @e[r=1, family=wild, family=smallest] ark:narcotic_final
event entity @e[r=1, family=wild, family=smallest] arkcraft:narcotic_final