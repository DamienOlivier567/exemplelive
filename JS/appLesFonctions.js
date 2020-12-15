/**
 * parseInt() → Vous permet de transformer une chaîne de caractères en un Number ( nombre )
 **/

// Exemple d'une fonction qui transforme une chaine de caractere en un Number (nombre)
let numberAsString = "-52";
let result;

// numberAsString est un parametre de la fonction parseInt()
result = Number.parseInt(numberAsString);
console.log(typeof numberAsString);
console.log(typeof result);

//Dans le console.log, j’utilise le mot clé typeof, il nous indique le type de donnée que contient une variable. Dans
// certains cas, vous pourrez appeller une fonction sans faire référence à son objet ( ici Number. ). C’est le cas pour
// parseInt, mais pas forcément pour d’autres fonctions natives.

/**
 * parseFloat() → Vous permet de transformer une chaîne de caractères en un Number à virgule ( nombre à virgule )
 **/

//Exemple d'une fonction qui transforme une chaine de caracteres en nombre a virgule.
let floatAsString = "3.56"; //Le . est tres important --> Notation anglophobe
let result1;

//floatAsString est un parametre de la fonction parseFloat()
result1 = Number.parseFloat(floatAsString);
console.log(typeof floatAsString + " ==> " + floatAsString);
console.log(typeof result1 + "==>" + result1);

//Une fois qu’un nombre sous forme de chaîne de caractère est devenu un Number en bonne et due forme, vous pouvez
// l’utiliser afin d’effectuer les opérations que vous connaissez maintenant !

/**
 *isNaN() → Renvoie TRUE si le contenu d’une variable donnée n’est pas un nombre ! ( is not a number )
 **/

let numberAsString1 = "damien";
let resultat = parseInt(numberAsString1);

// numberAsString1 n'est pas un nombre on passera bien par cette condition
if (isNaN(numberAsString1)){
    console.log("numberAsString1 n'est pas un nombre !! Si je veux faire des operations avec " +
    "je dois sois le parser en  Number, soit l'initialiser à 0, je choisis la deuxieme options");
    numberAsString1 = 0; // Comme ça tout ce qui n'est pas un nombre vaudrat 0 !!!
}

//isNaN() évalue la VALEUR contenue dans la chaîne de caractère, et non le type

let numberAsString2 = "24";
let resultat1 = parseInt(numberAsString2);

if (isNaN(numberAsString2)){
    console.log("numberAsString1 n'est pas un nombre !! Si je veux faire des operations avec " +
        "je dois sois le parser en  Number, soit l'initialiser à 0, je choisis la deuxieme options");
    numberAsString2 = 0; // Comme ça tout ce qui n'est pas un nombre vaudrat 0 !!!
}
//la valeur de numberAsString2 est un nombre, on passera donc dans else!
else {
    result = parseInt(numberAsString2);
    console.log(typeof result);
}

/**
 * floor() → Renvoie le plus grand entier qui est inférieur ou égal à un nombre ( arrondi vers le bas ).
 **/

let x = 5.689;
let floorX = Math.floor(x);
console.log(x);
console.log(floorX);

//Assez ambiguë, n’hésitez pas à utiliser trunc à la place si vous ne la comprenez pas !

/**
 * trunc() → Supprime la partie décimale d’un nombre à virgule, sans arrondi !
 **/

let y = 53.689
let truncY = Math.trunc(y);
console.log(y);
console.log(truncY);

/**
 *random() → Vous permet de générer un nombre aléatoire entre 0 et 1 ( en décimal )
 **/

let aleatoireD;
for (let i=0; i < 5; i++){
    aleatoireD = Math.random();
    console.log(aleatoireD);
}

//En couplant les opérateurs de base que vous connaissez, ainsi que la fonction floor que vous venez de voir, il vous est
// possible de demander un nombre aléatoire compris entre 1 et 100.

let aleatoire;
for (let a=0; a < 5; a++){
    aleatoire = Math.trunc(Math.random() * 100);
    console.log(aleatoire);
}

/**
 *replace() → Permet de chercher et de remplacer une portion de texte dans une chaîne de caractères.
 **/

let hello = "Hello world";

//On remplace Hello par Good morning, la place des parametre a de l'importance !
let newHello = hello.replace('Hello', 'Good morning');

console.log(hello);
console.log(newHello);