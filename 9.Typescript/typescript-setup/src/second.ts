interface TakePhoto{
    cameraMode:string,
    filter:string,
    burst:number,
}
class Instagram implements TakePhoto{
    constructor(public cameraMode: string,
        public filter:string,
        public burst:number){

    }
    getSepia(): void {
        throw new Error("Method not implemented.");
    }
    getReelTime(): number {
        throw new Error("Method not implemented.");
    }

}
class Youtube implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){

    }
    getSepia(): void {
        throw new Error("Method not implemented.");
    }
    getReelTime(): number {
        throw new Error("Method not implemented.");
    }
    createStory():void{
        console.log("Story was created");
    }
}