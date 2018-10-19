var bouton = document.getElementById("bouton");
var couleur = "white";
bouton.addEventListener("click",function(e){
	if(couleur==="white"){
		e.target.innerHTML="Blanche ?"
		couleur="yellow"
		document.body.style.backgroundColor = couleur;
	}else{
		e.target.innerHTML="Jaune ?"
		couleur="white"
		document.body.style.backgroundColor = couleur;
	}
});