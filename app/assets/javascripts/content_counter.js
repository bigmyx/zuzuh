function imposeMaxLength(element, maxLen)
{
	var textAreaStatus = document.getElementById('textAreaStatus');
	len = element.value.length;
	lenBelowLimit = len <= maxLen;
	if (lenBelowLimit) {
		textAreaStatus.innerHTML = '(Used '+ len +' out of ' + maxLen + ' characters)';
		textAreaStatus.style.color = 'gray';
	} else {
		textAreaStatus.innerHTML = 'Exceeded ' + maxLen + ' characters';
		textAreaStatus.style.color = 'red';
	}
    if(!lenBelowLimit){
        element.value = element.value.substr(0, maxLen);
	}
}

