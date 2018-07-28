/*---------------------- Primary Stats ------------------------ */
var 
sTotal,
pTotal,
eTotal,
cTotal,
iTotal,
aTotal,
lTotal,
charLevel;

$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
  }); /*Jquery that disables key presses for inputs of type number*/

$("[type='number']").keydown(function (e) {
  var key = e.keyCode || e.charCode;
  if (key == 8 || key == 46) {
      e.preventDefault();
      e.stopPropagation();
  }
}); /*Jquery that disables del/backspace use for inputs of type number*/

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

	charLevel = document.getElementById('level').value;
}

/*---------------------- Secondary Stats ------------------------ */

document.addEventListener("input", function(){
    baseHealthTotal = 3 * eTotal + +(20 + sTotal) + (5 + 2*eTotal) * (charLevel - 1) ;
    if (eTotal > 0 && sTotal > 0) {
    	document.getElementById('baseHealth').value = baseHealthTotal;
    }else {
    	document.getElementById('baseHealth').value = 0;
    } /*---- Base Health Calc ----*/

    baseSkillsTotal = (5 + 2*iTotal) * (charLevel - 1) ;
    if (iTotal > 0) {
    	document.getElementById('baseSkillPts').value = baseSkillsTotal;
    }else {
    	document.getElementById('baseSkillPts').value = 0;
    }/*---- Skill Pts Calc HERE ----*/
    
    baseApTotal = Math.floor(0.5 * aTotal + 5);
    if (aTotal > 0 && aTotal < 10) {
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
    if (eTotal > 0) {
    	document.getElementById('basePoisonRes').value = basePoisonResTotal;
    	document.getElementById('baseRadRes').value = baseRadResTotal;
    }else {
    	document.getElementById('basePoisonRes').value = 0;
    	document.getElementById('baseRadRes').value = 0;
    }/*---- Base Poison/Rad Resist Calc ----*/

    /*---- Base Electricity Resist Calc (race/items required)----*/

    /*---- Base Gas Resist Calc (items required)----*/

    baseSequenceTotal = pTotal * 2;
    if (pTotal > 0) {
    	document.getElementById('baseSequence').value = baseSequenceTotal;
    }else {
    	document.getElementById('baseSequence').value = 0;
    }/*---- Base Sequence Calc ----*/

    baseHealTotal = Math.floor(0.33 * eTotal);
    if (eTotal > 0) {
    	document.getElementById('baseHeal').value = baseHealTotal;
    }else {
    	document.getElementById('baseHeal').value = 0;
    }/*---- Base Heal Rate Calc ----*/

    if (lTotal > 0) {
    	document.getElementById('baseCrit').value = lTotal;
    }else {
    	document.getElementById('baseCrit').value = 0;
    }/*---- Base Crit Calc ----*/

    baseImpEndTotal =  10 * (eTotal + iTotal);
    if (eTotal > 0 || iTotal > 0) {
    	document.getElementById('baseImpEnd').value = baseImpEndTotal;
    }else {
    	document.getElementById('baseImpEnd').value = 0;
    }/*---- Base ImpEnd Calc ----*/

    /*---------------------------------- SKILLS PART --------------------------------------*/
    /*------------------------------*/
    /*---- Base Skills1 Section ----*/
    /*------------------------------*/
	basePistolsTotal =  5 + (4 * aTotal);
    if (aTotal > 0) {
    	document.getElementById('basePistolSkill').value = basePistolsTotal;
    }else {
    	document.getElementById('basePistolSkill').value = 0;
    }/*---- Base Pistol Skill Calc ----*/ 

    baseSMGTotal =  5 + 3 * aTotal + sTotal;
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('baseSMGSkill').value = baseSMGTotal;
    }else {
    	document.getElementById('baseSMGSkill').value = 0;
    }/*---- Base SMG Skill Calc ----*/    

    baseARTotal =  2 * (pTotal + aTotal);
    if (pTotal > 0 && aTotal > 0) {
    	document.getElementById('baseARSkill').value = baseARTotal;
    }else {
    	document.getElementById('baseARSkill').value = 0;
    }/*---- Base Assault Rifle Skill Calc ----*/    

    basePrimTotal =  (2 * aTotal) + (3 * sTotal);
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('basePrimSkill').value = basePrimTotal;
    }else {
    	document.getElementById('basePrimSkill').value = 0;
    }/*---- Base Prim. Missile Weap Skill Calc ----*/    

    baseThrowingTotal =  5 + (4 * aTotal);
    if (aTotal > 0) {
    	document.getElementById('baseThrowSkill').value = baseThrowingTotal;
    }else {
    	document.getElementById('baseThrowSkill').value = 0;
    }/*---- Base Throwing Skill Calc ----*/    

    baseRifleTotal =  (4 * pTotal);
    if (pTotal > 0) {
    	document.getElementById('baseRifleSkill').value = baseRifleTotal;
    }else {
    	document.getElementById('baseRifleSkill').value = 0;
    }/*---- Base Rifle Skill Calc ----*/    

    baseShotgunTotal =  3 * (sTotal + aTotal);
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('baseShotgunSkill').value = baseShotgunTotal;
    }else {
    	document.getElementById('baseShotgunSkill').value = 0;
    }/*---- Base Shotgun Skill Calc ----*/  

    baseMGTotal =  10 + (4 * sTotal);
    if (sTotal > 0) {
    	document.getElementById('baseMgSkill').value = baseMGTotal;
    }else {
    	document.getElementById('baseMgSkill').value = 0;
    }/*---- Base Machine Gun Skill Calc ----*/ 

    /*------------------------------*/
    /*---- Base Skills2 Section ----*/
    /*------------------------------*/ 
    baseGMLaunchTotal = (3 * sTotal) + aTotal;
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('baseG/MLaunchSkill').value = baseGMLaunchTotal;
    }else {
    	document.getElementById('baseG/MLaunchSkill').value = 0;
    }/*---- Base Grenade/Missile Launcher Skill Calc ----*/ 

    baseMortarsTotal = 10 + (sTotal + iTotal) * 2;
    if (sTotal > 0 && iTotal > 0) {
    	document.getElementById('baseMortarSkill').value = baseMortarsTotal;
    }else {
    	document.getElementById('baseMortarSkill').value = 0;
    }/*---- Base Mortars Skill Calc ----*/    

    baseFThrowerTotal = (4 * eTotal) + sTotal;
    if (eTotal > 0 && sTotal > 0) {
    	document.getElementById('baseFThrowerSkill').value = baseFThrowerTotal;
    }else {
    	document.getElementById('baseFThrowerSkill').value = 0;
    }/*---- Base Flame Throwers Skill Calc ----*/    

    baseEPistolTotal = (2 * aTotal) + (iTotal * 2);
    if (aTotal > 0 && iTotal > 0) {
    	document.getElementById('baseEPistolSkill').value = baseEPistolTotal;
    }else {
    	document.getElementById('baseEPistolSkill').value = 0;
    }/*---- Base Energy Pistols Skill Calc ----*/

    baseERifleTotal = (2 * pTotal) + (iTotal * 2);
    if (pTotal > 0 && iTotal > 0) {
    	document.getElementById('baseERifleSkill').value = baseERifleTotal;
    }else {
    	document.getElementById('baseERifleSkill').value = 0;
    }/*---- Base Energy Rifles Skill Calc ----*/    
       
    baseBEWeapTotal = (2 * sTotal) + (iTotal * 2);
    if (sTotal > 0 && iTotal > 0) {
    	document.getElementById('baseBEWeapSkill').value = baseBEWeapTotal;
    }else {
    	document.getElementById('baseBEWeapSkill').value = 0;
    }/*---- Base Big Energy Weapons Skill Calc ----*/    

    baseMeleeTotal =  15 + aTotal + (sTotal * 3);
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('baseMeleeSkill').value = baseMeleeTotal;
    }else {
    	document.getElementById('baseMeleeSkill').value = 0;
    }/*---- Base Melee Skill Calc ----*/  

    baseUnarmedTotal =  20 + (aTotal * 3) + sTotal ;
    if (aTotal > 0 && sTotal > 0) {
    	document.getElementById('baseUnarmedSkill').value = baseUnarmedTotal;
    }else {
    	document.getElementById('baseUnarmedSkill').value = 0;
    }/*---- Base Unarmed Skill Calc ----*/   

    /*------------------------------*/
    /*---- Base Skills3 Section ----*/
    /*------------------------------*/ 
    baseDoctorTotal = 5 + pTotal + iTotal;
    if (pTotal > 0 && iTotal > 0) {
    	document.getElementById('baseDoctorSkill').value = baseDoctorTotal;
    }else {
    	document.getElementById('baseDoctorSkill').value = 0;
    }/*---- Base Doctor Skill Calc ----*/ 

    baseFAidTotal = (pTotal + eTotal) * 2;
    if (pTotal > 0 && eTotal > 0) {
    	document.getElementById('baseFAidSkill').value = baseFAidTotal;
    }else {
    	document.getElementById('baseFAidSkill').value = 0;
    }/*---- Base First Aid Skill Calc ----*/    

    baseSneakTotal = 5 + (3 * aTotal);
    if (aTotal > 0) {
    	document.getElementById('baseSneakSkill').value = baseSneakTotal;
    }else {
    	document.getElementById('baseSneakSkill').value = 0;
    }/*---- Base Sneak Skill Calc ----*/    

    baseLockpickTotal = 10 + (pTotal + aTotal);
    if (pTotal > 0 && aTotal > 0) {
    	document.getElementById('baseLockpickSkill').value = baseLockpickTotal;
    }else {
    	document.getElementById('baseLockpickSkill').value = 0;
    }/*---- Base Lockpicking Skill Calc ----*/

    baseStealingTotal = 5 + (pTotal + aTotal * 2);
    if (pTotal > 0 && aTotal > 0) {
    	document.getElementById('baseStealSkill').value = baseStealingTotal;
    }else {
    	document.getElementById('baseStealSkill').value = 0;
    }/*---- Base Stealing Skill Calc ----*/    
       
    baseTMTotal = 10 + aTotal + iTotal;
    if (aTotal > 0 && iTotal > 0) {
    	document.getElementById('baseT/MSkill').value = baseTMTotal;
    }else {
    	document.getElementById('baseT/MSkill').value = 0;
    }/*---- Base Traps/Mines Skill Calc ----*/    

    baseScienceTotal = (4 * iTotal);
    if (iTotal > 0 ) {
    	document.getElementById('baseScienceSkill').value = baseScienceTotal;
    }else {
    	document.getElementById('baseScienceSkill').value = 0;
    }/*---- Base Science Skill Calc ----*/  

    baseRepairTotal =  sTotal + (iTotal * 3);
    if (sTotal > 0 && iTotal > 0) {
    	document.getElementById('baseRepairSkill').value = baseRepairTotal;
    }else {
    	document.getElementById('baseRepairSkill').value = 0;
    }/*---- Base Repair Skill Calc ----*/   

    /*------------------------------*/
    /*---- Base Skills4 Section ----*/
    /*------------------------------*/
    baseLandcraftTotal = (aTotal + pTotal) * 2;
    if (aTotal > 0 && pTotal > 0) {
    	document.getElementById('baseP,C/TSkill').value = baseLandcraftTotal;
    }else {
    	document.getElementById('baseP,C/TSkill').value = 0;
    }/*---- Base Pilot, Car/Truck Skill Calc ----*/ 

    baseWatercraftTotal = 5 + (pTotal * 3);
    if (pTotal > 0) {
    	document.getElementById('baseP,WSkill').value = baseWatercraftTotal;
    }else {
    	document.getElementById('baseP,WSkill').value = 0;
    }/*---- Base Pilot, Watercraft Skill Calc ----*/    

    baseAircraftTotal = (iTotal + pTotal) * 2;
    if (iTotal > 0 && pTotal > 0) {
    	document.getElementById('baseP,ASkill').value = baseAircraftTotal;
    }else {
    	document.getElementById('baseP,ASkill').value = 0;
    }/*---- Base Pilot, Aircraft Skill Calc ----*/    

    baseAPCTankTotal = (sTotal + pTotal) * 2;
    if (sTotal > 0 && pTotal > 0) {
    	document.getElementById('baseP,APC/TSkill').value = baseAPCTankTotal;
    }else {
    	document.getElementById('baseP,APC/TSkill').value = 0;
    }/*---- Base Pilot, APC/Tank Skill Calc ----*/

    baseSpeechTotal = cTotal * 5;
    if (cTotal > 0) {
    	document.getElementById('baseSpeechSkill').value = baseSpeechTotal;
    }else {
    	document.getElementById('baseSpeechSkill').value = 0;
    }/*---- Base Speech Skill Calc ----*/    
       
    baseBarterTotal = cTotal * 4;
    if (cTotal > 0) {
    	document.getElementById('baseBarterSkill').value = baseBarterTotal;
    }else {
    	document.getElementById('baseBarterSkill').value = 0;
    }/*---- Base Barter Skill Calc ----*/    

    baseGamblingTotal = (lTotal * 4);
    if (lTotal > 0) {
    	document.getElementById('baseGamblingSkill').value = baseGamblingTotal;
    }else {
    	document.getElementById('baseGamblingSkill').value = 0;
    }/*---- Base Gambling Skill Calc ----*/  

    baseSurvivalTotal = (eTotal + iTotal) * 2;
    if (eTotal > 0 && iTotal > 0) {
    	document.getElementById('baseSurvivalSkill').value = baseSurvivalTotal;
    }else {
    	document.getElementById('baseSurvivalSkill').value = 0;
    }/*---- Base Survivalist Skill Calc ----*/

    baseTrackingTotal = (eTotal + lTotal) * 3;
    if (eTotal > 0 && lTotal > 0) {
    	document.getElementById('baseTrackSkill').value = baseTrackingTotal;
    }else {
    	document.getElementById('baseTrackSkill').value = 0;
    }/*---- Base Tracking Skill Calc ----*/



    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/


    let x = +document.getElementById('basePistolSkill').value;
    let y = +document.getElementById('spentPistolSkill').value;
    let v = +document.getElementById('totalPistolSkill').value;
    let z = x + y;
    let Skillpointsremaining = -1;
    let Skillpointcost = 1;

    if (z <= 100) {
    	document.getElementById('totalPistolSkill').value = x + y;
        Skillpointsremaining = 0;
        v = +document.getElementById('totalPistolSkill').value;

   }else if (z > 200){
   		document.getElementById('totalPistolSkill').value = Math.floor((x + y)/6);
        Skillpointsremaining = y%6;
        v = +document.getElementById('totalPistolSkill').value;
	
   }else if (z > 100 && z <= 200){

        Skillpointsremaining = y;

        while(y > 0) {
        	
            Skillpointcost = Math.ceil(((z-100)/25) + 1);
            console.log(Skillpointcost + " " + Skillpointsremaining);
            z = z+1;
            y = y - Skillpointcost;
            document.getElementById('spentPistolSkill').value = +document.getElementById('spentPistolSkill').value + +Skillpointcost;

            if(y > 0){
             Skillpointsremaining = y;
             document.getElementById('totalPistolSkill').value = z;

            }else{
                document.getElementById('totalPistolSkill').value = z;
            }

        }
    }
/*
    let x = +document.getElementById('basePistolSkill').value;
    let y = +document.getElementById('spentPistolSkill').value;
    let z = x + y;

    if (z <= 100) {
    	document.getElementById('totalPistolSkill').value = x + y;
    }else if (z > 100 && z <= 125){
    	baseZ = 100 - x; /*to get base skill

    	console.log(trueZ)


    	document.getElementById('totalPistolSkill').value = x + y;


    }
    
    */




    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/
    /*---- In Progress (testing) ----*/

});