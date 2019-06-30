
document.querySelector('.m-header-btn').addEventListener('mouseover', () => {
	document.querySelector('.m-header-form').classList.add('search-form');
	document.querySelector('.m-header-input').classList.add('search-input');
	document.querySelector('.m-header-btn').classList.add('search-btn');
});

document.querySelector('.m-header-input').addEventListener('mouseout', () => {
	document.querySelector('.m-header-form').classList.remove('search-form');
	document.querySelector('.m-header-input').classList.remove('search-input');
	document.querySelector('.m-header-btn').classList.remove('search-btn');
});

