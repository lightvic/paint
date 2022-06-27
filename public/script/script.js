///////////////////////////////////////////////////////////////////////////////////////////////////////
// première partie : les boutons outils dans les deux menus du haut

let outil = 'Aucun'

function outil_rectangle() {
    if (outil === 'Aucun') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'rectangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		outil = 'rectangle';
	}
	else if (outil === 'text') {
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_rect").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		outil = 'rectangle';
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_rect").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_rect").onclick = outil_rectangle;




function outil_triangle() {
    if (outil === 'Aucun') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'triangle';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_tri").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_tri").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_tri").onclick = outil_triangle;




function outil_ellipse() {
    if (outil === 'Aucun') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'ellipse';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_elli").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_elli").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_elli").onclick = outil_ellipse;




function outil_main() {
    if (outil === 'Aucun') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else if (outil === 'text') {
		outil = 'hand';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_hand").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_hand").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_hand").onclick = outil_main;




function outil_deformer() {
    if (outil === 'Aucun') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else if (outil === 'triangle') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else if (outil === 'rectangle') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else if (outil === 'ellipse') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else if (outil === 'hand') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else if (outil === 'text') {
		outil = 'size';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_resize").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_txt").style.border = "0px solid #000000";
		alert('Fonction à venir.');
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_resize").onclick = outil_deformer;



function outil_texte() {
    if (outil === 'Aucun') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'triangle') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'rectangle') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'ellipse') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'hand') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else if (outil === 'size') {
		outil = 'text';
		// changement visuel pour voir que l'outil est sélectionné
		document.getElementById("btn_txt").style.border = "1px solid #000000";
		// on réinitialise le style des autres outils au cas où ils auraient été sélectionnés avant.
		document.getElementById("btn_rect").style.border = "0px solid #000000";
		document.getElementById("btn_tri").style.border = "0px solid #000000";
		document.getElementById("btn_elli").style.border = "0px solid #000000";
		document.getElementById("btn_hand").style.border = "0px solid #000000";
		document.getElementById("btn_resize").style.border = "0px solid #000000";
	}
	else {
		outil = 'Aucun';
		document.getElementById("btn_txt").style.border = "0px solid #000000";
	}
	console.log(outil) // pour vérifier que ça fonctionne
}
document.getElementById("btn_txt").onclick = outil_texte;













///////////////////////////////////////////////////////////////////////////////////////////////////////
// deuxième partie : le canvas et son initialisation



// construction du canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// couleurs et polices par défaut
var stroke_color = 'rgb(0, 0, 0)';				// par défaut. Il faudra changer ça plus tard en fonction des choix de l'utilisateur.
var fill_color = 'rgb(255, 255, 255)';			// idem
var text_color = stroke_color;					// idem
var stroke_thickness = 2;						// idem
if (document.getElementById("select_font_size").value) {
	var font_size = document.getElementById("select_font_size").value ;
}
else {											// si aucune taille de police n'est donnée, on prend 18 px.
	var font_size = 18;
}

var font_type = document.getElementById("select_font_type").value ;


// style de canvas
ctx.strokeStyle = stroke_color;
ctx.lineWidth = stroke_thickness;

// initialisation du curseur de la souris (par rapport au canvas)
var canvasOffset = canvas.getBoundingClientRect();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;


// cette variable sera vraie lorsque le bouton de la souris est enfoncé
var isDown = false;

// ces variables contiendront la position initiale du curseur de la souris (dans le cas d'un déplacement).
var startX;
var startY;

// var x1 = null
// var x2 = null
// var y1 = null
// var y2 = null











///////////////////////////////////////////////////////////////////////////////////////////////////////
// troisième partie : la construction des figures

let figures = [];	// variable dans laquelle toutes les informations relatives aux différentes figures seront stockées.

