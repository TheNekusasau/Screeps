module.exports = {

    run: function (i) {
        if (i.memory.Task == undefined) {
            i.memory.Task = "InTransitH";
        };
        if (i.memory.WidthDraw == undefined) {
            i.memory.WidthDraw = "59ad1ceffab43671d6d469cf";
        }
        if (i.memory.Task == "InTransitH") {
            if (i.withdraw(Game.getObjectById(i.memory.WidthDraw), RESOURCE_ENERGY, (i.carryCapacity - i.carry)) == ERR_NOT_IN_RANGE) {
                i.moveTo(Game.getObjectById(i.memory.WidthDraw));
            }
            else if (i.carry.energy == i.carryCapacity) {
                i.memory.Task = "InTransitS";
            }
        }
        else if (i.memory.Task == "InTransitS") {
            var structure = i.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => ((s.structureType == STRUCTURE_SPAWN
                            || s.structureType == STRUCTURE_EXTENSION)
                            && s.energy < s.energyCapacity) || (s.structureType == STRUCTURE_CONTAINER &&
                   s.store[RESOURCE_ENERGY] <= s.storeCapacity)
            });

            if (i.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                i.moveTo(structure);
            }
            if (i.carry.energy == 0) {
                i.memory.Task = "InTransitH";
            }
        }
    }
}
  