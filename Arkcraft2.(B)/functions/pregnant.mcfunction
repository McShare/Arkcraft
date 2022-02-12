#bridge-file-version: #12
scoreboard objectives add preg dummy
execute @a[tag=preg,m=!c] ~ ~ ~ scoreboard players add @s preg 1
execute @a[tag=preg,m=!c] ~ ~ ~ title @s actionbar PREGNANT
execute @a[scores={preg=1990..2000},m=!c] ~ ~ ~ effect @s nausea 1 2 true
execute @a[scores={preg=2000..2000},m=!c] ~ ~ ~ effect @s fatal_poison 2 0 true
execute @a[scores={preg=2000..2000},m=!c] ~ ~ ~ summon glace:baby_reaper ^ ^ ^0.5
execute @a[scores={preg=2000..10000},m=!c] ~ ~ ~ tag @s remove preg
execute @a[scores={preg=2000..10000},m=!c] ~ ~ ~ scoreboard players set @s preg 0