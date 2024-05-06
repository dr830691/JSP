"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelTime() {
        throw new Error("Method not implemented.");
    }
}
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelTime() {
        throw new Error("Method not implemented.");
    }
    createStory() {
        console.log("Story was created");
    }
}
