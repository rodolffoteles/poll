var slider = document.getElementById('slider');
var output = document.getElementById('slider-output');
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;

	var sliderWidth = this.getBoundingClientRect().width;
    var outputWidth = output.getBoundingClientRect().width;
    var offset = -1;
    var left = (this.value - this.min) / (this.max - this.min) * sliderWidth + offset ;
    offset += left;
    output.style.left = left + 'px';
}


