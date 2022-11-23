fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_oak_log 0 replace log 0
fill ~-3 ~-3 ~3 ~3 ~10 ~-3 stripped_oak_log 0 replace mangrove_roots 0
fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_spruce_log 0 replace log 1 
fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_birch_log 0 replace log 2 
fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_jungle_log 0 replace log 3 
fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_acacia_log 0 replace log2 0
fill ~-1 ~-1 ~1 ~1 ~3 ~-1 stripped_dark_oak_log 0 replace log2 1

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_spruce_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_spruce_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_spruce_log 0 effect @s resistance 180 2 false

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_oak_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_oak_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_oak_log 0 effect @s resistance 180 2 false

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_birch_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_birch_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_birch_log 0 effect @s resistance 180 2 false

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_jungle_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_jungle_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_jungle_log 0 effect @s resistance 180 2 false

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_acacia_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_acacia_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_acacia_log 0 effect @s resistance 180 2 false

execute @s ~ ~ ~ detect ^ ^ ^1 stripped_dark_oak_log 0 effect @s speed 180 2 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_dark_oak_log 0 effect @s jump_boost 10 3 false
execute @s ~ ~ ~ detect ^ ^ ^1 stripped_dark_oak_log 0 effect @s resistance 180 2 false