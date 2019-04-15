showHide=document.getElementsByTagName('a');
showHide[0].addEventListener("click",showText);
showHide[1].addEventListener("click",hideText);

//lorsqu'on clique sur afficher la fonction suivante s'active
function showText(){
    document.getElementById('text').style.display = 'block';
    //Pour masquer la div :
}
//lorsqu'on clique sur Masquer la fonction suivante s'active
function hideText(){
    document.getElementById('text').style.display = 'none';
    ///Pour afficher la div :

}
