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



function choix() {
    var choice = prompt(
        "1 - addition \n 2 - soustraction \n 3 - multiplication \n 4 - division"
    );
}
choix();
var operation = choix();
console.log(choix);
console.log(typeof choix);
choix = +choix;
var choice_nbr1 = prompt("entrez un nombre");
var choice_nbr2 = prompt("entrez un nombre");
console.log(choice_nbr1);
console.log(choice_nbr2);
choice_nbr1 = parseInt(choice_nbr1);
choice_nbr2 = parseInt(choice_nbr2);
console.log(typeof choice_nbr1);
console.log(typeof choice_nbr2);



function addition(choice_nbr1, choice_nbr2){
    result = sum(choice_nbr1, choice_nbr2);
    return paresInt(result);
}
function soustraction(choice_nbr1, choice_nbr2){
    result = choice_nbr1 -= choice_nbr2;
    return paresInt(result);
}
function multiplication(choice_nbr1, choice_nbr2){
    result = choice_nbr1 *= choice_nbr2;
    return paresInt(result);
}
function division(choice_nbr1, choice_nbr2){
    result = choice_nbr1 /= choice_nbr2;
    return paresInt(result);
}

if (choix ===1 || choix ==2 || choix ===3 || choix ===4) {
    switch (choix){
        case 1:
            alert(
                "l'addition de vos deux nombre vaut:" + addition
            );
            break;
        case 2:
            alert("la soustraction de "+ choice_nbr2+ "du "+ choice_nbr1 + "est egale à :" + soustraction    
            );
            break;
        case 3:
            alert("la multiplication du "+ choice_nbr1 + "par "+ choice_nbr2+"est égale à " + multiplication
            );
            break;
        case 4:
            alert("la division du "+ choice_nbr1 + "par "+ choice_nbr2+"est égale à " + division
            );
            break;
    }
}
else{
    throw new Error("ceci n'est pas le bon choix:");
    }





