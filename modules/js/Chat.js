import Mammifere from "./Mammifere.js";


export default class Chat extends Mammifere{

    Respiration(){
        console.log("mon coeur bat très vite");
    }
    Alimentation(){
        console.log("Je me nourris de souris entre autres choses");
    }

    Miauler(){
        if(this.heartRate)
        console.log("Miaou");
        else
        console.log("R.I.P.")
    }

}