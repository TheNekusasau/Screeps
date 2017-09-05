module.exports = {
    run: function (spawner) {
        var mNHarvesters = 2;
        var mNUpgraders = 3;
        var mNBuilders = 2;
        var mNRepairers = 4;
        var mNPopulators = 2;
        var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.Career == 'Builder');
        var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.Career == 'Repairer');
        var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.Career == 'Harvester' );
        var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.Career == 'Upgrader');
        var numberOfPopulators = _.sum(Game.creeps, (c) => c.memory.Career == 'Populator');

        if (spawner.memory.Post == undefined) {
            spawner.memory.Post = 0;
        }
        if (spawner.room.energyCapacityAvailable >= 300 &&spawner.room.energyCapacityAvailable <= 800) {
            if (spawner.room.energyAvailable < 300) {
                if (spawner.memory.Post == 0) {
                    console.log("Need more Energy");
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
                else {
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
            }
            else {
                spawner.memory.Post = 0;
                if (numberOfHarvesters < mNHarvesters) {
                    return spawner.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, { Career: "Harvester", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfUpgraders < mNUpgraders) {
                    return spawner.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, { Career: "Upgrader", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfBuilders < mNBuilders) {
                    return spawner.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, { Career: "Builder", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfRepairers < mNRepairers) {
                    return spawner.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, { Career: "Repairer", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfPopulators< mNPopulators) {
                    return spawner.createCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], undefined, { Career: "Populator", Task: undefined });
                }
            }
        }
        else if (spawner.room.energyCapacityAvailable >= 800 &&spawner.room.energyCapacityAvailable <= 1600) {
            if (spawner.room.energyAvailable < 800) {
                if (spawner.memory.Post == 0) {
                    console.log("Need more Energy");
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
                else {
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
            }
            else {
                spawner.memory.Post = 0;
                if (numberOfHarvesters < mNHarvesters) {
                    return spawner.createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, { Career: "Harvester", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfUpgraders < mNUpgraders) {
                    return spawner.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Upgrader", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfBuilders < mNBuilders) {
                    return spawner.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Builder", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfRepairers < mNRepairers) {
                    return spawner.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Repairer", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfPopulators < mNPopulators) {
                    return spawner.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Populator", Task: undefined });
                }
            }
        }
        else if (spawner.room.energyCapacityAvailable >= 1600 &&spawner.room.energyCapacityAvailable <= 2000) {
            if (spawner.room.energyAvailable < 300) {
                if (spawner.memory.Post == 0) {
                    console.log("Need more Energy");
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
                else {
                    spawner.memory.Post = spawner.memory.Post + 1;
                }
            }
            else {
                spawner.memory.Post = 0;
                if (numberOfHarvesters < mNHarvesters) {
                    return spawner.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE,MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Harvester", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfUpgraders < mNUpgraders) {
                    return spawner.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Upgrader", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfBuilders < mNBuilders) {
                    return spawner.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Builder", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfRepairers < mNRepairers) {
                    return spawner.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Repairer", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
                }
                else if (numberOfPopulators < mNPopulators) {
                    return spawner.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, { Career: "Populator", Task: undefined });
                }
            }
        }
        if (numberOfHarvesters <= 1||numberOfHarvesters == null||numberOfHarvesters==undefined) {
            return spawner.createCreep([WORK, CARRY, MOVE], undefined, { Career: "Harvester", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
        }
        else if (numberOfUpgraders <= 1 || numberOfUpgraders == null || numberOfUpgraders == undefined) {
            return spawner.createCreep([WORK, CARRY, MOVE], undefined, { Career: "Upgrader", SpawnRoom:spawner.room.name, Task: undefined, Job: "Base" });
        }
    }
}