function draw() {	// cette fonction trace toutes les figures à partir des données stockées dans la liste figures.
	for (var i = 0; i < figures.length; i++) {
		if(figures[i][5] != '') {
			if (figures[i][0] === 'rectangle') {
				rectangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			else if (figures[i][0] === 'triangle') {
				triangle_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			else if (figures[i][0] === 'ellipse') {
				ellipse_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7]);
			}
			else if (figures[i][0] === 'text') {
				// mode de sauvegarde : figures[l-1] = [outil, startX, startY, text, max_width, text_color, font_type, font_size]; 
				zone_texte_souris(figures[i][1], figures[i][2], figures[i][3], figures[i][4], figures[i][5], figures[i][6], figures[i][7])
			}
	else {
		return
	}
		
			}
		}
	}






// Chargement de la sauvegarde éventuelle
var post_json = document.querySelector("#post_json").innerHTML;
figures = JSON.parse(post_json);
draw();













function rectangle_clavier(x, y, L, H, couleur_contour, couleur_remplissage, epaisseur_contour) {
	ctx.fillStyle = couleur_remplissage;
	ctx.fillRect(x,y,L,H);					// remplissage du rectangle
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.strokeRect(x,y,L,H);				// contour du rectangle
}

function rectangle_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	// cette fonction effectue des calculs sur les données de la souris pour obtenir les données nécessaires à rectangle_clavier
	var Xmin = Math.min(x1,x2);
	var L = Math.max(x1,x2) - Xmin;
	var Ymin = Math.min(y1,y2);
	var H = Math.max(y1,y2) - Ymin;
	rectangle_clavier (Xmin, Ymin, L, H, couleur_contour, couleur_remplissage, epaisseur_contour);
}

function triangle_clavier(x1, y1, x2, y2, x3, y3, couleur_contour, couleur_remplissage, epaisseur_contour){
	ctx.fillStyle = couleur_remplissage;
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x1, y1);
	ctx.fill();
	ctx.stroke();
}

function triangle_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	// même principe que rectangle_souris
	var x3 = (x1 + x2)/2;
	var y3 = y2;
	var y2 = y1;
	triangle_clavier(x1, y1, x2, y2, x3, y3, couleur_contour, couleur_remplissage, epaisseur_contour);
} // on trace un triangle isocèle inscrit dans le rectangle, avec une base horizontale.

function degToRad(degrees) {
	// cette fonction convertit les degrés (plus naturels pour nous) en radians (nécessaires pour les fonctions de tracé d'ellipses).
    return degrees * Math.PI / 180;
  	};

function ellipse_clavier(x0, y0, rayonX, rayonY, couleur_contour, couleur_remplissage, epaisseur_contour){
	ctx.fillStyle = couleur_remplissage;
	ctx.strokeStyle = couleur_contour;
	ctx.lineWidth = epaisseur_contour;
	ctx.beginPath();
	ctx.ellipse(x0, y0, rayonX, rayonY, degToRad(0), degToRad(360), false);
	ctx.fill();
	ctx.stroke();
	}

function ellipse_souris(x1, y1, x2, y2, couleur_contour, couleur_remplissage, epaisseur_contour){
	// même principe que rectangle_souris
	var x0 = (x1 + x2)/2;
	var y0 = (y1 + y2)/2;
	var rayonX = x0 - Math.min(x1,x2);
	var rayonY = y0 - Math.min(y1,y2);
	ellipse_clavier(x0, y0, rayonX, rayonY, couleur_contour, couleur_remplissage, epaisseur_contour);
}

function zone_texte_souris(X, Y, texte, largeur_max, couleur_texte, type_police, taille_police) {
	if (texte == '') {
		alert('Veuillez entrer un texte dans la zone de droite et réessayer.')
	}
	else {
		ctx.fillStyle = couleur_texte;
		var pixel = taille_police
		// ctx.fillText a besoin que ctx.font soit de la forme "n pixels serif"
		// mais nous avions besoin de stocker la taille et le type de police séparément
		// donc il faut les rassembler avant de tracer la zone de texte.
		if (type_police == 'serif') {
			ctx.font = pixel + 'px serif';
		}
		else if (type_police == 'sans-serif') {
			ctx.font = pixel + 'px sans-serif';
		}
		else if (type_police == 'cursive') {
			ctx.font = pixel + 'px cursive';
		}
    	ctx.fillText(texte, X, Y, largeur_max);
	}
}






