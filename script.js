
// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = [30,30,30,30,30,30,30,30,30,30,30,30];
function ageCalc()
 {	
	let today = new Date(document.getElementById("returndate").value);
	let inputDate = new Date(document.getElementById("date").value);
	let intrestMonth, intrestDate, intrestYear;
	let intrestDetails = {
		date: inputDate.getDate(),
		month: inputDate.getMonth() + 1,
		year: inputDate.getFullYear()
	}
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth() + 1;
	let currentDay = today.getDate();
	var amount= parseInt(document.getElementById("amount").value);
	var intrest= document.getElementById("intrest").value;
	var over_all_intrest =0;
	// leapChecker(currentYear);


	if (intrestDetails.year > currentYear || (intrestDetails.month > currentMonth && intrestDetails.year == currentYear) ||
		(intrestDetails.date > currentDay && intrestDetails.month == currentMonth && intrestDetails.year == currentYear)) {
		alert("Enter Valid Date");

	}
	intrestYear = currentYear - intrestDetails.year;
	if (currentMonth >= intrestDetails.month) {
		intrestMonth = currentMonth - intrestDetails.month;
	} else {
		intrestYear--;
		intrestMonth = 12 + currentMonth - intrestDetails.month;
	}
	if (currentDay >= intrestDetails.date) {
		intrestDate = currentDay - intrestDetails.date;

	} else {
		intrestMonth--;
		let days = months[currentMonth - 2];
		intrestDate = days + currentDay - intrestDetails.date;
		if (intrestMonth < 0) {
			intrestMonth = 11;
			intrestYear--;
		}

	}

	// calculator
	if (intrestYear==0)
	{
		var days=(intrestMonth*30)+intrestDate;
			var dayintrest=(amount/100*intrest)/30;
			over_all_intrest+=days*dayintrest;
			amount+=days*dayintrest;
			console.log(amount);
			console.log(over_all_intrest);

	}
	else{

	for(i=intrestYear; i>=0;i--){
		if(i>1){
		
			over_all_intrest+=(amount/100)* intrest * 12;
			amount+=(amount/100)* intrest * 12;
			console.log(amount);
			console.log(over_all_intrest);
			console.log(i);

	}
	else if (i ==1 && intrestMonth==0) {
				var days=(360)+intrestDate;
				var dayintrest=((amount/100)*intrest)/30;
				over_all_intrest+=days*dayintrest;
				amount+=days*dayintrest;
				console.log(amount);
			console.log(over_all_intrest);
			console.log(i);

	}

	else if (i ==1 && intrestMonth>=1) {
		
			over_all_intrest+=(amount/100)* intrest * 12;
			amount+=(amount/100)* intrest * 12;
			console.log(amount);
			console.log(over_all_intrest);
			console.log(i);
			
		}

		else if (i==0 && intrestMonth>=1){
			var days=(intrestMonth*30)+intrestDate;
			var dayintrest=((amount/100)*intrest)/30;
			over_all_intrest+=days*dayintrest;
			amount+=days*dayintrest;
			console.log(amount);
			console.log(over_all_intrest);
			console.log(i);
		}
	}
	}
	display(intrestDate, intrestMonth, intrestYear,over_all_intrest,amount);

	
}

function display(bdate, bmonth, byear,over_all_intrest,amount) {
	
	document.getElementById("years").textContent = byear;
	document.getElementById("months").textContent = bmonth;
	document.getElementById("days").textContent = bdate;
	document.getElementById("intrestamount").textContent = over_all_intrest;
	document.getElementById("total").textContent = amount ;
	
}





// function leapChecker(year) 

// {
// 	if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
// 		months[1] = 29;
// 	} else {
// 		months[1] = 28;
// 	}





// }

// function intrestcalc(intrestDate, intrestMonth, intrestYear){
	
// 	if(intrestYear>1){
		
// 		over_all_intrest+=(amount/100)* inrest) * 12;
// 		amount+=parseFloat(over_all_intrest);
// 		return intrestcalc(inputDate,intrestMonth,intrestYear-1);

// 	}

// 	else if (intrestYear ==1 && intrestMonth==0) {
// 		var days=(360)+intrestDate;
// 		dayintrest=(amount/100*intrest)/30;
// 		over_all_intrest+=days*dayintrest;
// 		amount+=parseFloat(over_all_intrest);
// 		return intrestcalc(inputDate-inputDate,intrestMonth-intrestMonth,intrestYear-intrestYear);
// 		}
// 	else if (intrestYear ==1 && intrestMonth>=1) {
		
// 		over_all_intrest+=parseFloat((amount/100)* intrest) * 12;
// 		amount+=parseFloat(over_all_intrest);
// 		return intrestcalc(inputDate,intrestMonth,intrestYear-1);
// 	}	

		
	
// 	else if(intrestYear==0 &&  intrestMonth>=1){
// 		var days=(intrestMonth*30)+intrestDate;
// 		dayintrest=(amount/100*intrest)/30;
// 		over_all_intrest+=days*dayintrest;
// 		amount+=parseFloat(over_all_intrest);
// 		return intrestcalc(inputDate-inputDate,intrestMonth-intrestMonth,intrestYear);
// 	}
// 	else{
// 		return over_all_intrest;
// 	}
	
	
// }


// // unwanted

// 	//calculator
// 	let over_all_intrest=0
// 	let days=0
// 	let daysintrest=0
// 	let dayintrest=0
// 	let annualIntrest
// 	if(intrestYear >1 && intrestMonth>1)
// 	{
// 		for(i=0; i<intrestYear-1;i++) {
				
// 			annualIntrest=(amount/100)*intrest*12;
// 			over_all_intrest=parseFloat(over_all_intrest)+parseFloat(annualIntrest)
// 			amount=parseFloat(amount)+parseFloat(annualIntrest);

// 	}

	
// 	days=intrestMonth *30 + intrestDate;
// 	dayintrest=((amount/100)*intrest) /30;
// 	daysintrest=days*dayintrest;
// 	amount= parseFloat(amount)+parseFloat(daysintrest);
// 	over_all_intrest=parseFloat(over_all_intrest)+parseFloat(daysintrest);
// }

// else if(intrestMonth<=3 &&  intrestYear==1){


	
// 	days=(12+intrestMonth) *30 + intrestDate;
	
// 	dayintrest=((amount/100)*intrest) /30;
// 	daysintrest=days*dayintrest;
// 	amount= parseFloat(amount)+ parseFloat(daysintrest);
// 	over_all_intrest=parseFloat(over_all_intrest)+parseFloat(daysintrest);
	
	
// }
// // else 
// else{

	
// 	days=(intrestMonth) *30 + intrestDate;
	
// 	dayintrest=((amount/100)*intrest) /30;
// 	daysintrest=days*dayintrest;
// 	amount= parseFloat(amount)+ parseFloat(daysintrest);
// 	over_all_intrest=parseFloat(over_all_intrest)+parseFloat(daysintrest);
	
	
// }
	

// 	// over_all_intrest=intrestcalc(intrestDate, intrestMonth, intrestYear);
