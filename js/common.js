window.onload = function() {
	var inputField = document.getElementById('arabian'), outputField = document.getElementById('output'), initialOutput = outputField.innerHTML;

	inputField.addEventListener('keyup', function() {
		var inputValue = (typeof +inputField.value === 'number' 
							&& +inputField.value > 0
							&& +inputField.value < 10000
							&& Math.floor(+inputField.value) === +inputField.value) 
							? +inputField.value
							: 0;
		if (inputValue) {
			outputField.innerHTML = solution(inputValue);
			outputField.classList.add('result');
		} else if (inputField.value === '') {
			outputField.innerHTML = initialOutput;
			outputField.classList.remove('result');
		} else {
			outputField.innerHTML = 'Enter an integer number, higher than 0 and lower than 10000!'
			outputField.classList.remove('result');
		}
	});

	function solution(number) {
		var ar = number.toString(), r = "";
		function rNum(n) {
			var num = +(n.charAt(0));
			if (+n >= 100) {
				num === 1 ? r += "C" : num === 2 ? r += "CC" : num === 3 ? r += "CCC" : num === 4 ? r += "CD" : num === 5 ? r += "D" : num === 6 ? r += "DC" : num === 7 ? r += "DCC" : num === 8 ? r += "DCCC" : num === 9 ? r += "CM" : r += "";
			} else if (+n >= 10) {
				num === 1 ? r += "X" : num === 2 ? r += "XX" : num === 3 ? r += "XXX" : num === 4 ? r += "XL" : num === 5 ? r += "L" : num === 6 ? r += "LX" : num === 7 ? r += "LXX" : num === 8 ? r += "LXXX" : num === 9 ? r += "XC" : r += "";
			} else if (+n >= 1) {
				num === 1 ? r += "I" : num === 2 ? r += "II" : num === 3 ? r += "III" : num === 4 ? r += "IV" : num === 5 ? r += "V" : num === 6 ? r += "VI" : num === 7 ? r += "VII" : num === 8 ? r += "VIII" : num === 9 ? r += "IX" : r += "";
			}
			ar = ar.substr(1)
		}
		if (number >= 1000) {
			let i = +(ar.substr(0, ar.length - 3));
			for (;i > 0; i--) {
				r += "M";
			}
			ar = ar.substr(ar.length - 3);
		}
		for (;ar;) rNum(ar);
			return r;
	}
}