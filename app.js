// HTML Elements
const nightTheme = document.querySelector('.theme')
const buttonMenu = document.querySelector('#menu-btn')
const btnClose = document.querySelector('#btn-close')
const menu = document.querySelector('aside')
const mediaQuery = window.matchMedia('(min-width: 769px)')
const allBtn = document.querySelector('#all-data')


// change the width of the window
const widthWindow = (x) => {
	if (x.matches) {
		menu.style.display = 'block'
	} else {
		menu.style.display = 'none'
	}
}

// change of theme
const changeTheme = () => {
	document.body.classList.toggle('night-theme')
}

// open menu
const openMenu = () => {
	menu.style.display = 'block'
}

// close menu
const closeMenu = () => {
	menu.style.display = 'none'
}

const labsPatient = () => {
	const labs = document.getElementsByClassName('row')

	for (let lab of labs) {
		lab.classList.toggle('hide')
	}

	allBtn.style.display = 'none'
}



// event listeners
nightTheme.addEventListener('click', changeTheme)
buttonMenu.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)
allBtn.addEventListener('click', labsPatient)

widthWindow(mediaQuery)
mediaQuery.addListener(widthWindow)