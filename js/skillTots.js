
function skillTotals(){


			//need requirements done and armor will be completely finished
			//arWt = 0;
			//arStReq = 0;
			//ugWt = 0;
			//ugStReq = 0;
			//arpeReq = 0;
			//aragReq = 0;
						
						
      	
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

	}

	if (event.target.matches('.skName')) {
		skillTotals();		
	}

}, false);

document.addEventListener("change", function (event) {

	if (event.target.name == 'skills' || event.target.name == 'qtyMod' ||
		event.target.name == 'qtyBase') {
		skillTotals();
	}

}, false);