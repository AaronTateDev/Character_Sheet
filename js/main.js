/*---------------------- Primary Stats ------------------------ */
var 
sTotal, 
pTotal, 
eTotal, 
cTotal, 
iTotal, 
aTotal, 
lTotal,
charLevel, 
skillPtMod,
skillPtTotal,
taggedSkills,
supMutantRacialSkill;

var 
tagMax = 3,
tagNum = 0; //Sets max number of tags (not currently implemented)
var tagColor = 'rgb(135, 182, 219)'; /*'rgb(255, 96, 96)'; color of skill tag highlight*/

var skillPtBase = document.getElementById('baseSkillPts');
var skillPtMod = document.getElementById('modSkillPts');
var skillPtTotal = document.getElementById('totalSkillPts');
var skillsPerLvlBonus = 0;
var healthPerLvlBonus = 0;

$("[type='number']").not("[name='dmg']").keypress(function (evt) {
    evt.preventDefault();
  }); /*Jquery that disables key presses for inputs of type number*/

$("[type='number']").not("[name='dmg']").keydown(function (e) {
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
	sTotal = +document.getElementById('qtyBaseS').value + +document.getElementById('qtyModS').value + stBonus;
	document.getElementById('qtyTotalS').value = sTotal;

	pTotal = +document.getElementById('qtyBaseP').value + +document.getElementById('qtyModP').value + peBonus;
	document.getElementById('qtyTotalP').value = pTotal;

	eTotal = +document.getElementById('qtyBaseE').value + +document.getElementById('qtyModE').value;
	document.getElementById('qtyTotalE').value = eTotal;

	cTotal = +document.getElementById('qtyBaseC').value + +document.getElementById('qtyModC').value;
	document.getElementById('qtyTotalC').value = cTotal;

	iTotal = +document.getElementById('qtyBaseI').value + +document.getElementById('qtyModI').value;
	document.getElementById('qtyTotalI').value = iTotal;

	aTotal = +document.getElementById('qtyBaseA').value + +document.getElementById('qtyModA').value + agBonus;
	document.getElementById('qtyTotalA').value = aTotal;

	lTotal = +document.getElementById('qtyBaseL').value + +document.getElementById('qtyModL').value;
	document.getElementById('qtyTotalL').value = lTotal;

	charLevel = document.getElementById('level').value;

    if (event.target.id == 'qtyModS' || event.target.id == 'qtyBaseS' ) {
        if ((+document.getElementById('thrownMod').value + sTotal + 5) < document.getElementById('thrownWeight').value) {
            document.getElementById('thrownWeight').value = (+document.getElementById('thrownMod').value + sTotal + 5);
        }      
        
     thrownObject();
    }   
}

/*---------------------- Secondary Stats ------------------------ */

function secondaryStats() {
    if(document.getElementById('raceSelector').value == "Deathclaw" ||
       document.getElementById('raceSelector').value == "Deathclaw (Grey Tribe)" ||
       document.getElementById('raceSelector').value == "Super-Mutant"){
        healthPerLvlBonus = 2;
    }else {
        healthPerLvlBonus = 0;
    } /*Bonus Health Per Lvl*/ 

    baseHealthTotal = 3 * eTotal + +(20 + sTotal) + (5 + healthPerLvlBonus + 2*eTotal) * (charLevel - 1) ;
    if (eTotal > 0 && sTotal > 0) {
    	document.getElementById('baseHealth').value = baseHealthTotal;
    }else {
    	document.getElementById('baseHealth').value = 0;
    } /*---- Base Health Calc ----*/

    if(document.getElementById('raceSelector').value == "Andriod Humanoid Robot"){
        skillsPerLvlBonus = 3;
    }else {
        skillsPerLvlBonus = 0;
    } /*Additional Skill Pts*/ 

    baseSkillsTotal = (5 + skillsPerLvlBonus + 2*iTotal) * (charLevel - 1);
    if (iTotal > 0) {
    	document.getElementById('baseSkillPts').value = baseSkillsTotal;
    }else {
    	document.getElementById('baseSkillPts').value = 0;
    }/*---- Skill Pts Calc ----*/
    
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

    /*---- Electricity Resist Calc (from race&items)----*/

    /*---- Base Gas Resist Calc (items required)----*/

    baseSequenceTotal = pTotal * 2;
    if (pTotal > 0) {
    	document.getElementById('baseSequence').value = baseSequenceTotal;
    }else {
    	document.getElementById('baseSequence').value = 0;
    }/*---- Base Sequence Calc ----*/

    baseHealTotal = Math.floor(eTotal / 3);
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

    baseArmorTotal = aTotal + 8;
    if (aTotal > 0) {
        document.getElementById('baseArmor').value = baseArmorTotal;
    }else {
        document.getElementById('baseArmor').value = 0;        
    }/*---- Base Armor Calc ----*/

    /*------------------------------- */
    /*---- Secondary Stat(Totals) ----*/
    /*------------------------------- */
    if(healthPercentAdjust !== 0) {
        document.getElementById('totalHealth').value = Math.floor((+document.getElementById('modHealth').value +
        +document.getElementById('baseHealth').value) * healthPercentAdjust + healthFlatAdjust);
    }else {
        document.getElementById('totalHealth').value = +document.getElementById('modHealth').value +
        +document.getElementById('baseHealth').value + healthFlatAdjust;
    }/*---- Total Health Calc ----*/

    document.getElementById('totalSkillPts').value = document.getElementById('baseSkillPts').value -
    document.getElementById('modSkillPts').value;
    if(document.getElementById('totalSkillPts').value < 0){
        document.getElementById('totalSkillPts').style.color = 'red';
    }else if(document.getElementById('totalSkillPts').value >= 0){
        document.getElementById('totalSkillPts').style.color = 'black';        
    }/*---- Total Skill Pts Calc HERE ----*/
    
    document.getElementById('totalAP').value = +document.getElementById('modAP').value +
    +document.getElementById('baseAP').value;
    /*---- Total AP Calc ----*/
    
    document.getElementById('totalCarry').value = +document.getElementById('modCarry').value +
    +document.getElementById('baseCarry').value - (arWt + ugWt);
     /*---- Total Weight Calc ----*/

    if (event.target.id == 'modMeleeD') {
        thrownObject();
    }
    document.getElementById('totalMeleeD').value = +document.getElementById('modMeleeD').value +
    +document.getElementById('baseMeleeD').value;
    /*---- Total Melee Damage Calc ----*/

    totPoisonRes = +document.getElementById('modPoisonRes').value +
    +document.getElementById('basePoisonRes').value;
    document.getElementById('totalPoisonRes').value = totPoisonRes + ugPoisonResist + arPoisonResist ||
    totPoisonRes + ugPoisonResist || totPoisonRes;
    /*---- Total Poison Resist Calc ----*/
        
    totRadRes = +document.getElementById('modRadRes').value +
    +document.getElementById('baseRadRes').value;
    document.getElementById('totalRadRes').value = totRadRes + ugRR + arRR || totRadRes + ugRR || 
    totRadRes + arRR || totRadRes;
    /*---- Total Rad Resist Calc ----*/

    document.getElementById('totalElecRes').value = +document.getElementById('modElecRes').value +
    +document.getElementById('baseElecRes').value;
    /*---- Total Electricity Resist Calc (race/items required)----*/

    document.getElementById('totalGasRes').value = +document.getElementById('modGasRes').value +
    +document.getElementById('baseGasRes').value;
    /*---- Total Gas Resist Calc (items required)----*/

    document.getElementById('totalSequence').value = +document.getElementById('modSequence').value +
    +document.getElementById('baseSequence').value;
    /*---- Total Sequence Calc ----*/

    document.getElementById('totalHeal').value = +document.getElementById('modHeal').value +
    +document.getElementById('baseHeal').value;
    /*---- Total Heal Rate Calc ----*/

    document.getElementById('totalCrit').value = +document.getElementById('modCrit').value +
    +document.getElementById('baseCrit').value;
    /*---- Total Crit Calc ----*/

    document.getElementById('totalImpEnd').value = +document.getElementById('modImpEnd').value +
    +document.getElementById('baseImpEnd').value;
    /*---- Total ImpEnd Calc ----*/

    totAR = +document.getElementById('modArmor').value + +document.getElementById('baseArmor').value;
    document.getElementById('totalArmor').value = totAR + ugAC + arAC || totAR + ugAC || totAR;
    /*---- Total Armor Calc ----*/

    baseApSpoolTotal =  document.getElementById('totalAP').value / (30/document.getElementById('totalSequence').value);
    if (pTotal > 0 || aTotal > 0) {
        document.getElementById('baseApSpool').value = +baseApSpoolTotal.toFixed(1);
    }else {
        document.getElementById('baseApSpool').value = 0;        
    }/*---- Base AP Spool Calc ----*/

    document.getElementById('totalApSpool').value = +document.getElementById('modApSpool').value +
    +document.getElementById('baseApSpool').value;
    /*---- Total ImpEnd Calc ----*/

/*---------------------------------- RACIAL BONUSES SECTION ------------------------------*/
    supMutantRacialSkill = 0;
    if(document.getElementById('raceSelector').value == "Human"){
        document.getElementById('totalElecRes').value = +document.getElementById('modElecRes').value +
        +document.getElementById('baseElecRes').value + 30; //Electricity Resist
    }/*---- Human Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Ghoul"){
        document.getElementById('totalRadRes').value = +document.getElementById('modRadRes').value +
        +document.getElementById('baseRadRes').value + 80; //Radiation Resist
        document.getElementById('totalPoisonRes').value = +document.getElementById('modPoisonRes').value +
        +document.getElementById('basePoisonRes').value + 30; //Poison Resist
    }/*---- Ghoul Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Super-Mutant"){        
        document.getElementById('totalPoisonRes').value = +document.getElementById('modPoisonRes').value +
        +document.getElementById('basePoisonRes').value + 20; //Poison Resist
        document.getElementById('totalRadRes').value = +document.getElementById('modRadRes').value +
        +document.getElementById('baseRadRes').value + 50; //Radiation Resist        
        /* Extra health per level code located in Secondary Stats
        section under in Base health code*/
        supMutantRacialSkill = supMutantRacialSkill - 40; //Super-Mutant skill point reducer
    }/*---- Super-Mutant Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Half-Mutant"){
        document.getElementById('totalRadRes').value = +document.getElementById('modRadRes').value +
        +document.getElementById('baseRadRes').value + 15; //Radiation Resist
        document.getElementById('totalPoisonRes').value = +document.getElementById('modPoisonRes').value +
        +document.getElementById('basePoisonRes').value + 15; //Poison Resist
        document.getElementById('totalHealth').value = +document.getElementById('modHealth').value +
        +document.getElementById('baseHealth').value + 5; //Bonus Health 
    }/*---- Half-Mutant Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Deathclaw" ||
       document.getElementById('raceSelector').value == "Deathclaw (Grey Tribe)"){
        document.getElementById('totalGasRes').value = +document.getElementById('modGasRes').value +
        +document.getElementById('baseGasRes').value + 40; //Gas Resist
        document.getElementById('totalMeleeD').value = +document.getElementById('modMeleeD').value +
        +document.getElementById('baseMeleeD').value + 10; //Melee Damage Resist    
        /* Extra health per level code located in Secondary Stats
        section under in Base health code*/        
    }/*---- Deathclaw Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Dog"){
        document.getElementById('totalElecRes').value = +document.getElementById('modElecRes').value +
        +document.getElementById('baseElecRes').value + 50; //Electricity Resist
    }/*---- Dog Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Robot"){
        document.getElementById('totalRadRes').value = 1000; //Radiation Immunity
        document.getElementById('totalPoisonRes').value = 1000; //Poison Immunity
        document.getElementById('totalGasRes').value = 1000; //Gas Immunity
        //ADD the +40% DR
    }/*---- Robot Racial Bonuses ----*/

    if(document.getElementById('raceSelector').value == "Andriod Humanoid Robot"){
        document.getElementById('totalRadRes').value = +document.getElementById('modRadRes').value +
        +document.getElementById('baseRadRes').value + 80; //Radiation Resist 
        // Skill point increase code located in base skill pt per lvl section   
        //ADD the +25% DR
    }/*---- Andriod Humanoid Robot Racial Bonuses ----*/


