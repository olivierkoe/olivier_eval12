// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n


var commencer = true;

var choixDeLoperation = choix();

while(commencer == true){
    // console.log(choix);
    // console.log(typeof choix);
    
    choixDeLoperation = +choixDeLoperation;

    if (choixDeLoperation ==1 || choixDeLoperation ==2 || choixDeLoperation ==3 || choixDeLoperation ==4) {
        switch (choixDeLoperation){
            case 1:
                alert(
                    "l'addition de vos deux nombre vaut:" + addition(choixNombre(),choixNombreDeux())
                );
                commencer = confirm("voulez vous continuer ?");
                break;
            case 2:
                alert(
                    "la soustraction de " + choixNombreDeux() + "du " + choixNombre() + "est egale à :" + soustraction(choixNombre(),choixNombreDeux())    
                );
                commencer = confirm("voulez vous continuer ?");
                break;
            case 3:
                alert(
                    "la multiplication du " + choixNombre() + "par " + choixNombreDeux() + "est égale à " + multiplication(choixNombre(),choixNombreDeux())
                );
                commencer = confirm("voulez vous continuer ?");
                break;
            case 4:
                alert(
                    "la division du "+ choixNombre() + "par " + choixNombreDeux() + "est égale à " + division(choixNombre(),choixNombreDeux())
                );
                commencer = confirm("voulez vous continuer ?");
                break;
        }
        
    }
   
}

// console.log(choice_nbr1);
// console.log(choice_nbr2);
// console.log(typeof choice_nbr1);
// console.log(typeof choice_nbr2);

function choix() {
    var choice = prompt(
        "Faite votre choix \n 1 - addition \n 2 - soustraction \n 3 - multiplication \n 4 - division \n \n"
        );
    if (choice == 1 || choice == 2 || choice == 3 || choice == 4){
    return choice;
    }

    else if (choice == null){
        alert("On a bien cliqué sur annuler");
        commencer = false;
    }
    else {
        alert("Le résultat isNaN");
        return choix();
    }
}

function choixNombre(){
    var choice_nbr1 = prompt("entrez un 1er nombre :");
    return choice_nbr1 = parseInt(choice_nbr1);

}
function choixNombreDeux(){
    var choice_nbr2 = prompt("entrez un 2em nombre :");
    return choice_nbr2 = parseInt(choice_nbr2);

}
function addition(a,b){
    result =(a + b);
    return result;
}
function soustraction(a,b){
    result = (a - b);
    return result;
}
function multiplication(a,b){
    result =(a * b);
    return result;
}
function division(a, b){
    result = (a / b);
    return result;
}








