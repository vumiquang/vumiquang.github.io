var elementDisplayHistory = $('#history-content');
var elementDisplayResult = $('#result-content');
var expression ='';



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


$('#btn-fac').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '!');
		var lastNum = sliceLastNumber(expression);
		var fac = 'factorial('+lastNum+')';
		var indexLastNum = expression.lastIndexOf(lastNum);
		expression = expression.split('');
		expression.splice(indexLastNum,lastNum.length,fac) ;
		expression = expression.join('');
	}
	//add more
});

$('#btn-sqrt').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
	elementDisplayResult.html( textCurrent + '&#8730;(');
	
	expression += 'Math.sqrt(';
	}
	//add more
});

$('#btn-square').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '<sup>2</sup>');

	var lastNum = sliceLastNumber(expression);
	var pow2 = Math.pow(Number(lastNum),2);
	var indexLastNum = expression.lastIndexOf(lastNum);
	expression = expression.split('');
	expression.splice(indexLastNum,lastNum.length,pow2) ;
	expression = expression.join('');
	}
	//add more
});

$('#btn-pow-3').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '<sup>3</sup>');
	var lastNum = sliceLastNumber(expression);
	var pow3 = Math.pow(Number(lastNum),3);
	var indexLastNum = expression.lastIndexOf(lastNum);
	expression = expression.split('');
	expression.splice(indexLastNum,lastNum.length,pow3) ;
	expression = expression.join('');
	}
	//add more
});

$('#btn-ngoac-trai').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '(');
	expression += '(';
	}
});

$('#btn-ngoac-phai').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + ')');
	expression += ')';
	}
});
$('#btn-backspace').click(function(){
	let convertString =String(elementDisplayResult.html());
	if(convertString.endsWith('<sup>2</sup>')){
		convertString = convertString.slice(0,-12);
		elementDisplayResult.html(convertString);

		var lastNum = sliceLastNumber(expression);
		var sqrtNum = Math.pow(Number(lastNum),1/2);
		var indexLastNum = expression.lastIndexOf(lastNum);
		expression = expression.split('');
		expression.splice(indexLastNum,lastNum.length,String(sqrtNum));
		expression = expression.join('');
		
	}
	else if(convertString.endsWith('<sup>3</sup>')){
		convertString = convertString.slice(0,-12);
		elementDisplayResult.html(convertString);
		
		var lastNum = sliceLastNumber(expression);
		var cbrtNum = Math.pow(Number(lastNum),1/3);
		var indexLastNum = expression.lastIndexOf(lastNum);
		expression = expression.split('');
		expression.splice(indexLastNum,lastNum.length,String(cbrtNum));
		expression = expression.join('');
		
	}
	else if(convertString.endsWith('!')){
		convertString = convertString.slice(0,-1);
		elementDisplayResult.html(convertString);

		expression = expression.slice(0,-1);
		var lastNum = sliceLastNumber(expression);
		expression = expression.slice(0,expression.length - 10 -lastNum.length) + lastNum;
	}
	else if(convertString.length == 2 && convertString.includes('=')){
		convertString = '';
		elementDisplayResult.html(convertString);
	}
	else if(convertString.endsWith('√(')){
		convertString = convertString.slice(0,-2);
		elementDisplayResult.html(convertString);
		expression = expression.slice(0,-10);
	}
	else if(convertString == "Math Error"){
		convertString = "";
		elementDisplayResult.html(convertString);
	}

	else{
		convertString = convertString.slice(0,-1);
		elementDisplayResult.html(convertString);
		expression = expression.slice(0,-1);
	}
		
		
	
});
$('#btn-clear').click(function(){
	elementDisplayResult.html('');
	expression = '';
	elementDisplayHistory.html('');
});
$('#btn-7').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '7');
	expression += '7';
	}
});
$('#btn-8').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '8');
	expression += '8';
}
});
$('#btn-9').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '9');
	expression += '9';
}
});
$('#btn-0').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '0');
	expression += '0';
}
});
$('#btn-1').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '1');
	expression += '1';
}
});
$('#btn-2').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
elementDisplayResult.html( textCurrent + '2');
	expression += '2';
}
});
$('#btn-3').click(function(){
	if(elementDisplayResult.text().length < 19){
	let textCurrent = elementDisplayResult.html();
	elementDisplayResult.html( textCurrent + '3');
	expression += '3';
}
});
$('#btn-4').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '4');
		expression += '4';
}
});
$('#btn-5').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '5');
		expression += '5';
}
});
$('#btn-6').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '6');
		expression += '6';
}
});
$('#btn-dot').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '.');
		expression += '.';
}
});
$('#btn-add').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '+');
		expression += '+';
}
});
$('#btn-sub').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '-');
		expression += '-';
}
});
$('#btn-mul').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
	elementDisplayResult.html( textCurrent + '&#215;');
	expression += '*';
}
});
$('#btn-div').click(function(){
	if(elementDisplayResult.text().length < 19){
		let textCurrent = elementDisplayResult.html();
		elementDisplayResult.html( textCurrent + '&#247;');
	expression += '/';
}
});


$('#btn-equal').click(function(){
	try {
 		var equal = eval(expression);
		if(equal.toString().length > 16){
		equal = equal.toPrecision(14); 
		}
		expression = equal.toString();
		elementDisplayHistory.html(elementDisplayResult.html());
		elementDisplayResult.html(equal);
	}
	catch(err) {
		expression = '';
 		equal = 'Math Error';
 		elementDisplayHistory.html(elementDisplayResult.html()) ;
		elementDisplayResult.html(equal);
	}
});

