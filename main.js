const img = document.querySelector('img');
const btnGray = document.querySelector('.card__colors-one');
const btnViolet = document.querySelector('.card__colors-two');
const btnBlue = document.querySelector('.card__colors-three');
const btnGreen = document.querySelector('.card__colors-four');
const heart = document.querySelector('.fa-heart');
const btnHeart = document.querySelector('.heart');

btnGray.addEventListener('click', () => {
	img.setAttribute('src', './img/fotel-voss-grey.png');
	img.setAttribute('alt', 'Fotel voss koloru fioletowego');
});

btnViolet.addEventListener('click', () => {
	img.setAttribute('src', './img/fotel-voss-red.png');
	img.setAttribute('alt', 'Fotel voss koloru fioletowego');
});
btnBlue.addEventListener('click', () => {
	img.setAttribute('src', './img/fotel-voss-blue.png');
	img.setAttribute('alt', 'Fotel voss koloru fioletowego');
});
btnGreen.addEventListener('click', () => {
	img.setAttribute('src', './img/fotel-voss-green.png');
	img.setAttribute('alt', 'Fotel voss koloru fioletowego');
});

btnHeart.addEventListener('click', () => {
	heart.classList.toggle('fa-heart-red');
});
