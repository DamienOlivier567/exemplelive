/**
 * En JavaScript, les fonctions suivantes sont les plus utilisées afin de pouvoir récupérer des éléments HTML à traiter:
 ➔ getElementById → Récupère un élément HTML sur base de son ID,
 ➔ getElementsByTagName → Récupère une liste d’éléments HTML sur base du nom de tag ( <p>, <a>, … ),
 ➔ getElementsByClassName → Récupère une liste d’éléments HTML sur base de la classe CSS utilisée,
 ➔ querySelector → Retourne le premier élément HTML trouvé sur base d’un sélecteur CSS,
 ➔ querySelectorAll → Retourne une liste d’éléments HTML trouvés sur base d’un sélecteur CSS.
 C’est tout ce dont nous aurons besoin dans un premier temps, chacune de ces fonctions vous permettra d’accéder aux
 fonctionnalités liées aux “Element” en JS, je vous les expliquerai au fur et à mesure !
 **/

//On peut par exemple, accéder et modifier TOUS les attributs de notre élément qui sont habituellement donnés dans le code
// HTML

let introductionElement = document.getElementById('introduction');
console.log(introductionElement);

//Changer la direction du texte
introductionElement.dir = 'rtl';
//Modifier la valeur de l'infobulle (title)
introductionElement.title = 'Mon nouveau titre/ infobulle ';
//Retourner ou modifier le texte
introductionElement.innerText = 'Mon nouveaux texte';

//On peut aussi récupérer ces valeurs dans une variable afin de les tester avec une condition, dans l’exemple, nous
// modifions tout le contenu du paragraphe:

//Recuperation du contenu de notre paragraphe.
let innerHTML = introductionElement.innerHTML;
// Si le teste est vrai, alors on change le contenue HTML, ici, du texte.
if (innerHTML === "Introduction au Dom"){
    introductionElement.innerHTML = "Ma nouvelle introduction au <span>Dom</span> ! ";
}

//D’autres propriétés peuvent être changées / utilisées :

//Recuperer une liste de toutes les classe disponible.
introductionElement.classList = [];
//Modifier la classe CSS actuelle du paragraphe
introductionElement.className = 'newClass';
//Permet de verifier si le contenu est editable.
introductionElement.contentEditable = "false";
//Permet de changer l'ID d'un element
introductionElement.id = "nouvelId";
//Modifier le tab index de l'element.
introductionElement.tabIndex = 2;

//En utilisant les propriétés de notre élément, il est même possible de changer TOUTES les informations de l’élément parent
// ( élément qui contient notre paragraphe ! ).

//Modification du title de l'élement parent de notre paragraphe.
introductionElement.parentElement.title = "Nouveau titre pour l'element HTML parent";


//Un autre point intéressant est le fait de pouvoir directement changer le style CSS de nos éléments à l’aide de JavaScript, ca peut être utile lors
// du clic de la souris par exemple, ou dans une condition … Pour cela, vous pouvez utiliser l’attribut style de l’élément HTML comme suit :

introductionElement.style.display = 'flex';
introductionElement.style.backgroundColor = 'cadetblue';
introductionElement.style.color = 'white';
introductionElement.style.fontWeight = 'bold';

/**
 * querySelector Vous permettra de récupérer un élément HTML à l’aide d’un simple sélecteur CSS !! Très utile et très utilisé, vous
 * trouverez très vite son intérêt !
 **/

//Le code suivant récupère notre paragraphe ayant pour attribut id ‘introduction’. Cette instruction effectue la même chose que getElementById.
let introduction = document.querySelector('#introduction');
console.log(introduction);

//Si maintenant nous souhaitions récupérer le premier <span> se trouvant dans notre paragraphe introduction, nous aurions pu écrire ceci:
let introduction1 = document.querySelector('#introduction > span');
console.log(introduction1);

/**
 * getElementsByTagName ➔ Retourne une Collection d’éléments HTML ( liste d’éléments ) ayant comme balise, le nom de la balise fournie en
 * paramètre. Pour faire simple, vous retourne tous les éléments span si vous lui demandez gentiment !
 * Cette fonction renvoie une liste d’éléments HTML ( Collection ), n'ayant vu ni les listes ( Collection ), ni les boucles,
 * vous ne pourrez pas l’utiliser maintenant, mais cette fonction devrait vous être utile.
 **/

let elemnents = document.getElementsByTagName('span');
console.log(elemnents);

/**
 * getElementsByClassName ➔ Retourne une Collection d’éléments HTML ( liste d’éléments ) ayant comme classe CSS, le nom de la classe fournie en
 * paramètre. Pour faire simple, vous retourne tous les éléments à qui vous avez donné telle ou telle classe !
 * Cette fonction renvoie une liste d’éléments HTML ( Collection ), n'ayant vu ni les listes ( Collection ), ni les boucles,
 * vous ne pourrez pas l’utiliser maintenant, mais cette fonction devrait vous être utile.
 **/

let elements1 = document.getElementsByClassName('intro');
console.log(elements1);

/**
 * querySelectorAll ➔ Retourne une Collection d’éléments HTML ( liste d’éléments ) en fonction du sélecteur CSS que vous lui fournissez.
 * Cette fonction renvoie une liste de noeuds HTML ( NodeList ), à utiliser un peu plus tard, après avoir vu les
 * itérateurs...
 **/

let elements2 = document.querySelectorAll('span.intro');
console.log(elements2);