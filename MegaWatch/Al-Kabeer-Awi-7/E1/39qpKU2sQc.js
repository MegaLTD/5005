function RI(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
function server1(){
	document.getElementById("Ep1").setAttribute("src", "https://www.youtube.com/embed/Axs3ta4KD48");
}
function server2(){
	document.getElementById("Ep1").setAttribute("src", "https://www.youtube.com/embed/Axs3ta4KD48");
}
function server3(){
	document.getElementById("Ep1").setAttribute("src", "https://www.youtube.com/embed/Axs3ta4KD48");
}
function server4(){
	document.getElementById("Ep1").setAttribute("src", "https://www.youtube.com/embed/Axs3ta4KD48");
}
function randA(){
	let i = RI(0, 9);
	const links = ["https://75.cn.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html", 
		"https://cooralive.ml/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://123.int.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html", 
		"https://psyplay.ga/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://81.fr.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://123.asso.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://80.mk.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html"];
	
	window.location.href=links[i];
}
