import EtreVivant from "./EtreVivant.js";

export default class Mammifere extends EtreVivant {
    constructor(nom,type){
        super(nom, type)
        this.heartRate = false;
        this.Naissance();
    }

    Naissance() {
        super.Naissance();
        console.log("Naissance après une période de gestation");
        this.heartRate = true;
    }

    Mort() {
        console.log("Le coeur s'arrête de battre.");
        this.heartRate = false;

    }

}