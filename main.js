/*---------------------- Primary Stats ------------------------ */
var 
sTotal,
pTotal,
eTotal,
cTotal,
iTotal,
aTotal,
lTotal;

function findTotal(){
    var arr = document.getElementsByName('qtyBase');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').innerHTML = tot;
    
    if (tot > 40 && tot <= 47){
    	document.getElementById('total').style.color = '#ffbf35';
    	document.getElementById('total').style.fontWeight = '400';
    }else if (tot > 47){
    	document.getElementById('total').style.color = 'red';
    	document.getElementById('total').style.fontWeight = '900';
    }else if (tot <= 40){
    	document.getElementById('total').style.color = 'black';
    	document.getElementById('total').style.fontWeight = '400';
    }
    
}

function statTotals(){
	sTotal = +document.getElementById('qtyBaseS').value + +document.getElementById('qtyModS').value;
	document.getElementById('qtyTotalS').value = sTotal;

	pTotal = +document.getElementById('qtyBaseP').value + +document.getElementById('qtyModP').value;
	document.getElementById('qtyTotalP').value = pTotal;

	eTotal = +document.getElementById('qtyBaseE').value + +document.getElementById('qtyModE').value;
	document.getElementById('qtyTotalE').value = eTotal;

	cTotal = +document.getElementById('qtyBaseC').value + +document.getElementById('qtyModC').value;
	document.getElementById('qtyTotalC').value = cTotal;

	iTotal = +document.getElementById('qtyBaseI').value + +document.getElementById('qtyModI').value;
	document.getElementById('qtyTotalI').value = iTotal;

	aTotal = +document.getElementById('qtyBaseA').value + +document.getElementById('qtyModA').value;
	document.getElementById('qtyTotalA').value = aTotal;

	lTotal = +document.getElementById('qtyBaseL').value + +document.getElementById('qtyModL').value;
	document.getElementById('qtyTotalL').value = lTotal;
}

/*---------------------- Secondary Stats ------------------------ */

document.addEventListener("input", function(){
    baseHealthTotal = 3 * eTotal + +(20 + sTotal);
    if (eTotal == 0 && sTotal == 0) {
    	document.getElementById('baseHealth').value = 0;
    }else {
    	document.getElementById('baseHealth').value = baseHealthTotal;
    } /*---- Base Health Calc ----*/

    /*---- Skill Pts Calc HERE ----*/
    
    baseApTotal = Math.floor(0.5 * aTotal + 5);
    if (aTotal != 0 && aTotal < 10) {
    	document.getElementById('baseAP').value = baseApTotal;
    }else if (aTotal >= 10) {
    	document.getElementById('baseAP').value = aTotal;
    }else if (aTotal == 0) {
    	document.getElementById('baseAP').value = 0;
    } /*---- Base AP Calc ----*/
    
    baseWeightTotal = 25 * sTotal + 25;
    if (sTotal >= 1) {
    	document.getElementById('baseCarry').value = baseWeightTotal;
    }else {
    	document.getElementById('baseCarry').value = 0;
    } /*---- Base Weight Calc ----*/

    baseMeleeDTotal = sTotal - 5;
    if (baseMeleeDTotal <= 1 && sTotal != 0) {
    	document.getElementById('baseMeleeD').value = 1;
    }else if (baseMeleeDTotal > 1) {
    	document.getElementById('baseMeleeD').value = baseMeleeDTotal;
    }else if (sTotal == 0) {
    	document.getElementById('baseMeleeD').value = 0; 
    }/*---- Base Melee Damage Calc ----*/

    basePoisonResTotal = 5 * eTotal;
    baseRadResTotal = 2 * eTotal;
    if (eTotal != 0) {
    	document.getElementById('basePoisonRes').value = basePoisonResTotal;
    	document.getElementById('baseRadRes').value = baseRadResTotal;
    }else {
    	document.getElementById('basePoisonRes').value = 0;
    	document.getElementById('baseRadRes').value = 0;
    }/*---- Base Poison/Rad Resist Calc ----*/

    /*---- Base Electricity Resist Calc (race/items required)----*/

    /*---- Base Gas Resist Calc (items required)----*/

    baseSequenceTotal = pTotal * 2;
    if (pTotal != 0) {
    	document.getElementById('baseSequence').value = baseSequenceTotal;
    }else {
    	document.getElementById('baseSequence').value = 0;
    }/*---- Base Sequence Calc ----*/

    baseHealTotal = Math.floor(0.33 * eTotal);
    if (eTotal != 0) {
    	document.getElementById('baseHeal').value = baseHealTotal;
    }else {
    	document.getElementById('baseHeal').value = 0;
    }/*---- Base Heal Rate Calc ----*/

    document.getElementById('baseCrit').value = aTotal;
    /*---- Base Crit Calc ----*/

    baseImpEndTotal =  10 * (eTotal + iTotal);
    if (eTotal != 0 || iTotal != 0) {
    	document.getElementById('baseImpEnd').value = baseImpEndTotal;
    }else {
    	document.getElementById('baseImpEnd').value = 0;
    }/*---- Base ImpEnd Calc ----*/

});