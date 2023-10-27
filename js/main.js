const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 300; /* velocidad conque se muestra la imagen*/
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}