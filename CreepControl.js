var CareerBuilder = require('Builder');
var CareerRepairer = require('Repairer');
var CareerWallRepairer = require('WallRepairer');
var CareerHarvester = require('Harvester');
var CareerUpgrader = require('Upgraders');
module.exports = {
    run: function (i) {
        if (i.memory.Career == "Builder") {
            if (i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == undefined
                || i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == null) {
                if (i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType != STRUCTURE_WALL }) == undefined
                    || i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType != STRUCTURE_WALL }) == null) {
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
            if (i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType != STRUCTURE_WALL }) == undefined
                || i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType != STRUCTURE_WALL }) == null) {
                if (i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType == STRUCTURE_WALL }) != undefined
                    || i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 3) && s.structureType == STRUCTURE_WALL }) != null){
                    CareerWallRepairer.run(i);
                }
                else if (i.pos.findClosestByPath(FIND_CONSTRUCTION_SITES) == undefined
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
    }
}