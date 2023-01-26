import Person from "./js/Person.js";
import Fleur from "./js/Fleur.js";
import Chat from "./js/Chat.js";

/* Person */

//Création d'un tableau de personnes

let persons = new Array();

let p1 = new Person("Fournier","Michel");
persons.push(p1);
p1.Display();

let p2 = new Person ("Delory", "Christophe");
persons.push(p2);
p2.Display();

for(let person of persons){
        person.Display();
}

/**
 * Manipulation depuis la classe EtreVivant
 */

let SaMistoufle = new Chat("Mistoufle", "Bleu de Russie");
let cosmos = new Fleur("Cosmos", "Cosmos Sulphuréus");



let etreVivants = [SaMistoufle, cosmos, p1, p2];

for (let etre of etreVivants) {
    console.log(`------- ${etre.nom} -------`);
    etre.Naissance();
    etre.Respiration();
    etre.Alimentation();
  //  etre.Mort();
    console.log("---------------------------")

}

console.log("Battement de coeur de Mistoufle : " + SaMistoufle.heartRate);
console.log("Photosynthèse de Cosmos : " + cosmos.photosyntese);
// SaMistoufle.Mort();
SaMistoufle.Miauler();

