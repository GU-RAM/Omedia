let ankerList = [];
let anker = document.querySelectorAll('a');

document.querySelector('.m-header-btn').addEventListener('mouseover', () => {

	// --------- show header input for searching
	document.querySelector('.m-header-form').classList.add('search-form');
	document.querySelector('.m-header-input').classList.add('search-input');
	document.querySelector('.m-header-btn').classList.add('search-btn');

	// --------- change a color in header list
	for(let i =0; i<= 7; i++) {
	   ankerList.push(anker[i]);
	   ankerList[i].style.color = '#3d719f';
   }
});


document.querySelector('.m-header-input').addEventListener('mouseout', () => {

	// --------- hide header input for searching 
	document.querySelector('.m-header-form').classList.remove('search-form');
	document.querySelector('.m-header-input').classList.remove('search-input');
	document.querySelector('.m-header-btn').classList.remove('search-btn');

    // --------- bring back a color in header list
	for(let i =0; i<= 7; i++) {
	   ankerList.push(anker[i]);
	   ankerList[i].style.color = '#fff';
   }
});

