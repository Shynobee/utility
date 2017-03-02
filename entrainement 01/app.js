/*global window, console, document*/
/*jslint evil: true */
var log = function log(val) {
    "use strict";
    window.console.log(val)
}

var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
    document.write("-----------------------------------------<br>")
    document.write("l'utilisateur se nomme :" + " " + user.nom + " " + user.prenom + '<br>' + "il a :" + " " + user.age + '<br>' + "sa profession est :" + " " + user.profession + '<br>' + "sa couleur preferer est le :" + " " + user.couleurPref + '<br>' + '<br>');
};

var comprendreReturn = function comprendreReturn(p) {
    "use strict";
    return typeof(p);
};


var entrainement1 = function entrainement1() {
    "use strict";   
    window.console.log("app is ready !");

    var str, bool, nb, und, isnull, obj, utilisateur, utilisateur2, res;


    document.write("<h1>Entrainement 1</h1>");

    str = "un chaine de caracs";
    bool = typeof str === "string";
    nb = window.innerWidth;
    isnull = document.getElementById("vide");
    obj = {};
    document.write("la valeur de str =" + str + '<br>');
    document.write("la valeur de bool =" + bool + '<br>');
    document.write("la valeur de nb =" + nb + '<br>');
    document.write("la valeur de und =" + und + '<br>');
    document.write("la valeur de isnull =" + isnull + '<br>');
    document.write("la valeur de obj =" + obj + '<br>' + '<br>');

    obj.estPratique = true;
    obj.estMultiforme = true;
    obj.estDifficile = false;

    document.write("les objets sont pratique ? " + obj.estPratique + '<br>' +'<br>');



    var utilisateur = {
        nom: "Khouaji",
        prenom: "Walid",
        age: 27,
        profession: "apprenant dev JS",
        couleurPref: "Bleu",
        hobbies: ["Electronique", "hardware informatique", "jeux vidéo", "JavaScript", "Mangas"]
    }

    var utilisateur2 = {
        nom: "Khouaji",
        prenom: "Aymane",
        age: 23,
        profession: "dev JS",
        couleurPref: "Rouge",
        hobbies: ["jeux vidéo", "JavaScript", "Mangas", "airsoft", "cinéma"]

    };

    var utilisateur3 = {
        nom: "Vador",
        prenom:"Darth",
        age: NaN,
        profession: "sith",
        couleurPref: "noir",
        hobbies: ["combat sabre laser", "télékinésie", "être père", "étrangler sous fifre de l'empire"]
    }

    log(utilisateur.hobbies);
    log(utilisateur.hobbies[0]);
    log(utilisateur.hobbies[1]);
    log(utilisateur.hobbies[3]);
    log(utilisateur.hobbies[4]);

    log(utilisateur2.hobbies);
    log(utilisateur2.hobbies[0]);
    log(utilisateur2.hobbies[1]);
    log(utilisateur2.hobbies[3]);
    log(utilisateur2.hobbies[4]);

    log(utilisateur3.hobbies);
    log(utilisateur3.hobbies[0]);
    log(utilisateur3.hobbies[1]);
    log(utilisateur3.hobbies[3]);
    log(utilisateur3.hobbies[4]);


    afficherInfosUtilisateur(utilisateur)
    afficherInfosUtilisateur(utilisateur2)

    if (utilisateur.nom === "Khouaji") {
        document.write("l'user 1 se nomme Khouaji");
    } else if (utilisateur2.prenom === "Aymane"){
        document.write("l'user 2 se prénomme Aymane")
    } else {
        document.write("mauvaises réponses");
    }

    // log(comprendreReturn("une chaîne"));
    //var res = comprendreReturn(true && true && false);
    //log(res);

    //res = comprendreReturn({name: "Jack"});

    //if (res === 42){
    //    document.write("la vie l'univers et tout le reste")
    //} else if (res === "string"){
    //   document.write("terry pratchet is the best")
    //} else (res === "object"){
    //   alert("c'est un objet")
    //}
    var hobbies = utilisateur3.hobbies
    var compteur = 0;
    while (compteur < hobbies.length) {
        log('tour de boucle n° ' + (compteur + 1));
        log(hobbies[compteur]);
        compteur += 1;
    }
    log('fin de boucle while ^^');
    log('parcours avec une boucle for');


    for (compteur=0; compteur < hobbies.length; compteur += 1) {
        log("tour de boucle n° " + (compteur + 1));
        log(hobbies[compteur]);
    }

    log('fin de boucle for ^^');
    log('---------------CREATION ELEMENT HTML----------------');
    var x = document.createElement('div');
    x.id = "mon_element_cree_dynamiquement_par_js";
    x.className = "module test";
    x.textContent ="je suis une div crée en JS !"
    //on a crée dynamiquement unse div depuis JS
    //on lui a appliqué un id et 2 classes CSS
    log(x);
    document.body.appendChild(x);
    // puis on l'insère dans le document avec appendChild

};
entrainement1();

