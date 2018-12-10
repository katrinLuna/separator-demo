var separatorElement = document.querySelector('.separator');
var photoOriginalElement = document.querySelector('.photo-original');
var photoContainerElement = document.querySelector('.photos');
var photoContainerWidth = parseInt(getComputedStyle(photoContainerElement).width);
var photoContainerBorderWidth = parseInt(getComputedStyle(photoContainerElement).borderWidth);
var separatorElementOffset;

var getElementOffset = function (element) {
	var { left, top, width, height } = element.offsetParent.getBoundingClientRect();
	
	left = window.pageXOffset + left;
	top = window.pageYOffset + top;

	return { left, top, width, height };
}

separatorElementOffset = getElementOffset(separatorElement);

var onMousemove = function (evt) {
	var separatorCoordX = (evt.pageX - separatorElementOffset.left) - photoContainerBorderWidth;

	if (separatorCoordX > photoContainerWidth) {
		separatorCoordX = photoContainerWidth;
	} else if (separatorCoordX < 0) {
		separatorCoordX = 0;	
	};

	separatorElement.style.left = separatorCoordX + 'px';
	photoOriginalElement.style.width = separatorCoordX + 'px';
};

separatorElement.addEventListener('mousedown', function (evt) {
	evt.preventDefault();

	document.addEventListener('mousemove', onMousemove);
});

document.addEventListener('mouseup', function () {
	document.removeEventListener('mousemove', onMousemove);
});
