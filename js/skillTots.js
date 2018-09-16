
var myArmor = new Select('#dmgCalc',{    
    filtered: 'auto',    
    filter_threshold: 4,    
    filter_placeholder: 'Damage Type...'
});

let 
hitCT = document.getElementById('hitCount'),
dmgDisp = document.getElementById('dmgDisplay'),
dmgTaken = document.getElementById('damage'),
dmgCalc = document.getElementById('dmgCalc'),
throwRng = document.getElementById('thrownRng'),
thrownWt = document.getElementById('thrownWeight');

function skillTotals(){
      	
	spendPi = document.getElementById('spendPistolSkill');
	totPi = document.getElementById('totalPistolSkill');
	totPi.value = +spendPi.value /*+ designated variable*/;

	spendSMG = document.getElementById('spendSMGSkill');
	totSMG = document.getElementById('totalSMGSkill');
	totSMG.value = +spendSMG.value /*+ designated variable*/;

	spendAR = document.getElementById('spendARSkill');
	totAR = document.getElementById('totalARSkill');
	totAR.value = +spendAR.value /*+ designated variable*/;

	spendPr = document.getElementById('spendPrimSkill');
	totPr = document.getElementById('totalPrimSkill');
	totPr.value = +spendPr.value /*+ designated variable*/;

	spendTh = document.getElementById('spendThrowSkill');
	totTh = document.getElementById('totalThrowSkill');
	totTh.value = +spendTh.value /*+ designated variable*/;

	spendRi = document.getElementById('spendRifleSkill');
	totRi = document.getElementById('totalRifleSkill');
	totRi.value = +spendRi.value /*+ designated variable*/;

	spendSh = document.getElementById('spendShotgunSkill');
	totSh = document.getElementById('totalShotgunSkill');
	totSh.value = +spendSh.value /*+ designated variable*/;

	spendMG = document.getElementById('spendMgSkill');
	totMG = document.getElementById('totalMgSkill');
	totMG.value = +spendMG.value /*+ designated variable*/;

	spendGML = document.getElementById('spendG/MLaunchSkill');
	totGML = document.getElementById('totalG/MLaunchSkill');
	totGML.value = +spendGML.value /*+ designated variable*/;

	spendMo = document.getElementById('spendMortarSkill');
	totMo = document.getElementById('totalMortarSkill');
	totMo.value = +spendMo.value /*+ designated variable*/;

	spendFT = document.getElementById('spendFThrowerSkill');
	totFT = document.getElementById('totalFThrowerSkill');
	totFT.value = +spendFT.value /*+ designated variable*/;

	spendEp = document.getElementById('spendEPistolSkill');
	totEp = document.getElementById('totalEPistolSkill');
	totEp.value = +spendEp.value /*+ designated variable*/;

	spendER = document.getElementById('spendERifleSkill');
	totER = document.getElementById('totalERifleSkill');
	totER.value = +spendER.value /*+ designated variable*/;

	spendBEW = document.getElementById('spendBEWeapSkill');
	totBEW = document.getElementById('totalBEWeapSkill');
	totBEW.value = +spendBEW.value /*+ designated variable*/;

	spendMe = document.getElementById('spendMeleeSkill');
	totMe = document.getElementById('totalMeleeSkill');
	totMe.value = +spendMe.value /*+ designated variable*/;

	spendUn = document.getElementById('spendUnarmedSkill');
	totUn = document.getElementById('totalUnarmedSkill');
	totUn.value = +spendUn.value /*+ designated variable*/;

	spendDoc = document.getElementById('spendDoctorSkill');
	totDoc = document.getElementById('totalDoctorSkill');
	totDoc.value = +spendDoc.value + doctorAdjust;

	spendFA = document.getElementById('spendFAidSkill');
	totFA = document.getElementById('totalFAidSkill');
	totFA.value = +spendFA.value + firstAidAdjust;

	spendSn = document.getElementById('spendSneakSkill');
	totSn = document.getElementById('totalSneakSkill');
	totSn.value = +spendSn.value + sneakAdjust;

	spendLo = document.getElementById('spendLockpickSkill');
	totLo = document.getElementById('totalLockpickSkill');
	totLo.value = +spendLo.value + lockpickAdjust;

	spendSt = document.getElementById('spendStealSkill');
	totSt = document.getElementById('totalStealSkill');
	totSt.value = +spendSt.value + stealingAdjust;

	spendTM = document.getElementById('spendT/MSkill');
	totTM = document.getElementById('totalT/MSkill');
	totTM.value = +spendTM.value + trapsMinesAdjust;

	spendSc = document.getElementById('spendScienceSkill');
	totSc = document.getElementById('totalScienceSkill');
	totSc.value = +spendSc.value + scienceAdjust;

	spendRe = document.getElementById('spendRepairSkill');
	totRe = document.getElementById('totalRepairSkill');
	totRe.value = +spendRe.value + repairAdjust;

	spendCT = document.getElementById('spendP,C/TSkill');
	totCT = document.getElementById('totalP,C/TSkill');
	totCT.value = +spendCT.value + pCTAdjust;

	spendWa = document.getElementById('spendP,WSkill');
	totWa = document.getElementById('totalP,WSkill');
	totWa.value = +spendWa.value + pWatercAdjust;

	spendAi = document.getElementById('spendP,ASkill');
	totAi = document.getElementById('totalP,ASkill');
	totAi.value = +spendAi.value + pACAdjust;

	spendAPC = document.getElementById('spendP,APC/TSkill');
	totAPC = document.getElementById('totalP,APC/TSkill');
	totAPC.value = +spendAPC.value + pAPCTAdjust;

	spendSp = document.getElementById('spendSpeechSkill');
	totSp = document.getElementById('totalSpeechSkill');
	totSp.value = +spendSp.value /*+ designated variable*/;

	spendBa = document.getElementById('spendBarterSkill');
	totBa = document.getElementById('totalBarterSkill');
	totBa.value = +spendBa.value /*+ designated variable*/;

	spendGa = document.getElementById('spendGamblingSkill');
	totGa = document.getElementById('totalGamblingSkill');
	totGa.value = +spendGa.value /*+ designated variable*/;

	spendSu = document.getElementById('spendSurvivalSkill');
	totSu = document.getElementById('totalSurvivalSkill');
	totSu.value = +spendSu.value /*+ designated variable*/;

	spendTr = document.getElementById('spendTrackSkill');
	totTr = document.getElementById('totalTrackSkill');
	totTr.value = +spendTr.value /*+ designated variable*/;

    	
    
 }/*Skill Totals (changes from Armor/Items/Perks/Etc.)*/