///////////////////////////////////////////////////////////////////////////////////////////////////////
// quatrième partie : l'influence de la souris


let forme_selectionnee = 'None'
// puisque le dernier élément d'une liste a aussi l'indice -1, on utilise -2 pour signifier qu'aucune forme n'est sélectionnée.
let indice_selection = -2;
// en cas de déplacement, ces variables contiendront, pour les formes classiques, leurs anciennes coordonnées.
let old1 = 0;		// même chose pour les zones de texte
let old2 = 0;		// même chose pour les zones de texte
let old3 = 0;		// inutilisée pour les zones de texte
let old4 = 0;		// contient la largeur maximale pour les zones de texte

function handleMouseDown(e) {
	// initialisation du curseur de la souris
	var canvasOffset = canvas.getBoundingClientRect();
	var offsetX = canvasOffset.left;
	var offsetY = canvasOffset.top;
    e.preventDefault();
    e.stopPropagation();

    // coordonnées du premier coin du rectangle de construction
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // on indique que le curseur de la souris est enfoncé
    isDown = true;
	
	// on crée un nouvel élément pour sauvegarder les données de la nouvelle forme.
	if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		figures.push([outil,0,0,0,0,'','',0]);
	}

	else if (outil == 'text') {
		// on récupère le texte du formulaire
		texte_formulaire = document.getElementById("your_text").value;
		if (texte_formulaire == '') {
			alert('Veuillez entrer du texte dans la zone prévue à cet effet dans le menu de droite, puis réessayer.')
		}
		else {
			max_width = canvas.width - startX; 		// on veut éviter que le texte sorte du canvas
			text_color = stroke_color;				// la couleur du texte utilise la couleur de contour des formes
			if (document.getElementById("select_font_size").value) {
				font_size = document.getElementById("select_font_size").value ;
			}
			else {									// si aucune taille de police n'est donnée, on prend 18 px.
				font_size = 18;
			}
			font_type = document.getElementById("select_font_type").value ;
			// sauvegarde pour les zones de texte :
			figures.push([outil, startX, startY, texte_formulaire, max_width, text_color, font_type, font_size]);
			console.log(figures);
			// on efface le canvas et on redessine les figures, pour valider la création de la zone.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}
	}



	// déplacement de figures
	else if (outil == 'hand'){
		// on récupère la position de la souris :
		mouseX = parseInt(e.clientX - offsetX);
		mouseY = parseInt(e.clientY - offsetY);
		// on parcourt la liste à l'envers car, si on est dans la zone de sélection de plusieurs formes, on doit prendre celle du dessus, qui est la dernière tracée.
		var l=figures.length;
		var i = l-1;
		while (i >= 0) {
			// on a besoin de connaitre les coordonnées de la figure, pour comparer avec la position de la souris.
			// les coordonnées sont traîtées différemment pour les formes classiques et pour les zones de texte donc j'ai deux cas :
			if (figures[i][0] == 'rectangle' || figures[i][0] == 'triangle' || figures[i][0] == 'ellipse'){		
				// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
				// on compare ces coordonnées à celles de la souris pour savoir si on est dans la zone de sélection de la forme.
				if (((figures[i][1] < mouseX && mouseX < figures[i][3]) || (figures[i][3] < mouseX && mouseX < figures[i][1])) && ((figures[i][2] < mouseY && mouseY < figures[i][4]) || (figures[i][4] < mouseY && mouseY < figures[i][2]))) {
					// si une forme est déjà sélectionnée, on remet l'épaisseur de son contour à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.)
					if (forme_selectionnee != 'None' && forme_selectionnee[0] != 'text') {
						forme_selectionnee[7] -= 2;
					}
					forme_selectionnee = figures[i];
					indice_selection = i;
					// il faut sortir de la boucle.
					i = -1;
					// on augmente l'épaisseur du contour de la forme sélectionnée pour montrer qu'elle est sélectionnée.
					if (forme_selectionnee[0] != 'text') {
						forme_selectionnee[7] += 2;
					}
				}
				else {
					// si une forme est sélectionnée, on remet l'épaisseur de son contour à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.)
					if (forme_selectionnee != 'None' && forme_selectionnee[0] != 'text') {
						forme_selectionnee[7] -= 2;
					}
					// on réinitialise les données de sélection pour ne pas garder la dernière forme sélectionnée.
					forme_selectionnee = 'None';
					indice_selection = -2;
					i -= 1;
				}
			}
			else if (figures[i][0] == 'text'){
				// la sélection d'une zone de texte est différente car on ne stocke que 2 coordonnées, au lieu de 4 pour les autres figures.
				// on calcule la largeur de la zone de texte.
				const nombre_caracteres = figures[i][3].length;
				const taille_caracteres = figures[i][7];
				const largeur = nombre_caracteres * taille_caracteres;
				// pour la hauteur, on considère qu'on n'écrit que sur une ligne.
				const hauteur = taille_caracteres;
				if ((figures[i][1] < mouseX && mouseX < figures[i][1] + largeur) && (figures[i][2] > mouseY && mouseY > figures[i][2] - hauteur)) {
					// si une forme est déjà sélectionnée (et si ce n'est pas du texte), on remet l'épaisseur de son contour à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.)
					if (forme_selectionnee != 'None' && forme_selectionnee[0] != 'text') {
						// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
						forme_selectionnee[7] -= 2;
					}
					forme_selectionnee = figures[i];
					indice_selection = i;
					// il faut sortir de la boucle.
					i = -1;
					// on augmente l'épaisseur du contour de la forme sélectionnée pour montrer qu'elle est sélectionnée (sauf si c'est du texte).
					if (forme_selectionnee[0] != 'text') {
						forme_selectionnee[7] += 2;
					}
				}
				else {
					// si une forme est sélectionnée, on remet l'épaisseur de son contour à sa valeur d'origine. (Si forme_selectionnee = 'None', ça signifie que la forme a été supprimée.)
					if (forme_selectionnee != 'None' && forme_selectionnee[0] != 'text') {
						forme_selectionnee[7] -= 2;
					}
					// on réinitialise les données de sélection pour ne pas garder la dernière forme sélectionnée.
					forme_selectionnee = 'None';
					indice_selection = -2;
					i -= 1;
				}

			}
		if (forme_selectionnee != 'None') {
			old1 = forme_selectionnee[1];
			old2 = forme_selectionnee[2];
			old3 = forme_selectionnee[3];
			old4 = forme_selectionnee[4];
		}
	}
	// // redimmensionnement de figures : cette fonction n'est pas encore disponible.
	// else if (outil == 'size'){
	// 	pass;
	// }
	}
}



function handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    // on a relaché le bouton de la souris donc on réinitialise la variable isDown :
    isDown = false;
	var l=figures.length;
	if (figures[l-1][0] === 'rectangle') {
		rectangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'triangle') {
		triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else if (figures[l-1][0] === 'ellipse') {
		ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
		// on efface le canvas et on redessine les figures, pour effacer le carré de dessin.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}

	// déplacement de figures

	else if (outil == 'hand'){
		console.log(forme_selectionnee); // pour le débuggage
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
		// on garde la forme sélectionnée en mémoire pour pouvoir changer ses couleurs.
	}

	// // redimmensionnement de figures : cette fonction n'est pas encore disponible.
	// else if (outil == 'size'){
	// 	pass;
	// }
}


function handleMouseOut(e) {
    e.preventDefault();
    e.stopPropagation();

    // on a relaché le bouton de la souris donc on réinitialise la variable isDown :
    isDown = false; 

	var l=figures.length;
	if (l > 0) {
		if (figures[l-1][0] === 'rectangle') {
			rectangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
			// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}
		else if (figures[l-1][0] === 'triangle') {
			triangle_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
			// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}
		else if (figures[l-1][0] === 'ellipse') {
			ellipse_souris(figures[l-1][1], figures[l-1][2], figures[l-1][3], figures[l-1][4], figures[l-1][5], figures[l-1][6], figures[l-1][7]);
			// on efface le canvas et on redessine les figures, pour effacer le rectangle de dessin.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
		}

		// déplacement de figures
		else if (outil == 'hand'){
			console.log(forme_selectionnee); // pour le débuggage
			// on efface le canvas et on redessine les figures, pour valider les changements.
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
			// on garde la forme sélectionnée en mémoire pour pouvoir changer ses couleurs.
		}
		
		// // redimmensionnement de figures : cette fonction n'est pas encore disponible.
		// else if (outil == 'size'){
		// 	pass;
		// }
	}


}

function handleMouseMove(e) {
	// initialisation du curseur de la souris
	var canvasOffset = canvas.getBoundingClientRect();
	var offsetX = canvasOffset.left;
	var offsetY = canvasOffset.top;
    e.preventDefault();
    e.stopPropagation();
    // on a relaché le bouton de la souris sans avoir opéré de déplacement donc on met fin à la fonction.
    if (!isDown) {
		return;
    }

    // on a besoin de connaitre en continu la position du curseur de la souris.
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // on efface le canvas et on redessine les figure en permanence, pour afficher un aperçu de la figure que l'on trace, sans que des dizines de figures quasi-identiques n'apparaissent.
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	console.log(figures); // pour le débuggage

    // on calcule la hauteur et la largeur du rectangle de tracé en fonction de la position du curseur par rapport à sa position de départ.
    var width = mouseX - startX;
    var height = mouseY - startY;

    // on dessine un rectangle de tracé
    if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		ctx.strokeRect(startX, startY, width, height);
	}
	
	
	// on met à jour les données de la figure en continu.
	var l = figures.length;
	if (outil == 'rectangle' || outil == 'triangle' || outil == 'ellipse'){
		figures[l-1] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness]; 
	}

	// déplacement de figures
	else if (outil == 'hand'){	
		console.log(forme_selectionnee); // pour le débuggage
		if (indice_selection != -2) {
			moveX = mouseX - startX;
			moveY = mouseY - startY;
			if (forme_selectionnee[0] != 'text') {
				// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
				forme_selectionnee[1] = old1 + moveX;
				forme_selectionnee[2] = old2 + moveY;
				forme_selectionnee[3] = old3 + moveX;
				forme_selectionnee[4] = old4 + moveY;
			}
			else {
				// rappel pour les zones de texte : figures[i] = [outil, X, Y, texte, largeur_max, couleur_texte, type_police, taille_police]
				forme_selectionnee[1] = old1 + moveX;
				forme_selectionnee[2] = old2 + moveY;
				forme_selectionnee[4] = old4 - moveX; // si on augmente l'abscisse X, on déplace la zone vers la droite. Donc la largeur maximale diminue.
			}
		}
	}
	
	
	// // redimmensionnement de figures : cette fonction n'est pas encore disponible.
	// else if (outil == 'size'){
	// 	pass;
	// }


}











///////////////////////////////////////////////////////////////////////////////////////////////////////
// cinquième partie : les outils qui modifient des figures existantes


function outil_gomme() {
	if (forme_selectionnee != 'None' || indice_selection != -2) {
		// on déplace les données de la figure sélectionnée à la fin de la liste figures.
		const troisième_variable = forme_selectionnee;
		var i = indice_selection
		var l = figures.length;
		while (i < l-1) {
			figures[i] = figures[i+1];
			i += 1;
		}
		figures[-1] = troisième_variable;
		// on supprime la figure sélectionnée (qui est donc maintenant en dernière position).
		figures.splice(-1);
		// on réinitialise les données de sélection.
		forme_selectionnee = 'None';
		indice_selection = -2;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	else {
		// si aucune forme n'est sélectionnée, on efface complètement le canvas.
		alert("Toutes les figures du canvas vont être effacées.");
		figures = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
document.getElementById("btn_erase").onclick = outil_gomme;


function KeyPress(e) {			// CTRL + Z sert uniquement à annuler la dernière construction
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey){
        figures.splice(-1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Fonction pour afficher
		draw();
	}
}
document.onkeydown = KeyPress;




function changer_couleur_remplissage() {
	let new_color = document.getElementById("select_fill_color").value;
	if (indice_selection != -2) {
		// une forme est sélectionnée donc on change sa couleur.
		// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
		forme_selectionnee[6] = new_color;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	fill_color = new_color;
}
document.getElementById("confirm_fill_color").onclick = changer_couleur_remplissage;



function changer_couleur_contour() {
	let new_color = document.getElementById("select_stroke_color").value;
	if (indice_selection != -2) {
		// une forme est sélectionnée donc on change sa couleur. Pour les zones de texte, cela change la couleur de police.
		// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
		forme_selectionnee[5] = new_color;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	stroke_color = new_color;
}

document.getElementById("confirm_stroke_color").onclick = changer_couleur_contour;



function changer_epaisseur_contour() {
	let number = document.getElementById("select_stroke_thickness").value;
	// on ne doit pas appliquer le changement suivant aux zones de texte car cela change la taille de police
	// (et si 5px sont plutôt importants pour un contour, ils sont très insuffisants pour une taille de police).
	if (indice_selection != -2 && forme_selectionnee[0] != 'text') {
		// une forme est sélectionnée donc on change sa couleur.
		// rappel : figures[i] = [outil, startX, startY, mouseX, mouseY, stroke_color, fill_color, stroke_thickness];
		forme_selectionnee[7] = number;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// les cases à droite restent dans la couleur choisie donc on garde cette couleur pour les prochaines figures.
	stroke_thickness = number;
}
document.getElementById("confirm_stroke_thickness").onclick = changer_epaisseur_contour;




function avancer_figure() {
	var l=figures.length;
	// on vérifie d'abord que la fonction est utilisée à bon escient.
	if (indice_selection == -2) {
		alert("Vous devez d'abord sélectionner une figure avec l'outil main.");
	}
	else if (indice_selection >= l-1) {
		alert("La figure est déjà au premier-plan.")
	}
	// on peut maintenant
	else {
		// on peut maintenant échanger la position de la figure avec celle sui la suit dans la liste (et qui est donc devant sur le dessin).
		troisième_variable = figures[indice_selection+1];
		figures[indice_selection+1] = forme_selectionnee;
		figures[indice_selection] = troisième_variable;
		// La forme sélectionnée a changé d'indice donc on adapte la variable.
		indice_selection += 1;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
}
document.getElementById("figure_front").onclick = avancer_figure;



function reculer_figure() {
	// on vérifie d'abord que la fonction est utilisée à bon escient.
	if (indice_selection == -2) {
		alert("Vous devez d'abord sélectionner une figure avec l'outil main.");
	}
	else if (indice_selection <= 0) {
		alert("La figure est déjà à l'arrière-plan.")
	}
	else {
		// on peut maintenant échanger la position de la figure avec celle sui la précède dans la liste (et qui est donc derrière sur le dessin).
		troisième_variable = figures[indice_selection-1];
		figures[indice_selection-1] = forme_selectionnee;
		figures[indice_selection] = troisième_variable;
		// La forme sélectionnée a changé d'indice donc on adapte la variable.
		indice_selection -= 1;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
}
document.getElementById("figure_back").onclick = reculer_figure;



function changer_zone_texte() {
	// on définit les variables qui contiendront les nouveaux paramètres.
	var new_font_size
	var new_font_type
	var new_text
	// on récupère leur valeur dans le menu de droite.
	if (document.getElementById("select_font_size").value) {
		new_font_size = document.getElementById("select_font_size").value;
	}
	else {									// si aucune taille de police n'est donnée, on prend 18 px.
		new_font_size = 18;
	}
	new_font_type = document.getElementById("select_font_type").value;
	if (document.getElementById("your_text").value) {
		new_text = document.getElementById("your_text").value;
	}
	else {
		new_text = forme_selectionnee[3];
	}
	// on n'applique les changements à la forme sélectionnée que s'il s'agit d'une zone de texte.
	if (indice_selection != -2 && forme_selectionnee[0] == 'text') {
		// une forme est sélectionnée donc on lui applique les changements effectués.
		// rappel pour les zones de texte : figures[i] = [outil, X, Y, texte, largeur_max, couleur_texte, type_police, taille_police]
		forme_selectionnee[3] = new_text;
		forme_selectionnee[6] = new_font_type;
		forme_selectionnee[7] = new_font_size;
		// on efface le canvas et on redessine les figures, pour valider les changements.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw();
	}
	// on conserve ces changements pour la prochaine zone de texte.
	font_size = new_font_size
	font_type = new_font_type
}

document.getElementById("confirm_text").onclick = changer_zone_texte;




///////////////////////////////////////////////////////////////////////////////////////////////////////
// sixième partie : les évènements du canvas pour la partie 4

document.getElementById('canvas').addEventListener('mousedown', function(e) {
  	handleMouseDown(e);
});
document.getElementById('canvas').addEventListener('mousemove', function(e) {
  	handleMouseMove(e);
});
document.getElementById('canvas').addEventListener('mouseup', function(e) {
  	handleMouseUp(e);
});
document.getElementById('canvas').addEventListener('mouseout', function(e) {
  	handleMouseOut(e);
});













///////////////////////////////////////////////////////////////////////////////////////////////////////
// septième partie : le lien avec le json, pour les différents modes de sauvegardes notamment (pdf ou png)

// tout ce qui suit est la propriété intellectuelle d'Adrien 
// mes variables
var save = document.querySelector("#save");
var get_json = document.querySelector("#get_json");
var open_form = document.querySelector("#open_form");
var the_form = document.querySelector("#form")

// test variables
// console.log(array_json);

// mes fonctions

function switch_hidden() { //fait apparaitre le formulaire
  the_form.style.visibility = "visible";
}
function save_it() { //récupère le json dans le input
    var data = [...figures];
    let array_json = JSON.stringify(data); //transforme data en json
    get_json.value = array_json;
}

// mes events
open_form.addEventListener("click", switch_hidden)
save.addEventListener("click", save_it);


// télécharger en png et pdf

//permet de cacher les menus
function hide(){
    document.getElementById('png').parentNode.removeChild(document.querySelector('#png'))
    changementPng.style.visibility="hidden";
    changementPdf.style.visibility="hidden";
    
}


//permet de télécharger le canvas en png


function changePng(){
	// if (document.querySelector("png")==true){
	// 	document.getElementById('png').parentNode.removeChild(document.querySelector('#png'));
	// }
    var URL = document.querySelector("#canvas").toDataURL("image/png");
    var a = document.createElement('a');
    // var titre=document.querySelector($titre);
    a.download = "Nouveau_fichier.png";
    a.href = URL;
    var link = document.createTextNode("Télécharger");  
    a.appendChild(link); 
	var conversion = document.querySelector("#convertir")
	conversion.appendChild(a)
    // document.body.appendChild(a);
    a.id="png";
    var download=document.querySelector('#png');
    // changementPng.style.visibility="collapse";
    download.addEventListener("click",hide);
}

function changePDF(){
    var dataURL = canvas.toDataURL('image/jpeg');
    let pdf = new jsPDF();
    pdf.addImage(dataURL, 'JPEG', 0, 0);
    pdf.save("nouveau_fichier.pdf");
    changementPng.style.visibility="hidden";
    changementPdf.style.visibility="hidden";
    menu.style.visibility="initial";
}

function change(){
    let changementPng = document.querySelector("#convertirPng");
    let changementPdf = document.querySelector("#convertirPdf");
    changementPng.style.visibility="initial";
    changementPdf.style.visibility="initial";
    changementPng.addEventListener("click",changePng);
    changementPdf.addEventListener("click",changePDF);
}

let changementPng = document.querySelector("#convertirPng");
let changementPdf = document.querySelector("#convertirPdf");
changementPng.style.visibility="hidden";
changementPdf.style.visibility="hidden";
var canvas = document.querySelector('canvas');
var accepte = document.querySelector('#menu');
accepte.addEventListener("click",change);

// // Théo //
function switchVisible(){
	the_form.style.visibility = "hidden";
}
// let body_var = document.querySelector("body").onclick = function(e) {
// 	if(e.target != )
// }

let cross = document.querySelector(".cross")
cross.addEventListener("click", switchVisible)