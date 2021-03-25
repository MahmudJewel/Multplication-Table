/*  i)DOM selection
	ii)Create Event
	iii)validation
	iv) Operation
*/

//Start DOM Selection
const inpt=document.querySelector("#input");
const btn=document.querySelector("#btn");
const result=document.querySelector("#result");
//End DOM selection

let temp=0;

btn.addEventListener('click', multiplication_table);

function multiplication_table(){

	//Validation
	if (inpt.value=='') {
		alert("Please enter a number");
	}
	

	else
	{
		//Clear the input and result area.
		let v=inpt.value;
		result.innerHTML="";
		inpt.value="";

		let head=document.createElement("h1");
		head.innerHTML="Multiplication Table of "+v+" is";
		result.appendChild(head);

		for(let i=1; i<=10; i++)
			{
				let elem=document.createElement("h2");
				let st=''+i+' * '+v+' = '+v*i;
				elem.innerHTML=(st);
				result.appendChild(elem);
				//console.log(st);
			}
		result.style.backgroundColor="#e0ebeb";
		console.log(v.type);
		
	}
};

//for enter key
/*inpt.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
   btn.click();
  }
});
*/

inpt.addEventListener("keyup", function(e){
	if(e.keyCode==13)
		btn.click();
});