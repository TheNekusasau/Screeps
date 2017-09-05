var CareerBuilder = require('Builder');
var CareerRepairer = require('Repairer');
var CareerWallRepairer = require('WallRepairer');
var CareerHarvester = require('Harvester');
var CareerUpgrader = require('Upgraders');
var CareerPopulator = require('Populator');
module.exports = {
    run: function (i) {
        if (i.memory.Career == "Builder") {
            if (i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == undefined
                || i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == null) {
                if (i.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => (structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_ROAD ||
                            structure.structureType === STRUCTURE_RAMPART ||
                            structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_CONTAINER ||
                            structure.structureType === STRUCTURE_STORAGE ||
                            structure.structureType === STRUCTURE_WALL) && (structure.hits < 200000 && structure.hits < structure.hitsMax)
                }) == undefined
                    || i.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => (structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_ROAD ||
                            structure.structureType === STRUCTURE_RAMPART ||
                            structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_CONTAINER ||
                            structure.structureType === STRUCTURE_STORAGE ||
                            structure.structureType === STRUCTURE_WALL) && (structure.hits < 200000 && structure.hits < structure.hitsMax)
                }) == null) {
                    CareerHarvester.run(i);
                }
                else {
                    CareerRepairer.run(i);
                }
            }
            else {
                CareerBuilder.run(i);
            }
        }
        else if (i.memory.Career == "Repairer") {
            if (i.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_ROAD ||
                            structure.structureType === STRUCTURE_RAMPART ||
                            structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_CONTAINER ||
                            structure.structureType === STRUCTURE_STORAGE ||
                            structure.structureType === STRUCTURE_WALL) && (structure.hits < 200000 && structure.hits < structure.hitsMax)
            }) == undefined
                || i.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_ROAD ||
                            structure.structureType === STRUCTURE_RAMPART ||
                            structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_CONTAINER ||
                            structure.structureType === STRUCTURE_STORAGE ||
                            structure.structureType === STRUCTURE_WALL) && (structure.hits < 200000 && structure.hits < structure.hitsMax)
            }) == null) {
                if (i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == undefined
                    || i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == null) {
                    CareerHarvester.run(i);
                }

                else {
                    CareerBuilder.run(i);
                }
            }
            else {
                CareerRepairer.run(i);
            }
        }
        else if (i.memory.Career == "Harvester") {
            if (i.pos.findClosestByPath(FIND_MY_STRUCTURES, {

                filter: (s) => ((s.structureType == STRUCTURE_TOWER || s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_EXTENSION)
                    && (s.energy < s.energyCapacity)) || ((s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) && s.store[RESOURCE_ENERGY] < s.storeCapacity)
            }) == null || i.pos.findClosestByPath(FIND_MY_STRUCTURES, {

                filter: (s) => ((s.structureType == STRUCTURE_TOWER || s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_EXTENSION)
                    && (s.energy < s.energyCapacity)) || ((s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) && s.store[RESOURCE_ENERGY] < s.storeCapacity)
            }) == undefined) {
                CareerUpgrader.run(i);
            }
            else {
                CareerHarvester.run(i);
            }
        }
        else if (i.memory.Career == "Upgrader") {
            CareerUpgrader.run(i);
        }
        else if (i.memory.Career == "Populator") {
            CareerPopulator.run(i);
        }
    }
}