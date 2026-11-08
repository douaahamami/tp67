function poserQuestion(question, bonneReponse, points = 2) {
    const reponse = prompt(question);
    if (reponse === bonneReponse) {
        alert("Bonne réponse ! +" + points + " points");
        return points;
    } else {
        alert("Faux ! La bonne réponse était : " + bonneReponse);
        return 0;
    }
}

const calculerPourcentage = function (score, total) {
    return (score / total) * 100;
};

const estReussi = (pourcentage) => pourcentage >= 50;

const mention = (pourcentage) => {
    if (pourcentage >= 80) {
        return "Très bien";
    } else if (pourcentage >= 50) {
        return "Bien";
    } else {
        return "Au revoir";
    }
};

function afficherBilan(joueur, score, total = 10) {
    const pourcentage = calculerPourcentage(score, total);
    const resultMention = mention(pourcentage);

    console.log("Joueur : " + joueur);
    console.log("Score : " + score + " / " + total + " (" + pourcentage + " %)");
    console.log("Mention : " + resultMention);

    const statut = estReussi(pourcentage) ? "quiz réussi" : "quiz à repasser";
    alert(joueur + " : " + statut);
}

let prenom = prompt("Quel est votre prénom ?", "Invité");
if (!prenom) {
    prenom = "Invité";
}

let scoreTotal = 0;

scoreTotal += poserQuestion("Quelle balise HTML crée un lien ?", "a");
scoreTotal += poserQuestion("Quel attribut du label reprend l'id du champ ?", "for");
scoreTotal += poserQuestion("Combien vaut 7 / 2 en JavaScript ?", "3.5", 3);
scoreTotal += poserQuestion("Quel opérateur compare la valeur ET le type ?", "===", 3);

afficherBilan(prenom, scoreTotal, 10);


