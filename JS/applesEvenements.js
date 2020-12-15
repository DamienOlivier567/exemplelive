function buttonClicked(){
    alert("Le bouton a ete clique !");
}

let button = document.getElementById('click-me2');

button.addEventListener('click', function (){
    console.log("Mon bouton a ete declanche !")
    //Dans ce cas le mot cle this se refere au bouton
    this.style.backgroundColor = 'blue';
});

document.getElementById('Survole-moi').addEventListener('mouseover', function (){
    console.log("Mon bouton a ete survole !");
    this.style.backgroundColor = 'yellow';
});

let lien = document.getElementById('lien');
lien.addEventListener('click', function (event){ //On ajoute le parametre event qui recupere l'evenement
    event.preventDefault(); //Supression du comportement par defaut !
    this.style.backgroundColor = 'yellow';
});

/**
 *Exemple de recuperation des coordonnées X et Y lors d'un mousemove:
 **/
let p = document.querySelector('p');
p.addEventListener('mousemove', function (event){ // On ajoute le parametre event qui recupere l'evenement
    let X = event.clientX;
    let Y = event.clientY;
    console.log("X =" + X + "Y" + Y);
});

/**
 *Les evenements clavier
 * Keydown ==> Touche du clavier pressée, mais pas encore relachee (sur un element)
 * keypress ==> Touche de clavier pressée
 * keyup ==> Touche de clavier pressée, au moment du relachement !
 **/

document.body.addEventListener('keypress', function (event){
    console.log("La touche " + event.key + " a ete pressée");
});

/**
 * Pour supprimer un evenement
 * @type {HTMLElement}
 */

let select = document.getElementById('click-me');

function onSelectChange(){
    console.log(this.value);// log de la valeur actuelle du select au moment du changement !
    this.removeEventListener('change', onSelectChange); //Supresion du listener
}

//Ajout du listener
select.addEventListener('change', onSelectChange);