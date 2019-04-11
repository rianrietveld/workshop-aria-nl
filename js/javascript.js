(function() {
	let toggle = document.querySelector('#toggle');
	let target = document.querySelector('#quote');

	toggle.onclick = () => {
		let expanded = toggle.getAttribute('aria-expanded') === 'true';

		toggle.setAttribute('aria-expanded', !expanded);
		target.hidden = expanded;
	}
})()
