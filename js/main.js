const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showPass = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'masz bardzo dobre hasło'
		p.style.color = 'lime'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'masz dobre hasło'
		p.style.color = 'gold'
	} else {
		p.textContent = 'masz słabe hasło'
		p.style.color = 'tomato'
	}
}

const showMsg = () => {
	if (pass.value !== '') {
		showPass()
	} else {
		p.textContent = 'Nie podałeś hasła..'
		p.style.color = ''
	}
}

pass.addEventListener('keyup', showMsg)