/*---------------------------------- SKILLS SECTION --------------------------------------*/
    /*------------------------------*/
    /*---- Base Skills1 Section ----*/
    /*------------------------------*/
	basePistolsTotal =  5 + (4 * aTotal) + supMutantRacialSkill;
	basePi = document.getElementById('basePistolSkill');
    spendPi = document.getElementById('spendPistolSkill');
    if (basePi.parentElement.previousElementSibling.style.background == tagColor){
        basePistolsTotal =  5 + (4 * aTotal) + 20 + supMutantRacialSkill;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0) {
    	basePi.value = basePistolsTotal;
    	if (spendPi.min > basePi.value){
    		spendPi.value = spendPi.value - (spendPi.min - basePi.value);
    	}else if(spendPi.min < basePi.value) {
    		spendPi.value = +spendPi.value + (basePi.value - spendPi.min);
    	}

    	spendPi.min = basePistolsTotal;
    	spendPi.prevValue = spendPi.value;    	
    }else {
    	basePi.value = 0;
    }/*---- Base Pistol Skill Calc ----*/ 

    baseSMGTotal =  5 + 3 * aTotal + sTotal + supMutantRacialSkill;
    baseSMG = document.getElementById('baseSMGSkill');
    spendSMG = document.getElementById('spendSMGSkill');
    if (baseSMG.parentElement.previousElementSibling.style.background == tagColor){
        baseSMGTotal =  5 + 3 * aTotal + sTotal + 20 + supMutantRacialSkill;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	baseSMG.value = baseSMGTotal;
    	if (spendSMG.min > baseSMG.value){
    		spendSMG.value = spendSMG.value - (spendSMG.min - baseSMG.value);
    	}else if(spendSMG.min < baseSMG.value) {
    		spendSMG.value = +spendSMG.value + (baseSMG.value - spendSMG.min);
    	}

    	spendSMG.min = baseSMGTotal;
    	spendSMG.prevValue = spendSMG.value;    	
    }else {
    	baseSMG.value = 0;
    }/*---- Base SMG Skill Calc ----*/    

    baseARTotal =  2 * (pTotal + aTotal) + supMutantRacialSkill;
    baseAR = document.getElementById('baseARSkill');
    spendAR = document.getElementById('spendARSkill');
    if (baseAR.parentElement.previousElementSibling.style.background == tagColor){
        baseARTotal =  2 * (pTotal + aTotal) + 20 + supMutantRacialSkill;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && aTotal > 0) {
    	baseAR.value = baseARTotal;
    	if (spendAR.min > baseAR.value){
    		spendAR.value = spendAR.value - (spendAR.min - baseAR.value);
    	}else if(spendAR.min < baseAR.value) {
    		spendAR.value = +spendAR.value + (baseAR.value - spendAR.min);
    	}

    	spendAR.min = baseARTotal;
    	spendAR.prevValue = spendAR.value;    	
    }else {
    	baseAR.value = 0;
    }/*---- Base Assault Rifle Skill Calc ----*/    

    basePrimTotal =  (2 * aTotal) + (3 * sTotal);
    basePr = document.getElementById('basePrimSkill');
    spendPr = document.getElementById('spendPrimSkill');
    if (basePr.parentElement.previousElementSibling.style.background == tagColor){
        basePrimTotal =  (2 * aTotal) + (3 * sTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	basePr.value = basePrimTotal;
    	if (spendPr.min > basePr.value){
    		spendPr.value = spendPr.value - (spendPr.min - basePr.value);
    	}else if(spendPr.min < basePr.value) {
    		spendPr.value = +spendPr.value + (basePr.value - spendPr.min);
    	}

    	spendPr.min = basePrimTotal;
    	spendPr.prevValue = spendPr.value;    	
    }else {
    	basePr.value = 0;
    }/*---- Base Prim. Missile Weap Skill Calc ----*/    

    baseThrowingTotal =  5 + (4 * aTotal);
    baseTh = document.getElementById('baseThrowSkill');
    spendTh = document.getElementById('spendThrowSkill');
    if (baseTh.parentElement.previousElementSibling.style.background == tagColor){
        baseThrowingTotal =  5 + (4 * aTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0) {
    	baseTh.value = baseThrowingTotal;
    	if (spendTh.min > baseTh.value){
    		spendTh.value = spendTh.value - (spendTh.min - baseTh.value);
    	}else if(spendTh.min < baseTh.value) {
    		spendTh.value = +spendTh.value + (baseTh.value - spendTh.min);
    	}

    	spendTh.min = baseThrowingTotal;
    	spendTh.prevValue = spendTh.value;    	
    }else {
    	baseTh.value = 0;
    }/*---- Base Throwing Skill Calc ----*/    

    baseRifleTotal =  (4 * pTotal) + supMutantRacialSkill;
    baseRi = document.getElementById('baseRifleSkill');
    spendRi = document.getElementById('spendRifleSkill');
    if (baseRi.parentElement.previousElementSibling.style.background == tagColor){
        baseRifleTotal =  (4 * pTotal) + 20 + supMutantRacialSkill;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0) {
    	baseRi.value = baseRifleTotal;
    	if (spendRi.min > baseRi.value){
    		spendRi.value = spendRi.value - (spendRi.min - baseRi.value);
    	}else if(spendRi.min < baseRi.value) {
    		spendRi.value = +spendRi.value + (baseRi.value - spendRi.min);
    	}

    	spendRi.min = baseRifleTotal;
    	spendRi.prevValue = spendRi.value;    	
    }else {
    	baseRi.value = 0;
    }/*---- Base Rifle Skill Calc ----*/    

    baseShotgunTotal =  3 * (sTotal + aTotal) + supMutantRacialSkill;
    baseSh = document.getElementById('baseShotgunSkill');
    spendSh = document.getElementById('spendShotgunSkill');
    if (baseSh.parentElement.previousElementSibling.style.background == tagColor){
        baseShotgunTotal =  3 * (sTotal + aTotal) + 20 + supMutantRacialSkill;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	baseSh.value = baseShotgunTotal;
    	if (spendSh.min > baseSh.value){
    		spendSh.value = spendSh.value - (spendSh.min - baseSh.value);
    	}else if(spendSh.min < baseSh.value) {
    		spendSh.value = +spendSh.value + (baseSh.value - spendSh.min);
    	}

    	spendSh.min = baseShotgunTotal;
    	spendSh.prevValue = spendSh.value;    	
    }else {
    	baseSh.value = 0;
    }/*---- Base Shotgun Skill Calc ----*/  

    baseMGTotal =  10 + (4 * sTotal);
    baseMG = document.getElementById('baseMgSkill');
    spendMG = document.getElementById('spendMgSkill');
    if (baseMG.parentElement.previousElementSibling.style.background == tagColor){
        baseMGTotal =  10 + (4 * sTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (sTotal > 0) {
    	baseMG.value = baseMGTotal;
    	if (spendMG.min > baseMG.value){
    		spendMG.value = spendMG.value - (spendMG.min - baseMG.value);
    	}else if(spendMG.min < baseMG.value) {
    		spendMG.value = +spendMG.value + (baseMG.value - spendMG.min);
    	}

    	spendMG.min = baseMGTotal;
    	spendMG.prevValue = spendMG.value;    	
    }else {
    	baseMG.value = 0;
    }/*---- Base Machine Gun Skill Calc ----*/ 

    /*------------------------------*/
    /*---- Base Skills2 Section ----*/
    /*------------------------------*/ 
    baseGMLaunchTotal = (3 * sTotal) + aTotal;
    baseGML = document.getElementById('baseG/MLaunchSkill');
    spendGML = document.getElementById('spendG/MLaunchSkill');
    if (baseGML.parentElement.previousElementSibling.style.background == tagColor){
        baseGMLaunchTotal = (3 * sTotal) + aTotal + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	baseGML.value = baseGMLaunchTotal;
    	if (spendGML.min > baseGML.value){
    		spendGML.value = spendGML.value - (spendGML.min - baseGML.value);
    	}else if(spendGML.min < baseGML.value) {
    		spendGML.value = +spendGML.value + (baseGML.value - spendGML.min);
    	}

    	spendGML.min = baseGMLaunchTotal;
    	spendGML.prevValue = spendGML.value;    	
    }else {
    	baseGML.value = 0;
    }/*---- Base Grenade/Missile Launcher Skill Calc ----*/ 

    baseMortarsTotal = 10 + (sTotal + iTotal) * 2;
    baseMo = document.getElementById('baseMortarSkill');
    spendMo = document.getElementById('spendMortarSkill');
    if (baseMo.parentElement.previousElementSibling.style.background == tagColor){
        baseMortarsTotal = 10 + (sTotal + iTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (sTotal > 0 && iTotal > 0) {
    	baseMo.value = baseMortarsTotal;
    	if (spendMo.min > baseMo.value){
    		spendMo.value = spendMo.value - (spendMo.min - baseMo.value);
    	}else if(spendMo.min < baseMo.value) {
    		spendMo.value = +spendMo.value + (baseMo.value - spendMo.min);
    	}

    	spendMo.min = baseMortarsTotal;
    	spendMo.prevValue = spendMo.value;    	
    }else {
    	baseMo.value = 0;
    }/*---- Base Mortars Skill Calc ----*/    

    baseFThrowerTotal = (4 * eTotal) + sTotal;
    baseFT = document.getElementById('baseFThrowerSkill');
    spendFT = document.getElementById('spendFThrowerSkill');
    if (baseFT.parentElement.previousElementSibling.style.background == tagColor){
        baseFThrowerTotal = (4 * eTotal) + sTotal + 20;
    }/*Adds tag points to base skill*/
    
    if (eTotal > 0 && sTotal > 0) {
    	baseFT.value = baseFThrowerTotal;
    	if (spendFT.min > baseFT.value){
    		spendFT.value = spendFT.value - (spendFT.min - baseFT.value);
    	}else if(spendFT.min < baseFT.value) {
    		spendFT.value = +spendFT.value + (baseFT.value - spendFT.min);
    	}

    	spendFT.min = baseFThrowerTotal;
    	spendFT.prevValue = spendFT.value;    	
    }else {
    	baseFT.value = 0;
    }/*---- Base Flame Throwers Skill Calc ----*/    

    baseEPistolTotal = (2 * aTotal) + (iTotal * 2);
    baseEP = document.getElementById('baseEPistolSkill');
    spendEp = document.getElementById('spendEPistolSkill');
    if (baseEP.parentElement.previousElementSibling.style.background == tagColor){
        baseEPistolTotal = (2 * aTotal) + (iTotal * 2) + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && iTotal > 0) {
    	baseEP.value = baseEPistolTotal;
    	if (spendEp.min > baseEP.value){
    		spendEp.value = spendEp.value - (spendEp.min - baseEP.value);
    	}else if(spendEp.min < baseEP.value) {
    		spendEp.value = +spendEp.value + (baseEP.value - spendEp.min);
    	}

    	spendEp.min = baseEPistolTotal;
    	spendEp.prevValue = spendEp.value;    	
    }else {
    	baseEP.value = 0;
    }/*---- Base Energy Pistols Skill Calc ----*/

    baseERifleTotal = (2 * pTotal) + (iTotal * 2);
    baseER = document.getElementById('baseERifleSkill');
    spendER = document.getElementById('spendERifleSkill');
    if (baseER.parentElement.previousElementSibling.style.background == tagColor){
        baseERifleTotal = (2 * pTotal) + (iTotal * 2) + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && iTotal > 0) {
    	baseER.value = baseERifleTotal;
    	if (spendER.min > baseER.value){
    		spendER.value = spendER.value - (spendER.min - baseER.value);
    	}else if(spendER.min < baseER.value) {
    		spendER.value = +spendER.value + (baseER.value - spendER.min);
    	}

    	spendER.min = baseERifleTotal;
    	spendER.prevValue = spendER.value;    	
    }else {
    	baseER.value = 0;
    }/*---- Base Energy Rifles Skill Calc ----*/    
       
    baseBEWeapTotal = (2 * sTotal) + (iTotal * 2);
    baseBEW = document.getElementById('baseBEWeapSkill');
    spendBEW = document.getElementById('spendBEWeapSkill');
    if (baseBEW.parentElement.previousElementSibling.style.background == tagColor){
         baseBEWeapTotal = (2 * sTotal) + (iTotal * 2) + 20;
    }/*Adds tag points to base skill*/
    
    if (sTotal > 0 && iTotal > 0) {
    	baseBEW.value = baseBEWeapTotal;
    	if (spendBEW.min > baseBEW.value){
    		spendBEW.value = spendBEW.value - (spendBEW.min - baseBEW.value);

    	}else if(spendBEW.min < baseBEW.value) {
    		spendBEW.value = +spendBEW.value + (baseBEW.value - spendBEW.min);
    	}

    	spendBEW.min = baseBEWeapTotal;
    	spendBEW.prevValue = spendBEW.value;    	
    }else {
    	baseBEW.value = 0;
    }/*---- Base Big Energy Weapons Skill Calc ----*/    

    baseMeleeTotal =  15 + aTotal + (sTotal * 3);
    baseMe = document.getElementById('baseMeleeSkill');
    spendMe = document.getElementById('spendMeleeSkill');
    if (baseMe.parentElement.previousElementSibling.style.background == tagColor){
         baseMeleeTotal =  15 + aTotal + (sTotal * 3) + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	baseMe.value = baseMeleeTotal;
    	if (spendMe.min > baseMe.value){
    		spendMe.value = spendMe.value - (spendMe.min - baseMe.value);
    	}else if(spendMe.min < baseMe.value) {
    		spendMe.value = +spendMe.value + (baseMe.value - spendMe.min);
    	}

    	spendMe.min = baseMeleeTotal;
    	spendMe.prevValue = spendMe.value;    	
    }else {
    	baseMe.value = 0;
    }/*---- Base Melee Skill Calc ----*/  

    baseUnarmedTotal = 20 + (aTotal * 3) + sTotal;
    baseUn = document.getElementById('baseUnarmedSkill');
    spendUn = document.getElementById('spendUnarmedSkill');
    if (baseUn.parentElement.previousElementSibling.style.background == tagColor){
        baseUnarmedTotal =  20 + (aTotal * 3) + sTotal + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && sTotal > 0) {
    	baseUn.value = baseUnarmedTotal;
    	if (spendUn.min > baseUn.value){
    		spendUn.value = spendUn.value - (spendUn.min - baseUn.value);
    	}else if(spendUn.min < baseUn.value) {
    		spendUn.value = +spendUn.value + (baseUn.value - spendUn.min);
    	}

    	spendUn.min = baseUnarmedTotal;
    	spendUn.prevValue = spendUn.value;    	
    }else {
    	baseUn.value = 0;
    }/*---- Base Unarmed Skill Calc ----*/   

    /*------------------------------*/
    /*---- Base Skills3 Section ----*/
    /*------------------------------*/ 
    baseDoctorTotal = 5 + pTotal + iTotal;
    baseDoc = document.getElementById('baseDoctorSkill');
    spendDoc = document.getElementById('spendDoctorSkill');
    if (baseDoc.parentElement.previousElementSibling.style.background == tagColor){
        baseDoctorTotal = 5 + pTotal + iTotal + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && iTotal > 0) {
    	baseDoc.value = baseDoctorTotal;
    	if (spendDoc.min > baseDoc.value){
    		spendDoc.value = spendDoc.value - (spendDoc.min - baseDoc.value);
    	}else if(spendDoc.min < baseDoc.value) {
    		spendDoc.value = +spendDoc.value + (baseDoc.value - spendDoc.min);
    	}

    	spendDoc.min = baseDoctorTotal;
    	spendDoc.prevValue = spendDoc.value;    	
    }else {
    	baseDoc.value = 0;
    }/*---- Base Doctor Skill Calc ----*/ 

    baseFAidTotal = (pTotal + eTotal) * 2;
    baseFA = document.getElementById('baseFAidSkill');
    spendFA = document.getElementById('spendFAidSkill');
    if (baseFA.parentElement.previousElementSibling.style.background == tagColor){
        baseFAidTotal = (pTotal + eTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && eTotal > 0) {
    	baseFA.value = baseFAidTotal;
    	if (spendFA.min > baseFA.value){
    		spendFA.value = spendFA.value - (spendFA.min - baseFA.value);
    	}else if(spendFA.min < baseFA.value) {
    		spendFA.value = +spendFA.value + (baseFA.value - spendFA.min);
    	}

    	spendFA.min = baseFAidTotal;
    	spendFA.prevValue = spendFA.value;    	
    }else {
    	baseFA.value = 0;
    }/*---- Base First Aid Skill Calc ----*/    

    baseSneakTotal = 5 + (3 * aTotal);
    baseSn = document.getElementById('baseSneakSkill');
    spendSn = document.getElementById('spendSneakSkill');
    if (baseSn.parentElement.previousElementSibling.style.background == tagColor){
        baseSneakTotal = 5 + (3 * aTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0) {
    	baseSn.value = baseSneakTotal;
    	if (spendSn.min > baseSn.value){
    		spendSn.value = spendSn.value - (spendSn.min - baseSn.value);
    	}else if(spendSn.min < baseSn.value) {
    		spendSn.value = +spendSn.value + (baseSn.value - spendSn.min);
    	}

    	spendSn.min = baseSneakTotal;
    	spendSn.prevValue = spendSn.value;    	
    }else {
    	baseSn.value = 0;
    }/*---- Base Sneak Skill Calc ----*/    

    baseLockpickTotal = 10 + (pTotal + aTotal);
    baseLo = document.getElementById('baseLockpickSkill');
    spendLo = document.getElementById('spendLockpickSkill');
    if (baseLo.parentElement.previousElementSibling.style.background == tagColor){
        baseLockpickTotal = 10 + (pTotal + aTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && aTotal > 0) {
    	baseLo.value = baseLockpickTotal;
    	if (spendLo.min > baseLo.value){
    		spendLo.value = spendLo.value - (spendLo.min - baseLo.value);
    	}else if(spendLo.min < baseLo.value) {
    		spendLo.value = +spendLo.value + (baseLo.value - spendLo.min);
    	}

    	spendLo.min = baseLockpickTotal;
    	spendLo.prevValue = spendLo.value;    	
    }else {
    	baseLo.value = 0;
    }/*---- Base Lockpicking Skill Calc ----*/

    baseStealingTotal = 5 + (pTotal + aTotal * 2);
    baseSt = document.getElementById('baseStealSkill');
    spendSt = document.getElementById('spendStealSkill');
    if (baseSt.parentElement.previousElementSibling.style.background == tagColor){
        baseStealingTotal = 5 + (pTotal + aTotal * 2) + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0 && aTotal > 0) {
    	baseSt.value = baseStealingTotal;
    	if (spendSt.min > baseSt.value){
    		spendSt.value = spendSt.value - (spendSt.min - baseSt.value);
    	}else if(spendSt.min < baseSt.value) {
    		spendSt.value = +spendSt.value + (baseSt.value - spendSt.min);
    	}

    	spendSt.min = baseStealingTotal;
    	spendSt.prevValue = spendSt.value;    	
    }else {
    	baseSt.value = 0;
    }/*---- Base Stealing Skill Calc ----*/    
       
    baseTMTotal = 10 + aTotal + iTotal;
    baseTM = document.getElementById('baseT/MSkill');
    spendTM = document.getElementById('spendT/MSkill');
    if (baseTM.parentElement.previousElementSibling.style.background == tagColor){
        baseTMTotal = 10 + aTotal + iTotal + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && iTotal > 0) {
    	baseTM.value = baseTMTotal;
    	if (spendTM.min > baseTM.value){
    		spendTM.value = spendTM.value - (spendTM.min - baseTM.value);
    	}else if(spendTM.min < baseTM.value) {
    		spendTM.value = +spendTM.value + (baseTM.value - spendTM.min);
    	}

    	spendTM.min = baseTMTotal;
    	spendTM.prevValue = spendTM.value;    	
    }else {
    	baseTM.value = 0;
    }/*---- Base Traps/Mines Skill Calc ----*/    

    baseScienceTotal = (4 * iTotal);
    baseSc = document.getElementById('baseScienceSkill');
    spendSc = document.getElementById('spendScienceSkill');
    if (baseSc.parentElement.previousElementSibling.style.background == tagColor){
        baseScienceTotal = (4 * iTotal) + 20;
    }/*Adds tag points to base skill*/
    
    if (iTotal > 0 ) {
    	baseSc.value = baseScienceTotal;
    	if (spendSc.min > baseSc.value){
    		spendSc.value = spendSc.value - (spendSc.min - baseSc.value);
    	}else if(spendSc.min < baseSc.value) {
    		spendSc.value = +spendSc.value + (baseSc.value - spendSc.min);
    	}

    	spendSc.min = baseScienceTotal;
    	spendSc.prevValue = spendSc.value;    	
    }else {
    	baseSc.value = 0;
    }/*---- Base Science Skill Calc ----*/  

    baseRepairTotal =  sTotal + (iTotal * 3);
    baseRe = document.getElementById('baseRepairSkill');
    spendRe = document.getElementById('spendRepairSkill');
    if (baseRe.parentElement.previousElementSibling.style.background == tagColor){
        baseRepairTotal =  sTotal + (iTotal * 3) + 20;
    }/*Adds tag points to base skill*/
    
    if (sTotal > 0 && iTotal > 0) {
    	baseRe.value = baseRepairTotal;
    	if (spendRe.min > baseRe.value){
    		spendRe.value = spendRe.value - (spendRe.min - baseRe.value);
    	}else if(spendRe.min < baseRe.value) {
    		spendRe.value = +spendRe.value + (baseRe.value - spendRe.min);
    	}

    	spendRe.min = baseRepairTotal;
    	spendRe.prevValue = spendRe.value;    	
    }else {
    	baseRe.value = 0;
    }/*---- Base Repair Skill Calc ----*/   

    /*------------------------------*/
    /*---- Base Skills4 Section ----*/
    /*------------------------------*/
    baseLandcraftTotal = (aTotal + pTotal) * 2;
    baseCT = document.getElementById('baseP,C/TSkill');
    spendCT = document.getElementById('spendP,C/TSkill');
    if (baseCT.parentElement.previousElementSibling.style.background == tagColor){
        baseLandcraftTotal = (aTotal + pTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (aTotal > 0 && pTotal > 0) {
    	baseCT.value = baseLandcraftTotal;
    	if (spendCT.min > baseCT.value){
    		spendCT.value = spendCT.value - (spendCT.min - baseCT.value);
    	}else if(spendCT.min < baseCT.value) {
    		spendCT.value = +spendCT.value + (baseCT.value - spendCT.min);
    	}

    	spendCT.min = baseLandcraftTotal;
    	spendCT.prevValue = spendCT.value;    	
    }else {
    	baseCT.value = 0;
    }/*---- Base Pilot, Car/Truck Skill Calc ----*/ 

    baseWatercraftTotal = 5 + (pTotal * 3);
    baseWa = document.getElementById('baseP,WSkill');
    spendWa = document.getElementById('spendP,WSkill');
    if (baseWa.parentElement.previousElementSibling.style.background == tagColor){
        baseWatercraftTotal = 5 + (pTotal * 3) + 20;
    }/*Adds tag points to base skill*/
    
    if (pTotal > 0) {
    	baseWa.value = baseWatercraftTotal;
    	if (spendWa.min > baseWa.value){
    		spendWa.value = spendWa.value - (spendWa.min - baseWa.value);
    	}else if(spendWa.min < baseWa.value) {
    		spendWa.value = +spendWa.value + (baseWa.value - spendWa.min);
    	}

    	spendWa.min = baseWatercraftTotal;
    	spendWa.prevValue = spendWa.value;    	
    }else {
    	baseWa.value = 0;
    }/*---- Base Pilot, Watercraft Skill Calc ----*/    

    baseAircraftTotal = (iTotal + pTotal) * 2;
    baseAi = document.getElementById('baseP,ASkill');
    spendAi = document.getElementById('spendP,ASkill');
    if (baseAi.parentElement.previousElementSibling.style.background == tagColor){
        baseAircraftTotal = (iTotal + pTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (iTotal > 0 && pTotal > 0) {
    	baseAi.value = baseAircraftTotal;
    	if (spendAi.min > baseAi.value){
    		spendAi.value = spendAi.value - (spendAi.min - baseAi.value);
    	}else if(spendAi.min < baseAi.value) {
    		spendAi.value = +spendAi.value + (baseAi.value - spendAi.min);
    	}

    	spendAi.min = baseAircraftTotal;
    	spendAi.prevValue = spendAi.value;    	
    }else {
    	baseAi.value = 0;
    }/*---- Base Pilot, Aircraft Skill Calc ----*/    

    baseAPCTankTotal = (sTotal + pTotal) * 2;
    baseAPC = document.getElementById('baseP,APC/TSkill');
    spendAPC = document.getElementById('spendP,APC/TSkill');
    if (baseAPC.parentElement.previousElementSibling.style.background == tagColor){
        baseAPCTankTotal = (sTotal + pTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (sTotal > 0 && pTotal > 0) {
    	baseAPC.value = baseAPCTankTotal;
    	if (spendAPC.min > baseAPC.value){
    		spendAPC.value = spendAPC.value - (spendAPC.min - baseAPC.value);
    	}else if(spendAPC.min < baseAPC.value) {
    		spendAPC.value = +spendAPC.value + (baseAPC.value - spendAPC.min);
    	}

    	spendAPC.min = baseAPCTankTotal;
    	spendAPC.prevValue = spendAPC.value;    	
    }else {
    	baseAPC.value = 0;
    }/*---- Base Pilot, APC/Tank Skill Calc ----*/

    baseSpeechTotal = cTotal * 5;
    baseSp = document.getElementById('baseSpeechSkill');
    spendSp = document.getElementById('spendSpeechSkill');
    if (baseSp.parentElement.previousElementSibling.style.background == tagColor){
        baseSpeechTotal = cTotal * 5 + 20;
    }/*Adds tag points to base skill*/
    
    if (cTotal > 0) {
    	baseSp.value = baseSpeechTotal;
    	if (spendSp.min > baseSp.value){
    		spendSp.value = spendSp.value - (spendSp.min - baseSp.value);
    	}else if(spendSp.min < baseSp.value) {
    		spendSp.value = +spendSp.value + (baseSp.value - spendSp.min);
    	}

    	spendSp.min = baseSpeechTotal;
    	spendSp.prevValue = spendSp.value;    	
    }else {
    	baseSp.value = 0;
    }/*---- Base Speech Skill Calc ----*/    
    
    baseBarterTotal = cTotal * 4;
    baseBa = document.getElementById('baseBarterSkill');
    spendBa = document.getElementById('spendBarterSkill');
    if (baseBa.parentElement.previousElementSibling.style.background == tagColor){
        baseBarterTotal = cTotal * 4 + 20;
    }/*Adds tag points to base skill*/
    
    if (cTotal > 0) {
    	baseBa.value = baseBarterTotal;
    	if (spendBa.min > baseBa.value){
    		spendBa.value = spendBa.value - (spendBa.min - baseBa.value);
    	}else if(spendBa.min < baseBa.value) {
    		spendBa.value = +spendBa.value + (baseBa.value - spendBa.min);    		
    	}

    	spendBa.min = baseBarterTotal;
    	spendBa.prevValue = spendBa.value;         
    }else {
    	baseBa.value = 0;
    }/*---- Base Barter Skill Calc ----*/    
    
    baseGamblingTotal = (lTotal * 4);
    baseGa = document.getElementById('baseGamblingSkill');
    spendGa = document.getElementById('spendGamblingSkill');
    if (baseGa.parentElement.previousElementSibling.style.background == tagColor){
        baseGamblingTotal = (lTotal * 4) + 20;
    }/*Adds tag points to base skill*/
    
    if (lTotal > 0) {
    	baseGa.value = baseGamblingTotal;
    	if (spendGa.min > baseGa.value){
    		spendGa.value = spendGa.value - (spendGa.min - baseGa.value);
    	}else if(spendGa.min < baseGa.value) {
    		spendGa.value = +spendGa.value + (baseGa.value - spendGa.min);    		
    	}

    	spendGa.min = baseGamblingTotal; 
    	spendGa.prevValue = spendGa.value;
    }else {
    	baseGa.value = 0;
    }/*---- Base Gambling Skill Calc ----*/  
    
    baseSurvivalTotal = (eTotal + iTotal) * 2;
    baseSu = document.getElementById('baseSurvivalSkill');
    spendSu = document.getElementById('spendSurvivalSkill');
    if (baseSu.parentElement.previousElementSibling.style.background == tagColor){
        baseSurvivalTotal = (eTotal + iTotal) * 2 + 20;
    }/*Adds tag points to base skill*/
    
    if (eTotal > 0 && iTotal > 0) {
    	baseSu.value = baseSurvivalTotal;
    	if (spendSu.min > baseSu.value){
    		spendSu.value = spendSu.value - (spendSu.min - baseSu.value);
    	}else if(spendSu.min < baseSu.value) {
    		spendSu.value = +spendSu.value + (baseSu.value - spendSu.min);    		
    	}

    	spendSu.min = baseSurvivalTotal;
    	spendSu.prevValue = spendSu.value;
    }else {
    	baseSu.value = 0;
    }/*---- Base Survivalist Skill Calc ----*/ 

    baseTrackingTotal = (iTotal + pTotal) * 3;
    baseTr = document.getElementById('baseTrackSkill');
    spendTr = document.getElementById('spendTrackSkill');
    if (baseTr.parentElement.previousElementSibling.style.background == tagColor){
        baseTrackingTotal = (iTotal + pTotal) * 3 + 20;
    }/*Adds tag points to base skill*/

    if (eTotal > 0 && pTotal > 0) {
    	baseTr.value = baseTrackingTotal;
    	if (spendTr.min > baseTr.value){
    		spendTr.value = spendTr.value - (spendTr.min - baseTr.value);              		
    	}else if(spendTr.min < baseTr.value) {
    		spendTr.value = +spendTr.value + (baseTr.value - spendTr.min);               		
    	}

    	spendTr.min = baseTrackingTotal;
    	spendTr.prevValue = spendTr.value;    
    }else {
    	baseTr.value = 0;
    	spendTr.prevValue = 0;       
    }/*---- Base Tracking Skill Calc ----*/
}/*End of stat based skill calculations & tags*/

document.addEventListener("input", function(){
	skillPtCheck = event.target.prevValue - event.target.value;
    if (event.target.name == "skills" && 
        event.target.parentElement.previousElementSibling.previousElementSibling.style.background == tagColor){
        skillPtCheck = skillPtCheck / 2;    
    }/*Adds tag point cost multiplier*/

	skillIncrement = Math.ceil(((event.target.value-100)/25) + 1) * skillPtCheck;

   	switch (true) {
	    case (event.target.name == "skills" && event.target.value <= 75 ):
			skillPtMod.value = skillPtMod.value - skillPtCheck;			       
			break;			    		         
	    case (event.target.name == "skills" && event.target.value < 201):
			skillPtMod.value = skillPtMod.value - skillIncrement;
			if((event.target.prevValue == 101 || event.target.prevValue == 126 || 
				event.target.prevValue == 151 || event.target.prevValue == 176 || 
				event.target.prevValue == 201) && (skillPtCheck === 1 || skillPtCheck === 0.5)) {
				skillPtMod.value = skillPtMod.value - skillPtCheck;            
			}       
			break; 
		case (event.target.name == "skills" && event.target.value > 200):
			skillPtMod.value = skillPtMod.value - skillPtCheck * 6;			        			                
			break;			    			    
	    /*default: 
	        console.log(event.target.name);*/
	}
		
	event.target.prevValue = event.target.value;
	secondaryStats();

});/*End of Skill Point Spending Code*/

function tagSkills(){
    taggedSkills = event.target;
    
    var tooltip = new HTML5TooltipUIComponent;
    var tooltip2 = new HTML5TooltipUIComponent;
    var tipTarget = event.target;

    if(taggedSkills.nextElementSibling.firstChild.value == 
    taggedSkills.nextElementSibling.nextElementSibling.firstChild.value && tagNum < tagMax ){
    	if(event.target.style.background == tagColor){
            event.target.style.background = 'white';
            tagNum -= 1;
        }else {
            event.target.style.background = tagColor;
            tagNum += 1;          
        }
        
    }else if(event.target.style.background == tagColor && taggedSkills.nextElementSibling.firstChild.value == 
    taggedSkills.nextElementSibling.nextElementSibling.firstChild.value){
            event.target.style.background = 'white';
            tagNum -= 1;              
    }else if (event.target.style.background != tagColor && tagNum == tagMax) {        
        tooltip.set({
          animateFunction: "foldout",
          color: "indigo",
          contentText: "You may only have a maximum of " + tagMax +  " tagged skills.",
          stickTo: "right",                
          maxWidth: 130,      
          target: tipTarget
        });//Max tags reached indicator
        tooltip.show();        
    }else {//TOOLTOP Reference site https://github.com/ytiurin/html5tooltipsjs and http://ytiurin.github.io/html5tooltipsjs/
        tooltip2.set({
          animateFunction: "spin",
          color: "kelly",
          contentText: "This skill's Base and Spend values must be equal to add or remove a tag.",
          stickTo: "right",                        
          maxWidth: 130,
          target: tipTarget
        });//Can't tag/untag skills with spent skill pts
        tooltip2.show();               
    }/*Tag Skill function*/    

    tooltip.mount();
    tooltip2.mount();
    tipTarget.addEventListener('mousemove',function(){            
            tooltip.hide();
            tooltip2.hide();
        });    

    secondaryStats();
    }
    
function save(){
    [].forEach.call(document.querySelector('#justice').elements, function(el) {
        localStorage.setItem(el.id, el.value);    
        if (el.prevValue != undefined){
            localStorage.setItem(el.id, el.prevValue);
        }
    });    
    var elements = document.getElementsByClassName('skName');
    for (var i = 0; i < elements.length; i++) {
        localStorage.setItem(i, elements[i].style.backgroundColor);         
    }
}

function load() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
    
function loader(){    
    var elements = document.getElementsByClassName('skName');
     for (var i = 0; i < elements.length; i++) {
        //elements[i] = elements[i].style.backgroundColor;
        if (localStorage.getItem(i) == tagColor) {            
            elements[i].click();
        }        
    }
    // then refresh the page and run this to restore your form values:
    [].forEach.call(document.querySelector('#justice').elements, function(el) {
      el.value = localStorage.getItem(el.id);
      if (el.prevValue != undefined){
        el.prevValue = localStorage.getItem(el.id);
        }
        statTotals();
        secondaryStats();
        skillTotals();

    });
   
    document.getElementById('undergarmentButton').click();
    document.getElementById('armorButton').click();    
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        loader();
    }

    findTotal();
    statTotals();
    secondaryStats();
    skillTotals();
}/*Reloads page and runs loader when Load/Refresh button clicked*/