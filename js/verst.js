const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal-button');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');


buttonModals.forEach((item) => {
	item.addEventListener('click', () => {
		modalWindow.style.display = 'flex';
		body.classList.add('noscroll');
	});
});

modalWindow.addEventListener('click', (e) => {
	const isModal = e.target.closest('.modal-inner');

	if(!isModal) {
		modalWindow.style.display = 'none';
		body.classList.remove('noscroll');
	}
});

modalClose.addEventListener('click', () => {
	modalWindow.style.display = 'none';
	body.classList.remove('noscroll');
});