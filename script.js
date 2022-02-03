function compute()
{
    let a=document.getElementById("amount").value;
	let b=document.getElementById("myRange").value;
	let c=document.getElementById("sel").value;
	if(a>0){
	let d=(a*b*c)/100;
	let e=parseInt(c)+2020;
	document.getElementById("simple").innerHTML="If you deposit".concat(" ",a)+","+"<br>"+"at an interest rate of".concat(" ",b)+"%"+"."+"<br>"+"you will recieve an amount".concat(" ",d)+","+"<br>"+"in the year of".concat(" ",e);
	}
	else{
		alert("enter the positive number");
	}
}
