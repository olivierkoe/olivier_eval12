/*
    Pour javascript, vous nommerez vos variable en lowerCamelCase
    var maSuperVariable
    function maSuperFonction (){
        // Instruction
    }
    Seule les classes seront écrite en UpperCamelCase 
    MaSuperClasse
    Pensez à nommez correctement vos variable fonction pour comprendre
    directement, ce qu'elle fait. 
    Cela simplifiera la relecture. 
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier
Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
*/

//Etape 1 - Sélectionner nos éléments

let inputUserSelector = document.querySelector("#entree-utilisateur");
let buttonSelector = document.querySelector("#validation-utilisateur");
let affichage = document.querySelector("#affichage");

//Etape 3 - Générer un nombre aléatoire

let randNumb = Math.floor(Math.random()*1000);

//Etape 4 - Vérifier que l'utilisateur donne bien un nombre

buttonSelector.addEventListener("click", verification);

function verification(){
    let inputUser = inputUserSelector.value;
    if(){

    }else{
        if(inputUser < randNumb){
            affichage.textContent = "C'est plus !";
        }else if(inputUser > randNumb){
            affichage.textContent = "C'est moins";
        }else {
            affichage.textContent = "Gagné";
        }
    }
 
}