class Singleton{

    private static instance:Singleton
    private _temprature:number;

    private constructor(){}

   static getInstance(){

        //return old instance if available if not then create new
       if(!Singleton.instance){
           Singleton.instance= new Singleton();
           Singleton.instance._temprature=0;
       }
       return Singleton.instance;
   }
   getTempreture():number{
       return this._temprature;
   }
   setTempreture(score:number):boolean{
       this._temprature=score;
       return true;
   }
   increaseTempreture():number{
       return ++this._temprature;
   }
   decreaseTempreture():number{
       return --this._temprature;
   }
}

const myInstance= Singleton.getInstance();
console.log(myInstance.setTempreture(25));
console.log(myInstance.getTempreture());
console.log(myInstance.increaseTempreture());
console.log(myInstance.increaseTempreture());
console.log(myInstance.decreaseTempreture());
