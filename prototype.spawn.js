module.exports = function () {
    StructureSpawn.prototype.createCustomCreep =
        function (energy, roleName, mode) {
            if (mode == "Basic") {
                if (energy < 350) {
                    if (this.memory.post == 0) {
                        console.log(this +" Room Energy below Threshold, Available energy:"+ energy);
                        console.log("Standing by for more energy to spawn:" + roleName);
                        this.memory.post = this.memory.post + 1
                    }
                    else {
                        this.memory.post = this.memory.post + 1
                    }
                }
                else {
                    this.memory.post = 0
                    var parts = Math.floor(energy / 350);
                    var Body = [];
                    for (let i = 0; i < parts; i++) {
                        Body.push(WORK);
                        Body.push(WORK);
                        Body.push(CARRY);
                        Body.push(MOVE);
                        Body.push(MOVE);
                    }
                    return this.createCreep(Body, undefined, { Career: roleName, SpawnRoom: this.room, Task: undefined });
                }

            }
            else if (mode == "Advanced") {
                if (energy < 800) {
                    if (this.memory.post == 0) {
                        console.log(this + " Room Energy below Threshold, Available energy:" + energy);
                        console.log("Standing by for more energy to spawn:" + roleName);
                        this.memory.post = this.memory.post + 1
                    }
                    else {
                        this.memory.post = this.memory.post + 1
                    }
                }
                else {
                    this.memory.post = 0
                    var parts = Math.floor(energy / 400);
                    var Body = [];
                    for (let i = 0; i < parts; i++) {
                        Body.push(WORK);
                        Body.push(WORK);
                        Body.push(CARRY);
                        Body.push(CARRY);
                        Body.push(CARRY);
                        Body.push(MOVE);
                        Body.push(MOVE);
                    }
                    return this.createCreep(Body, undefined, { Career: roleName, SpawnRoom: this.room, Task: undefined });
                }

            }
return this.createCreep(Body, undefined, { Career: roleName, SpawnRoom: this.room, Task: undefined });
    }
}                