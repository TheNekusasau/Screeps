var CreepControl = require('CreepControl');
var SpawnControl = require('SpawnControl');
module.exports.loop = function () {
    for (var spawner in Game.spawns) {
        if (spawner != undefined) {
            spawner = Game.spawns[spawner];
            SpawnControl.run(spawner);

        }
    }
        Tower1 = Game.getObjectById("59ab032df1c0f272681ecf31");
    for (var i in Game.creeps) {
        i = Game.creeps[i];
        CreepControl.run(i);
    }
    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
    for (var i in Memory.creeps) {
        i = Game.creeps[i];
        if (i.my === true) {
        hostiles = i.room.find(FIND_HOSTILE_CREEPS);
        Tower1.attack(hostiles[0]);
            if (i.hits < i.hitsmax) {
                Tower1.heal(i);
            }
        }
    }
}