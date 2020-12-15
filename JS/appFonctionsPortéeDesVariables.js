/**
 * Espace global OU Scope global!
 * Une variable déclarée dans l’espace global ( j’utilise le terme global scope OU variable globale ) est disponible partout
 * dans le script. Ca parait compliqué, mais c’est en réalité très simple à comprendre.
 * Une variable est automatiquement globale si on la déclare n’importe où dans le script SAUF DANS :
 * ➔ Une fonction
 * ➔ Une condition
 * ➔ Une boucle
 **/

//Declarer dans l'espace global, pas dans une fonction conditions ....
let globalVar = "Contenu dans la variable";

function test(){
    //Une variable dans le scope global est acesible dans une fonction!
    console.log(globalVar);
}
test();//On invoque la fonction.

if (globalVar){
    //Une variable globale est accesible dans toute structure conditionnelle
    console.log(globalVar);
}