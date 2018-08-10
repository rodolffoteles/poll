var slider = document.getElementById('slider');
var output = document.getElementById('slider-output');
output.innerHTML = slider.value;
output.style.left = '50%';

slider.addEventListener('input', () => {	
	var sliderMin = slider.min,
    	sliderMax = slider.max,
    	sliderVal = slider.value,
    	sliderThumbWidth = 20;

    var range = sliderMax - sliderMin;
    var position = ((sliderVal - sliderMin) / range) * 100;
    var positionOffset = Math.round(sliderThumbWidth * position / 100) - (sliderThumbWidth / 2);

    output.style.left = 'calc(' + position + '% - ' + positionOffset + 'px)';
    output.innerHTML = sliderVal;
   

});