document.addEventListener("click", function (event) {

	if (event.target.id == 'armorButton' || event.target.id == 'raceSelector') {
		skillTotals();

	}//click event for skill totals

	if (event.target.matches('.skName')) {
		skillTotals();		
	}//click event for skill totals

	if (event.target.id == 'damageCalcButton') {
		damageCalc();		
	}//click event for skill totals

	if (event.target.id == 'thrownButton') {
		thrownObject();		
	}//click event for collected thrown objects

}, false);

document.addEventListener("change", function (event) {

	if (event.target.name == 'skills' || event.target.name == 'qtyMod' ||
		event.target.name == 'qtyBase') {
		skillTotals();
	}

	if (event.target.id == 'thrownMod' || event.target.id == 'thrownWeight') {
		statTotals();
		thrownObject();		
	}//change event for collected thrown objects

}, false);//click event for skill totals


function damageCalc() {
	switch (dmgCalc.value) {//((100-DR)/100)*DMG - DT(# of hits)
		case 'Normal':		
			dmgDT = normalDT.value;
			dmgDR = normalDR.value;
			break;

		case 'Laser':		
			dmgDT = laserDT.value;
			dmgDR = laserDR.value;
			break;

		case 'Fire':		
			dmgDT = fireDT.value;
			dmgDR = fireDR.value;
			break;

		case 'Plasma':		
			dmgDT = plasmaDT.value;
			dmgDR = plasmaDR.value;
			break;

		case 'Explode':		
			dmgDT = explodeDT.value;
			dmgDR = explodeDR.value;
			break;

		default:
			dmgDT = 0;
			dmgDR = 0;
	}

	dmgDisp.innerHTML = "Take: " + Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value) + 
		" " + dmgCalc.value.toLowerCase() +	" damage.";
	if (Math.round(((100 - dmgDR)/100)*dmgTaken.value - dmgDT * hitCT.value) < 0){ 
		dmgDisp.innerHTML = "Take: " + 0 + " " + dmgCalc.value.toLowerCase() + " damage.";
	}

}

function thrownObject() {
	quickMaths = sTotal + +document.getElementById('thrownMod').value - 5;
	if (quickMaths < 1) {		
		quickMaths = 1;		
	}

	let thrownDieNum = quickMaths - 2;
	let thrownDieType;
	thrownBonusDmg = (quickMaths + +document.getElementById('modMeleeD').value) * thrownWt.value;
	throwRng.value = ((sTotal + +document.getElementById('thrownMod').value)  * 2) - (+thrownWt.value + 5);

	switch (true) {
		case (thrownWt.value < 6):
			thrownDieType = 4;
			break;

		case (thrownWt.value < 8):
			thrownDieType = 6;
			break;

		case (thrownWt.value < 10):
			thrownDieType = 8;
			break;

		case (thrownWt.value < 11):
			thrownDieType = 10;
			break;

		case (thrownWt.value < 17):
			thrownDieType = 12;
			break;

		case (thrownWt.value < 61):
			thrownDieType = 20;
			break;

		default:
		thrownDieType = 100;
	}

	if (thrownDieNum < 1) {
		thrownDieNum = 1;
	}

	document.getElementById('thrownButton').innerHTML = thrownDieNum + "d" + thrownDieType + " + " + thrownBonusDmg;


}