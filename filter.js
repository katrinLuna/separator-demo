var bigPhotoElement = document.querySelector('.photo');
var toogleElements = document.querySelector('.toggle-controls');

var currentFilter;

var getFilterElement = function (filterName) {
 	return document.querySelector('.' + filterName);
};

var resetFilter = function () {
	if (currentFilter) {
		bigPhotoElement.classList.remove(currentFilter);
		getFilterElement(currentFilter).classList.remove('active');
	}
};

var setFilter = function (filterName) {
	resetFilter();
 	currentFilter = filterName;
	getFilterElement(currentFilter).classList.add('active');
	bigPhotoElement.classList.add(currentFilter);
};

setFilter('walden');

toogleElements.addEventListener('click', function (evt) {
	if (evt.target !== this && evt.target.dataset.filter) {
		setFilter(evt.target.dataset.filter);
	}
});