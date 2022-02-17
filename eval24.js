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

const choiceNumber = ["C'est le juste prix ","C'est moins cher !!","C'est plus cher ","Entrez un chiffre entre 0 et 1000"];// je cree un tbleau avec les differente reponses

chiffreAleatoir = Math.floor(Math.random() * 1000);// la je definis un chiffre aleatoire
console.log(chiffreAleatoir);

let butondemarer = document.querySelector(".bouton1");// je selection mon bouton dans le html et je le stock dans une variable
let paragraphSelector2 = document.querySelector(".paragraphe2");//je selection le pargraphe dans le html ou je vais afficher les messages
let paragraphSelector1 = document.getElementById("in");// je récupère le contenue rentrer par le joueur que je stock dans une variable. 

let tentative = 1;// je demarre le comptage des click du bouton

butondemarer.addEventListener("click", displayMessage);//je définis ce qu'il se passe lorsque le joueur click sur le bouton 


// la fonction qui gere le displaymessage
function displayMessage (){ 
    if (paragraphSelector1.value < 0 || paragraphSelector1.value > 1000 || paragraphSelector1.value == isNaN()){
        paragraphSelector2.textContent = choiceNumber[3];//je definis que ce que le joueur rentre comme information est bien un chiffre et qu'il est bien compris entre 0 et 1000
    }
    else{
        if (paragraphSelector1.value == chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[0] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }
        }
        else if (paragraphSelector1.value > chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[1] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }
        }
        else if (paragraphSelector1.value < chiffreAleatoir){
                if (tentative == 1){
                    paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " ère tentative";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }
                else{
                    paragraphSelector2.textContent = choiceNumber[2] + "C'etais votre "+ tentative + " em tentatives";
                    tentative = tentative + 1;// je compare le chiffre rentrer par le joueur et retourne le message correspondant et j'ajoute une tentative au compteur.
                }

        }
   }
}



