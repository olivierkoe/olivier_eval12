// Dans ce projet, nous allons revoir ensemble le concept de programmation
// orientée objet.
// Nous utiliserons plus particulièrement les classes et l'héritage grâce à un
// petit jeu dans la console, juste pour être sûr d'avoir bien compris la notion
// de programmation orientée objet.
// Tout se passera dans la console pour le moment ;)

// La classe Personnage
// Propriétés :
//  pseudo,
//  classe (magicien ou guerrier)
//  sante
//  attaque
//  niveau (initialisé à 1)

// Méthodes :
//  evoluer() - Augmente le niveau personnage de 1, et affiche "[pseudo]
// passe au niveau [niveau] !"'
//  verifierSante() - Vérifie si la santé du personnage est inférieure ou
// égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de
// points de vie négatifs et affiche "[pseudo] a perdu !"
// Getters :
//  informations() - Affiche les informations du personnage "[pseudo]
// [classe] a [sante] points de vie et est au niveau [niveau]."
// La classe Magicien hérite de Personnage

// Propriétés :
//  Aucune. Se contente d'appeler le constructeur de Personnage, en lui
// donnant en paramètres (pseudo, "magicien", 170, 90). Donc vous
// l'aurez compris, pour initialiser un joueur, il faudra appeler le
// constructeur de la classe que nous voulons, et donner juste un
// pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

// Méthodes :
//  attaquer(personnage) - Prend en paramètre le personnage adverse
// (donc un objet). Réduit la santé du personnage adverse selon le
// nombre de dégâts que fait le personnage en cours, et affiche
// "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque]
// dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la
// fonction verifierSante() du personnage adverse.
//  coupSpecial(personnage) - Prend en paramètre le personnage
// adverse (donc un objet). Réduit la santé du personnage adverse selon
// le nombre de dégâts que fait le personne en cours, fois 5, et affiche
// "[pseudo] attaque avec son coup spécial puissance des arcanes
// [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la
// fonction evoluer(). Puis, appelle la fonction verifierSante() du
// personnage adverse.
// La classe Guerrier hérite de Personnage

// Propriétés :
//  Aucune. Se content d'appeler le constructeur de Personnage, en lui
// donnant en paramètres (pseudo, "guerrier", 350, 50). Donc vous
// l'aurez compris, pour initialiser un joueur, il faudra appeler le
// constructeur de la classe que nous voulons, et donner juste un
// pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

// Méthodes :
//  attaquer(personnage) - Prend en paramètre le personnage adverse
// (donc un objet). Réduit la santé du personnage adverse selon le
// nombre de dégâts que fait le personnage en cours, et affiche
// "[pseudo] attaque [personnage.pseudo] avec son épée ([attaque]
// dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la
// fonction verifierSante() du personnage adverse.
//  coupSpecial(personnage) - Prend en paramètre le personnage
// adverse (donc un objet). Réduit la santé du personnage adverse selon
// le nombre de dégâts que fait le personne en cours, fois 5, et affiche
// "[pseudo] attaque avec son coup spécial haches de guerre
// [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la
// fonction evoluer(). Puis, appelle la fonction verifierSante() du
// personnage adverse.


// Aragorn guerrier a 350 points de vie et est au niveau 1
// gandalf magicien a 170 points de vie et est au niveau 1
// gandalf attaque Aragorn en lançant un sort (90 de dégats)
// gandalf passe au niveau 2
// Aragorn guerrier a 260 points de vie et est au niveau 1
// Aragorn attaque gandalf avec son épée (50 dégâts)
// Aragorn passe au niveau 2
// gandalf magicien a 120 points de vie et est au niveau 2
// gandalf attaque avec son coup spécial puissance des arcanes Aragorn (450 dégâts)
// Aragorn a perdu

class personnage{
    constructor(pseudo,classe,sante,attaque,niveau=1){
        this.pseudo = pseudo,
        this.classe = classe,
        this.sante = sante,
        this.attaque = attaque;
        this.niveau = niveau;
    }

    evoluer(){
        this.niveau ++
        console.log (this.informations());
    }
    verifierSante(){
        if (this.sante <= 0){
            this.sante = 0;
            return this.pseudo + "est mort !! Il rejoinds donc le ValhaLa";
        }
        else {
            return this.pseudo + " possède " + this.sante + " points de vie." ;
        }
    }
    informations(){
        return this.pseudo +" "+ this.classe + " as " + this.sante + " points de vie et est au niveau "+this.niveau+" ."
    }

}
class magicien extends personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,"magicien",1700,90,niveau)
    }
    attaquer(ennemi){
        console.log(ennemi.sante -= this.attaque)
        ennemi.sante -= this.attaque;
        this.evoluer();
        this.verifierSante();
        console.log(ennemi.verifierSante());
        // console.log("La vie de " + this.pseudo + " as " + this.sante + " points de vie");

    }
    coupSpecial(ennemi){
        ennemi.sante -= this.attaque*5;
        this.evoluer();
        this.verifierSante();
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes qui inflige "+ this.attaque*5 +" points de dégats")
        console.log(ennemi.verifierSante());
        // console.log("La vie de " + this.pseudo + " as " + this.sante + " points de vie");
    }
}
class guerrier extends personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,"guerrier",3500,90,niveau)
    }
    attaquer(ennemi){
        console.log(ennemi.sante -= this.attaque)
        ennemi.sante -= this.attaque;
        this.evoluer();
        this.verifierSante();
        console.log(ennemi.verifierSante());
        // console.log("La vie de " + this.pseudo + " as " + this.sante + " points de vie");

    }
    coupSpecial(ennemi){
        ennemi.sante -= this.attaque*5
        this.evoluer();
        this.verifierSante();
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre qui inflige "+ this.attaque*5 +" points de dégats")
        console.log(ennemi.verifierSante());
        // console.log("La vie de " + this.pseudo + " as " + this.sante + " points de vie");
    }
}

let aragorn = new guerrier("Aragorn");
let gandalf = new magicien("Gandalf");



