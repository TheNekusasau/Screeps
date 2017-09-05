module.exports = {

    run: function (i) {
        if (i.memory.Task == undefined) {
            i.memory.Task = "InTransitH";
        };
        if (i.memory.Job == undefined) {
            var select = Math.floor((Math.random()) * 5);
            if (select == 0) {
                i.memory.Job = "Base";
            }
            if (select == 1) {
                if (i.pos.findClosestByPath(FIND_EXIT_BOTTOM) != undefined) {
                    i.memory.Job = "Down";
                }
                else {
                    select += 1;
                }
            }
            if (select == 2) {
                if (i.pos.findClosestByPath(FIND_EXIT_RIGHT) != undefined) {
                    i.memory.Job = "Right";
                }
                else {
                    select += 1;
                }
            }
            if (select == 3) {
                if (i.pos.findClosestByPath(FIND_EXIT_LEFT) != undefined) {
                    i.memory.Job = "Left";
                }
                else {
                    select += 1;
                }
            }
            if (select == 4) {
                if (i.pos.findClosestByPath(FIND_EXIT_TOP) != undefined) {
                    i.memory.Job = "Top";
                }
                else {
                    select = 1;
                }
            }
            else {
                i.memory.Job = "Base";
            }
        }
        if (i.memory.Task == "InTransitH") {
            if (i.room.name == i.memory.SpawnRoom.name) {
                if (i.memory.Job == "Base") {
                    if (i.harvest(i.pos.findClosestByPath(FIND_SOURCES_ACTIVE)) == ERR_NOT_IN_RANGE) {
                        i.moveTo(i.pos.findClosestByPath(FIND_SOURCES_ACTIVE));
                    }
                    else if (i.carry.energy == i.carryCapacity) {
                        i.memory.Task = "InTransitS";
                    }
                }
                else if (i.memory.Job == "Down") {
                    path = i.pos.findClosestByPath(FIND_EXIT_BOTTOM);
                    i.moveTo(path);
                }
                else if (i.memory.Job == "Top") {
                    path = i.pos.findClosestByPath(FIND_EXIT_TOP);
                    i.moveTo(path);
                }
                else if (i.memory.Job == "Left") {
                    path = i.pos.findClosestByPath(FIND_EXIT_LEFT);
                    i.moveTo(path);
                }
                else if (i.memory.Job == "Right") {
                    path = i.pos.findClosestByPath(FIND_EXIT_RIGHT);
                    i.moveTo(path);
                }
            }
            else {
                i.memory.Load = null;
                i.memory.SpawnRoom = i.room;
                i.memory.Job = "Base";
                if (i.posY = 0) { i.move(TOP); }
                if (i.posY = 49) { i.move(BOTTOM); }
                if (i.posX = 0) { i.move(RIGHT); }
                if (i.posX = 49) { i.move(LEFT); }
                if (i.harvest(i.pos.findClosestByPath(FIND_SOURCES_ACTIVE)) == ERR_NOT_IN_RANGE) {
                    i.moveTo(i.pos.findClosestByPath(FIND_SOURCES_ACTIVE));
                }
                else if (i.carry.energy == i.carryCapacity) {
                    i.memory.Task = "InTransitS";
                }
            }
        }

        else if (i.memory.Task == "InTransitS") {
            i.memory.Load = i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 4) && s.structureType == STRUCTURE_WALL});
            if (i.memory.Load == undefined || i.memory.Load == null) {
                console.log("No Work, changing task")
            }
            else {
                i.memory.Load = i.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.hits < (s.hitsMax / 4) && s.structureType == STRUCTURE_WALL });

                if (i.repair(i.memory.Load, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    i.moveTo(i.memory.Load);
                }
                else if (i.carry.energy == 0) {
                    i.memory.Task = "InTransitH";
                }
            }
        }
    }
}