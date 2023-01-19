function RI(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
function server1(){
	document.getElementById("Ep1").setAttribute("src", " ");
}
function server2(){
	document.getElementById("Ep1").setAttribute("src", " ");
}
function server3(){
	document.getElementById("Ep1").setAttribute("src", " ");
}
function server4(){
	document.getElementById("Ep1").setAttribute("src", " ");
}
function randA(){
	let i = RI(0, 5);
	const links = ["https://75.cn.eu.org/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html", 
		"https://cooralive.ml/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html", 
		"https://psyplay.ga/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html",
		"https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html",
		"https://81.fr.eu.org/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html",
		"https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/4nJVQrVpvU.html"];

	window.location.href=links[i];
}