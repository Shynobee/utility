var log = function log(val) {
    "use strict";
    window.console.log(val)
};


var entrainement02 = function entrainement02(users) {
    var users, utilisateur, utilisateur2, utilisateur3;

    utilisateur = {
        nom: "Khouaji",
        prenom: "Walid",
        age: 27,
        profession: "apprenant dev JS",
        couleurPref: "Bleu",
        hobbies: ["Electronique", "hardware informatique", "jeux vidéo", "JavaScript", "Mangas"]
    };

    utilisateur2 = {
        nom: "Khouaji",
        prenom: "Aymane",
        age: 23,
        profession: "dev JS",
        couleurPref: "Rouge",
        hobbies: ["jeux vidéo", "JavaScript", "Mangas", "airsoft", "cinéma"]

    };

    utilisateur3 = {
        nom: "Vador",
        prenom:"Darth",
        age: NaN,
        profession: "sith",
        couleurPref: "noir",
        hobbies: ["combat sabre laser", "télékinésie", "être père", "étrangler sous fifre de l'empire"]
    };

    users = [utilisateur, utilisateur2, utilisateur3];

    var i, div, container;
    container = document.getElementById("utilisateurs");
    for (i = 0; i < users.length; i += 1) {
        log(users[i]);
        div = document.createElement('div');
        div.id = "users_" + (i + 1);
        div.className = "users";
        div.innerHtml = '<span>' + users[i].nom + '</span>';
        div.innerHtml = '<span>' + users[i].prenom + '</span>';
        //log(div);
        container.appendChild(div);
    };


};