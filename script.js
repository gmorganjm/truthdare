function validateForm()
	{
	var x=document.forms["userForm"]["firstname"].value;
		if (x==null || x=="")
		{
			alert("First name cannot be blank");
			return false;
		}
	var x=document.forms["userForm"]["lastname"].value;
		if (x==null || x=="")
		{
			alert("Last name cannot be blank")
			return false;
		}
	var x=document.forms["userForm"]["inemail"].value;
		if (x==null || x=="")
		{
			alert("Instigator's email address cannot be blank")
			return false;
		}
	var x=document.forms["userForm"]["vicemail"].value;
		if (x==null || x=="")
			{
				alert("Victim's email address cannot be blank")
				return false;
			}
	var x=document.forms["userForm"]["age"].value;
		if (x < 1 || x==null || x=="")
			{
				alert("Instigator's age is invalid.")
				return false;
			}
	var x=document.forms["userForm"]["weight"].value;
		if (x < 1 || x==null || x=="")
			{
				alert("Instigator's weight is invalid.")
				return false;
			}
	var x=document.forms["userForm"]["height"].value;
		if (x < 1 || x==null || x=="")
			{
				alert("Instigator's height is invalid or not entered correctly.")
				return false;
			}
	var x=document.forms["userForm"]["date"].value;
		if (x==null || x=="")
		{
			alert("Please enter the date correctly.")
			return false;
		}
	var destCount = document.forms["userForm"]["dare[]"].length;
	var destSel   = false;
	for(i = 0; i < destCount; i++)
	{
		if(document.forms["userForm"]["dare[]"][i].checked)
		{
		destSel = true;
		break;
		}
	}
	if(!destSel)
		{
		alert('Select one or more dares');
		}
		return destSel;
	}
			
function calculateBmi() 
		{
		var weight = document.userForm.weight.value;
		var height = document.userForm.height.value;
		var weightUnits = document.userForm.weightUnits.value;
		if (weightUnits=="lb")
		{
			weight=weight*0.45359237;
		}			
		if (weight > 0 && height > 0)
		{	
		var finalBmi = weight/=Math.pow(height,2);
		document.userForm.bmi.value = finalBmi.toFixed(1);
		
		if(finalBmi < 18.5)
		{
			document.userForm.output.value = "Underweight";
		}
		
		if(finalBmi >= 18.5 && finalBmi <=24.9)
		{
			document.userForm.output.value = "Healthy weight";
		}
		
		if(finalBmi >= 25 && finalBmi <=29.9)
		{
			document.userForm.output.value = "Overweight";
		}
		if(finalBmi >= 30 && finalBmi <=34.9)
		{
			document.userForm.output.value = "Class I obesity";
		}
		if(finalBmi >= 35 && finalBmi <=39.9)
		{
			document.userForm.output.value = "Class II obesity";
		}
		if(finalBmi >= 40)
		{
			document.userForm.output.value = "Class III obesity";
		}
		}
		else
		{
		alert("Please enter weight and height correctly")
		}
		}