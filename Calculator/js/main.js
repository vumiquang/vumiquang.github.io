var elementDisplayHistory = document.getElementById('history-content');
var elementDisplayResult = document.getElementById('result-content');
var expression ='';


document.getElementById('btn-fac').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
		elementDisplayResult.innerHTML += '!';
	}
	
	//add more
});

document.getElementById('btn-sqrt').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '&#8730;(';
	}
	//add more
});

document.getElementById('btn-square').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '<sup>2</sup>';
	}
	//add more
});

document.getElementById('btn-pow-3').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '<sup>3</sup>';
	}
	//add more
});

document.getElementById('btn-ngoac-trai').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '(';
	expression += '(';
	}
});

document.getElementById('btn-ngoac-phai').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += ')';
	expression += ')';
	}
});
document.getElementById('btn-backspace').addEventListener('click',function(){
	let convertString =String(elementDisplayResult.innerHTML);
	if(convertString.endsWith('<sup>2</sup>')){
		convertString = convertString.slice(0,-12);
		elementDisplayResult.innerHTML = convertString;
	}
	else if(convertString.endsWith('<sup>3</sup>')){
		convertString = convertString.slice(0,-12);
		elementDisplayResult.innerHTML = convertString;
	}
	else if(convertString.length == 2 && convertString.includes('=')){
		convertString = '';
		elementDisplayResult.innerHTML = convertString;
	}
	else{
		convertString = convertString.slice(0,-1);
		elementDisplayResult.innerHTML = convertString;
	}
	expression = expression.slice(0,-1);
	console.log(expression);

	
});
document.getElementById('btn-clear').addEventListener('click',function(){
	elementDisplayResult.innerHTML = '';
	expression = '';
	elementDisplayHistory.innerHTML = '';
});
document.getElementById('btn-7').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '7';
	expression += '7';
	}
});
document.getElementById('btn-8').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '8';
	expression += '8';
}
});
document.getElementById('btn-9').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '9';
	expression += '9';
}
});
document.getElementById('btn-0').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '0';
	expression += '0';
}
});
document.getElementById('btn-1').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '1';
	expression += '1';
}
});
document.getElementById('btn-2').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '2';
	expression += '2';
}
});
document.getElementById('btn-3').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '3';
	expression += '3';
}
});
document.getElementById('btn-4').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '4';
	expression += '4';
}
});
document.getElementById('btn-5').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '5';
	expression += '5';
}
});
document.getElementById('btn-6').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '6';
	expression += '6';
}
});
document.getElementById('btn-dot').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '.';
	expression += '.';
}
});
document.getElementById('btn-add').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '+';
	expression += '+';
}
});
document.getElementById('btn-sub').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '-';
	expression += '-';
}
});
document.getElementById('btn-mul').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '&#215;';
	expression += '*';
}
});
document.getElementById('btn-div').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '&#247;';
	expression += '/';
}
});

document.getElementById('btn-equal').addEventListener('click',function(){
	try {
 		var equal = eval(expression);
		if(equal.toString().length > 16){
		equal = equal.toPrecision(14); 
		}
		expression = equal.toString();
		elementDisplayHistory.innerHTML = elementDisplayResult.innerHTML;
		elementDisplayResult.innerHTML ='=' + equal;
	}
	catch(err) {
		expression = '';
 		equal = 'Math Error';
 		elementDisplayHistory.innerHTML = elementDisplayResult.innerHTML;
		elementDisplayResult.innerHTML = equal;
	}
	
	
});