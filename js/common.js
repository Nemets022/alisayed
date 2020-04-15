document.addEventListener('DOMContentLoaded', () => {
	const imgFone = () => {
		let imgf = document.querySelectorAll('.imgf'),
			i = 0
		for (i; i < imgf.length; i++) imgf[i].querySelector('img') ? imgf[i].style.backgroundImage = `url(./${imgf[i].querySelector('img').getAttribute('src')})` : null
	}
	
	//menu nav
	const menuNav = () => {
		let burger = document.querySelector('.header__burger'),
			 close = document.querySelector('.menu__close'),
			 menu = document.querySelector('.menu')
			 burger.addEventListener('click', () =>{
				menu.classList.add('visible')
			 })
			 close.addEventListener('click', () =>{
				menu.classList.remove('visible')
			 })
	}




	imgFone()
	menuNav()

})