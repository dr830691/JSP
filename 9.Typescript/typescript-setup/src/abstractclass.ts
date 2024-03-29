abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){

    }
    abstract getSepia():void;
    getReelTime():number{
        return 10;
    }
}
class Instagram_1 extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter);
    }
    getSepia(): void {
        console.log("Sepia");
    }

}
 const hitesh=new Instagram_1("test","Test",3);
 

