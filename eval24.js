// Etape 1 - Sélectionner nos éléments
// Etape 2 - Cacher l'erreur
// Etape 3 - Générer un nombre aléatoire
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Etape 5 - Agir à l'envoi du formulaire
// Etape 6 - Créer la fonction vérifier
// Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
// deviner le prix d'un produit. Ici, trois possibilités :
// - C'est plus cher
// - C'est moins cher
// - C'est le juste prix !
// Dans cette version du "Juste prix", nous générerons un
// prix aléatoire, et nous calculerons le nombre de coups
// qu'il faut à un joueur pour retrouver le juste prix.
// Ainsi, il pourra se confronter à ses amis pour tenter de
// voir qui retrouve le bon prix avec le moins de coups
// possibles !
// Je vous attends dans la prochaine session !

console.log("hello")
const choiceNumber = ["C'est le juste prix ","C'est moins cher !!","C'est plus cher "]; //bonne idée de stocker des info dans un tableau

let chiffreAleatoir = Math.floor(Math.random() * 1000); //tu oublie de déclarer ta variable
console.log(chiffreAleatoir);

let butondemarer = document.querySelector(".bouton1");
let paragraphSelector2 = document.querySelector(".paragraphe2");
var paragraphSelector1 = document.getElementById("in");

console.log(paragraphSelector1.value);

var tentative = 1;

butondemarer.addEventListener("click", displayMessage);

function displayMessage (){ 
    /* Plutôt qu'une répétition de paragraphSelector1.value tu peux l'affecter à une variable*/
    let swapInputValue = paragraphSelector1.value;
    if (paragraphSelector1.value > 0 || paragraphSelector1.value < 1000 || isNaN()){ //tu doit mettre une valeur dans le isNaN
        paragraphSelector2.textContent = "Entrez un chiffre entre 0 et 1000";
    }
    else{
        if (paragraphSelector1.value == chiffreAleatoir){
            if (tentative == 1){
                paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " ère tentative";
                tentative = tentative + 1;
            }
            else{
                paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " em tentatives";
                tentative = tentative + 1;
            }
       }
        else if (paragraphSelector1.value > chiffreAleatoir){
            if (tentative == 1){
                paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " ère tentative";
                tentative = tentative + 1;
            }
            else{
                paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " em tentatives";
                tentative = tentative + 1;
            }
       }
        else if (paragraphSelector1.value < chiffreAleatoir){
            if (tentative == 1){
                paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " ère tentative";
                tentative = tentative + 1;
            }
            else{
                paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " em tentatives";
                tentative = tentative + 1;
            }

    }


   }
}



