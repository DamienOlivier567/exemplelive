/**
 *Une fonction se compose :
 ➔ Du mot clé function
 ➔ De son nom
 ➔ Éventuellement de paramètres ( non obligatoires )
 ➔ D’accolades ( une ouvrante et une fermante, comme un if )
 ➔ De votre code !!
 ➔ Éventuellement du mot clé return avec une valeur ( slides suivants )
 Une fonction peut être appelée autant de fois qu’on veut, n’importe ou:
 **/


/**
 *
 * @param nom
 * @param prenom
 */

function helloWorld(nom, prenom){
    console.log("Hello " + nom + "" + prenom);
}

//En lui passant des variables en parametres
let nom = "Does";
let prenom = "John";
helloWorld(nom, prenom)

//Ou en lui passant directement des valeurs !
helloWorld("Bond", "James");


//Soit on affecte a une variable.
let randomNumber = random();
document.getElementById('contenair').innerHTML = randomNumber;

//Soit on ajoute à un element HTML
document.getElementById("contenair").innerHTML = random().toString();


/**
 * Generer un nombre entre 1 et 100
 * @returns {number}
 */
function random1(){
    let randomNumber = Math.random();
    randomNumber *= 100;
    return Math.ceil(randomNumber);
}

/**
 * Pour être plus propre, la fonction du slide précédent aurait tout à fait pu être écrite comme suit:
 **/
function random() {
    return Math.ceil(Math.random * 100);
}