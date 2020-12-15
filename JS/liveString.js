let resultatP = document.getElementById('resultat');
let testStringP = document.getElementById('testString');

resultatP.innerHTML = "Mon paragraphe contient " + testStringP.innerHTML.length + "caracteres";

// Premiere etape, on veut savoir si le texte contenu dans le p testString debute avec le mot lorem
let test = testStringP.innerHTML.toLowerCase();
test = test.trim();

if (test.startsWith('lorem')){
    let span = document.createElement('span');
    span.innerHTML = "Le texte de mon choix je ne sais pas quoi mettre dedans !";
    testStringP.prepend(span);
}

if (test.endsWith('?')){
    testStringP.querySelector('span').remove();
    testStringP.removeChild(testStringP.querySelector('span'));
    testStringP.removeChild(testStringP.firstChild);
    testStringP.removeChild(testStringP.firstElementChild);
}

//Aurait aussi pu etre ecris comme ça:
//*if(testStringP.innerHTML.toLowerCase().trim().startsWith('lorem')){

//}

let chaine = "Hello World !";

