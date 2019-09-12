var elementDisplayHistory = document.getElementById('history-content');
var elementDisplayResult = document.getElementById('result-content');
var expression ='';
//kiểm tra đóng ngoặc = 0 nghĩa là chưa đóng, bằng 1 là đóng r
var checkclosingParenthesis = 0;
function sliceLastNumber(x){
  var lastNumber = '';
  for(let i = x.length - 1;i >= 0;i--){
    if(x[i] == '(' || x[i] == '-' || x[i] == '+' || x[i] == '*' || x[i] == '/'){
      break;
    }
    if(x[i] == ')')
    	lastNumber += '';
    else lastNumber += x[i];
  }
  lastNumber = lastNumber.split('').reverse().join('');
  return lastNumber;
}


// tính giai thừa
function factorial(n){
  var fac = 1;
  for(let i = 1;i <= n; i++)
    fac *= i;
  return fac;
}


document.getElementById('btn-fac').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
		elementDisplayResult.innerHTML += '!';
		var lastNum = sliceLastNumber(expression);
		var fac = 'factorial('+lastNum+')';
		var indexLastNum = expression.lastIndexOf(lastNum);
		expression = expression.split('');
		expression.splice(indexLastNum,lastNum.length,fac) ;
		expression = expression.join('');
	}
	//add more
});

document.getElementById('btn-sqrt').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '&#8730;(';
	expression += 'Math.sqrt(';
	}
	//add more
});

document.getElementById('btn-square').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '<sup>2</sup>';

	var lastNum = sliceLastNumber(expression);
	var pow2 = 'Math.pow('+lastNum+',2)';
	var indexLastNum = expression.lastIndexOf(lastNum);
	expression = expression.split('');
	expression.splice(indexLastNum,lastNum.length,pow2) ;
	expression = expression.join('');
	}
	//add more
});

document.getElementById('btn-pow-3').addEventListener('click',function(){
	if(elementDisplayResult.innerText.length < 19){
	elementDisplayResult.innerHTML += '<sup>3</sup>';

	var lastNum = sliceLastNumber(expression);
	var pow3 = 'Math.pow('+lastNum+',3)';
	var indexLastNum = expression.lastIndexOf(lastNum);
	expression = expression.split('');
	expression.splice(indexLastNum,lastNum.length,pow3) ;
	expression = expression.join('');
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

		expression = expression.slice(0,-3);
		var lastNum = sliceLastNumber(expression);
		expression = expression.slice(0,expression.length - 9 -lastNum.length) + lastNum;
	}
	else if(convertString.endsWith('<sup>3</sup>')){
		convertString = convertString.slice(0,-12);
		elementDisplayResult.innerHTML = convertString;
		expression = expression.slice(0,-3);
		var lastNum = sliceLastNumber(expression);
		expression = expression.slice(0,expression.length - 9 -lastNum.length) + lastNum;
	}
	else if(convertString.endsWith('!')){
		convertString = convertString.slice(0,-1);
		elementDisplayResult.innerHTML = convertString;

		expression = expression.slice(0,-1);
		var lastNum = sliceLastNumber(expression);
		expression = expression.slice(0,expression.length - 10 -lastNum.length) + lastNum;
	}
	else if(convertString.length == 2 && convertString.includes('=')){
		convertString = '';
		elementDisplayResult.innerHTML = convertString;
	}
	else if(convertString.endsWith('√(')){
		convertString = convertString.slice(0,-2);
		elementDisplayResult.innerHTML = convertString;
		expression = expression.slice(0,-10);
	}
	else{
		convertString = convertString.slice(0,-1);
		elementDisplayResult.innerHTML = convertString;
		expression = expression.slice(0,-1);
	}
		
		
	
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

var pressElements = document.getElementsByClassName('btn');
for(let i = 0;i < pressElements.length;i++){
	pressElements[i].addEventListener('click',function(){
		setTimeout(function(){
			if(pressElements[i].getAttribute('class').includes('btn-spec'))
				pressElements[i].setAttribute('class','btn press btn-spec');
			else
				pressElements[i].setAttribute('class','btn press');
		},0);
		if(pressElements[i].getAttribute('class').includes('btn-spec'))
			pressElements[i].setAttribute('class','btn btn-spec');
		else
			pressElements[i].setAttribute('class','btn');
	});
}