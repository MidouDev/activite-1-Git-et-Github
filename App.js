var bouton = document.getElementById("bouton");
var couleur = "white";
bouton.addEventListener("click",function(){
	if(couleur==="white"){
		couleur="yellow"
		document.body.style.backgroundColor = couleur;
	}else{
		couleur="white"
		document.body.style.backgroundColor = couleur;
	}
});